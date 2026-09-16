/* Small progressive-enhancement touches: fade/slide elements in as they
   scroll into view, and count the KPI numbers up from zero on first
   appearance. Everything here degrades to "just show it" if IntersectionObserver
   isn't available, and respects prefers-reduced-motion via CSS. */

(function () {
  function initReveal() {
    const targets = document.querySelectorAll(
      ".kpi-tile, .chart-card, .disclaimer, .article > h2, .callout"
    );
    targets.forEach((el) => el.classList.add("reveal"));

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );
    targets.forEach((el, i) => {
      el.style.transitionDelay = Math.min(i % 6, 5) * 45 + "ms";
      io.observe(el);
    });

    // Safety net: a screenshot tool, print view, or PDF export won't scroll
    // to trigger these, so nothing should stay permanently invisible.
    window.setTimeout(() => {
      targets.forEach((el) => el.classList.add("is-visible"));
    }, 2000);
  }

  function runCountUp(el) {
    if (el.dataset.counted) return;
    el.dataset.counted = "1";
    const target = parseFloat(el.getAttribute("data-count-target"));
    if (Number.isNaN(target)) return;
    const decimals = parseInt(el.getAttribute("data-count-decimals") || "0", 10);
    const prefix = el.getAttribute("data-count-prefix") || "";
    const suffix = el.getAttribute("data-count-suffix") || "";
    const duration = 850;
    const start = performance.now();

    function frame(now) {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + (target * eased).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(frame);
      else el.textContent = prefix + target.toFixed(decimals) + suffix;
    }
    requestAnimationFrame(frame);
  }

  function initCountUp() {
    const els = document.querySelectorAll("[data-count-target]");
    if (!els.length) return;

    if (!("IntersectionObserver" in window)) {
      els.forEach(runCountUp);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCountUp(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    els.forEach((el) => io.observe(el));

    // Safety net for tools that never scroll (screenshotters, PDF export).
    window.setTimeout(() => {
      els.forEach((el) => {
        if (!el.dataset.counted) runCountUp(el);
      });
    }, 2000);
  }

  document.addEventListener("DOMContentLoaded", () => {
    initReveal();
    initCountUp();
  });
})();
