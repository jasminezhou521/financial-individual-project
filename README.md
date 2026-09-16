# Mini Financial Analysis — CLP Holdings Ltd (0002.HK)

A small, self-contained portfolio project: a static website that turns CLP
Holdings' FY2020–FY2025 reported financials into a trend/ratio dashboard plus
a 1–2 page written business-insight interpretation.

Built as a sample for HSBC's **Business Analyst – Finance (Graduate, Global
Infrastructure)** application — the goal is to demonstrate the core skill the
role asks for: turning report-and-accounts numbers into a business narrative,
not just recomputing ratios.

**This project is not affiliated with, endorsed by, or reviewed by CLP
Holdings Limited or HSBC Holdings plc.** See the disclaimer on every page.

## Why CLP Holdings

- It's a real, capital-intensive infrastructure/utility business (power
  generation, transmission and retail across Hong Kong, Mainland China,
  Australia, India and Southeast Asia) — directly relevant to a Global
  Infrastructure line, without being the hiring company itself.
- Its FY2020–FY2025 numbers contain a genuine story (a 2022 energy-hedging
  shock in Australia, full recovery, an unbroken dividend through the shock)
  that rewards actually reading the numbers rather than restating them.
- Standard corporate ratios (current ratio, ROE, gearing) are meaningful for
  a business like this in a way they generally aren't for a bank — so the
  ratio choices here are closer to what a generalist BA-Finance exercise
  would expect.

## What's in here

```
index.html          Dashboard: KPI tiles + four trend charts (Chart.js)
analysis.html        1-2 page written interpretation ("so what", not just charts)
assets/css/style.css  Shared styling (light/dark mode aware)
assets/js/data.js     The financial dataset, with inline source notes/caveats
assets/js/charts.js   Chart rendering
```

No build step — it's plain HTML/CSS/JS. Open `index.html` directly in a
browser, or serve the folder with any static file server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

To publish it (e.g. for a CV/application link), the simplest option is
**GitHub Pages**: Settings → Pages → Deploy from branch → root, on this repo.

## Data & methodology

All figures are drawn from CLP Holdings' own Annual Results announcements and
investor-relations materials, cross-checked against third-party financial
data sources where a primary-source PDF wasn't directly reachable during
research. Every chart that relies on a self-calculated or estimated figure
(rather than a number stated verbatim in CLP's own release) is flagged in its
footnote — see `assets/js/data.js` for the underlying values and notes, and
`analysis.html#sources` for the full source list.

This is a personal research exercise, not investment advice, and hasn't been
audited or reviewed by CLP Holdings or any professional adviser. A few figures
(notably FY2024 ROE and one FY2024 dividend-per-share data point) had minor
disagreement between sources during research; both are called out explicitly
rather than silently resolved.

## Before sharing this publicly

- Double-check the author credit in the page footers and swap in your real
  name/contact details if `Jasmine Zhou` isn't accurate.
- If you want to cite this for an interview, it's worth spot-checking the
  headline numbers (revenue, Total Earnings, dividend per share) against
  CLP's most recent Annual Report PDF directly, since some figures here were
  reconciled from search snippets rather than the primary PDF.

— Author: Jasmine Zhou
