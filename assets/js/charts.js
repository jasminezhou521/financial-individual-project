/* Renders the CLP Holdings trend charts on index.html using Chart.js.
   Colors are read from the CSS custom properties in style.css so charts
   follow the same light/dark tokens as the rest of the page. */

(function () {
  function cssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function palette() {
    return {
      series1: cssVar("--series-1"),
      series2: cssVar("--series-2"),
      text: cssVar("--text-secondary"),
      muted: cssVar("--text-muted"),
      grid: cssVar("--gridline"),
      surface: cssVar("--surface-2"),
    };
  }

  function baseOptions(p, yFormat) {
    return {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: p.surface,
          titleColor: p.text,
          bodyColor: p.text,
          borderColor: p.grid,
          borderWidth: 1,
          padding: 10,
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${yFormat(ctx.parsed.y)}`,
          },
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: p.muted, font: { size: 11.5 } },
        },
        y: {
          grid: { color: p.grid },
          ticks: { color: p.muted, font: { size: 11.5 }, callback: (v) => yFormat(v) },
        },
      },
    };
  }

  const charts = [];
  let earningsChart = null;
  let earningsView = "both"; // "both" | "total" | "underlying"

  function applyEarningsView() {
    if (!earningsChart) return;
    earningsChart.setDatasetVisibility(0, earningsView !== "underlying");
    earningsChart.setDatasetVisibility(1, earningsView !== "total");
    earningsChart.update();
  }

  function renderAll() {
    const p = palette();
    const d = CLP_DATA;

    charts.forEach((c) => c.destroy());
    charts.length = 0;

    // --- Chart 1: Revenue ---
    charts.push(
      new Chart(document.getElementById("chart-revenue"), {
        type: "line",
        data: {
          labels: d.years,
          datasets: [
            {
              label: "Revenue",
              data: d.revenue.values,
              borderColor: p.series1,
              backgroundColor: p.series1,
              borderWidth: 2,
              pointRadius: 4,
              pointBackgroundColor: p.series1,
              tension: 0.25,
              fill: false,
            },
          ],
        },
        options: baseOptions(p, (v) => `HK$${v.toFixed(1)}bn`),
      })
    );

    // --- Chart 2: Total Earnings vs Operating Earnings ---
    earningsChart = new Chart(
      document.getElementById("chart-earnings"),
      {
        type: "line",
        data: {
          labels: d.years,
          datasets: [
            {
              label: "Total Earnings (statutory)",
              data: d.totalEarnings.values,
              borderColor: p.series1,
              backgroundColor: p.series1,
              borderWidth: 2,
              pointRadius: 4,
              pointBackgroundColor: p.series1,
              tension: 0.25,
              fill: false,
            },
            {
              label: "Operating Earnings (underlying)",
              data: d.operatingEarnings.values,
              borderColor: p.muted,
              backgroundColor: p.muted,
              borderWidth: 2,
              borderDash: [5, 4],
              pointRadius: 4,
              pointBackgroundColor: p.muted,
              tension: 0.25,
              fill: false,
            },
          ],
        },
        options: baseOptions(p, (v) => `HK$${v.toFixed(1)}bn`),
      }
    );
    charts.push(earningsChart);
    applyEarningsView();

    // --- Chart 3: Dividend per share ---
    charts.push(
      new Chart(document.getElementById("chart-dps"), {
        type: "line",
        data: {
          labels: d.years,
          datasets: [
            {
              label: "Dividend per share",
              data: d.dividendPerShare.values,
              borderColor: p.series2,
              backgroundColor: p.series2,
              borderWidth: 2,
              pointRadius: 4,
              pointBackgroundColor: p.series2,
              tension: 0.25,
              fill: false,
            },
          ],
        },
        options: baseOptions(p, (v) => `HK$${v.toFixed(2)}`),
      })
    );
  }

  function initEarningsToggle() {
    const buttons = document.querySelectorAll("#chart-earnings-toggle button");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        earningsView = btn.getAttribute("data-view");
        applyEarningsView();
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderAll();
    initEarningsToggle();
  });

  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", () => {
    if (!document.documentElement.hasAttribute("data-theme")) renderAll();
  });
})();
