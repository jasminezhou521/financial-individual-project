# Mini Financial Analysis — CLP Holdings Ltd (0002.HK)

A small, self-contained portfolio project: a static website that turns CLP
Holdings' FY2023–FY2025 reported financials into a trend dashboard plus a
1–2 page written business-insight interpretation.

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
- Its FY2023–FY2025 numbers contain a genuine story: a HK$5.9bn non-cash
  goodwill impairment made FY2023 statutory profit look far worse than the
  underlying business, and the resulting "76% profit surge" in FY2024 was
  reported everywhere as a turnaround when the core-business measure
  (Operating Earnings) was actually declining both years. That rewards
  reading the numbers rather than repeating the headline.

## Scope: three years, four metrics, on purpose

This page originally covered six years (FY2020–FY2025) and eight-plus
metrics, including ROE, gearing, and interest coverage. Two rounds of
fact-checking (one from a reader's spot-check, one a full re-verification
in response) found several genuine errors, including a case where two
similarly-named CLP metrics ("Operating Earnings" vs. "Operating Earnings
before fair value movements") got conflated. Rather than keep patching a
wide page pieced together from search snippets, the scope was cut to three
years and four metrics: Revenue, Total Earnings, Operating Earnings, and
dividend per share, each checked directly against CLP's own results
announcements and presentations (with specific page references). Reliability
here comes from a narrower, consistent basis, not from covering more years.

## What's in here

```
index.html          Dashboard: KPI tiles + three trend charts (Chart.js)
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
investor-relations materials for FY2023–FY2025 — see `assets/js/data.js` for
the underlying values and source notes, and `analysis.html#sources` for the
full source list with page references.

This is a personal research exercise, not investment advice, and hasn't been
audited or reviewed by CLP Holdings or any professional adviser.

## Before sharing this publicly

- Double-check the author credit in the page footers and swap in your real
  name/contact details if `Jasmine Zhou` isn't accurate.
- If you want to cite this for an interview, it's still worth spot-checking
  the headline numbers against CLP's most recent results announcement
  directly — this dataset has been through two verification passes, but
  "verified by me" isn't the same as "verified by you."

— Author: Jasmine Zhou
