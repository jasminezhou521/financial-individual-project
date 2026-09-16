/**
 * CLP Holdings Limited (HKEX: 0002) — key financial data, FY2020–FY2025.
 * CLP is a Hong Kong-listed, vertically-integrated power/infrastructure group
 * (generation, transmission & retail in Hong Kong, Mainland China, Australia
 * (EnergyAustralia), India, Southeast Asia, Taiwan).
 *
 * Figures are drawn from CLP's own Annual Results announcements / highlights
 * decks (clpgroup.com/investor-relations) for FY2020-FY2025, cross-checked
 * against third-party financial data aggregators where CLP's own release
 * wasn't directly reachable in this exercise. "Total Earnings" is CLP's own
 * label for statutory profit attributable to shareholders; "Operating
 * Earnings" is CLP's own non-GAAP core-business measure, excluding fair
 * value movements on energy derivatives and other one-off/exceptional items.
 *
 * This is a personal portfolio exercise, not a CLP Holdings publication —
 * see README and the disclaimer on every page for details.
 *
 * Revision note: after a reader's fact-check flagged two errors, this
 * dataset went through a full line-by-line re-verification against CLP's
 * own results announcements. Fixed: (1) FY2022 Operating Earnings was
 * overstated at HK$7.56bn; correct is HK$4.623bn (down 51.4% from
 * FY2021's HK$9.517bn). (2) The dividend-per-share series showed a
 * fabricated steady rise (2.62 -> 2.91 across 2020-2023); correct is flat
 * at HK$3.10 for all four of those years, only rising in 2024/2025.
 * (3) FY2020/FY2021 Total Earnings were both off by ~1-2% (now corrected
 * to HK$11.456bn / HK$8.491bn). (4) The "debt/equity" capital-structure
 * KPI used a third-party ratio CLP itself doesn't report; replaced with
 * CLP's own disclosed "net debt / total capital" ratio (39% at FY2024).
 * Revenue, Total Earnings FY2022-FY2025, Operating Earnings FY2021-FY2025,
 * total assets, and equity attributable to shareholders (FY2022/FY2023)
 * were all independently re-confirmed and are unchanged.
 */

const CLP_DATA = {
  asOf: "FY2025 (reported 26 Feb 2026)",
  currency: "HKD",

  years: [2020, 2021, 2022, 2023, 2024, 2025],

  // Consolidated revenue, HK$bn.
  revenue: {
    values: [79.59, 83.96, 100.66, 87.17, 90.96, 88.02],
  },

  // "Total Earnings" — statutory profit attributable to shareholders, HK$bn.
  totalEarnings: {
    values: [11.456, 8.491, 0.924, 6.655, 11.742, 10.468],
    note:
      "2022's near-wipeout was driven almost entirely by EnergyAustralia: a HK$2.9bn fair-value loss on energy hedges plus unplanned outages at the Yallourn (VIC) and Mount Piper (NSW) coal plants forced CLP to buy replacement power at spiking spot prices.",
  },

  // "Operating Earnings" — CLP's own underlying/core measure, ex fair-value
  // movements and exceptional items, HK$bn. Comparable disclosure from 2020.
  operatingEarnings: {
    years: [2020, 2021, 2022, 2023, 2024, 2025],
    values: [11.577, 9.517, 4.623, 10.127, 10.949, 10.69],
  },

  // Full-year dividend per share, HK$. Flat at HK$3.10 for four straight
  // years (2020-2023, incl. through the 2022 earnings shock), then raised
  // in 2024 and 2025.
  dividendPerShare: {
    values: [3.10, 3.10, 3.10, 3.10, 3.15, 3.20],
  },

  // Return on equity, %, self-calculated as Total Earnings ÷ year-end equity
  // attributable to shareholders, except where noted.
  roe: {
    years: [2021, 2022, 2023, 2024],
    values: [7.3, 0.8, 6.3, 12.0],
    basis: ["calculated", "calculated", "calculated", "third-party estimate"],
    note:
      "2021-2023 calculated here from CLP's reported Total Earnings ÷ equity attributable to shareholders at year end (HK$116.9bn / 109.4bn / 106.2bn — the FY2022 and FY2023 equity figures are independently confirmed; FY2021's is carried from the same original source and not separately re-verified). 2024 (~12%) is a third-party estimate on a slightly different profit/equity base (~HK$13bn / ~HK$110bn) — shown for direction, not exact comparability.",
  },

  // Latest available capital-structure / coverage snapshot (FY2024). CLP's
  // own disclosed gearing metric is net debt / total capital, not a simple
  // debt/equity ratio — used here instead of a third-party approximation.
  capitalStructure: {
    year: 2024,
    netDebtToTotalCapital: 0.39, // CLP's own disclosed ratio
    ffoInterestCover: 11, // x, funds from operations / interest expense (CLP-disclosed; unchanged from FY2023)
  },

  totalAssets: {
    years: [2021, 2022, 2023, 2024],
    values: [239.81, 236.03, 229.05, 233.71], // HK$bn — independently re-confirmed
  },

  equityAttributable: {
    years: [2021, 2022, 2023],
    values: [116.92, 109.39, 106.22], // HK$bn — FY2022/FY2023 independently re-confirmed
  },

  sources: [
    {
      label: "CLP Holdings — 2025 Annual Results announcement & highlights (26 Feb 2026)",
      url: "https://www.clpgroup.com/en/investor-relations/financial-reporting/results-and-presentations.html",
    },
    {
      label: "CLP Holdings — 2024 Annual Results Presentation & Highlights (24 Feb 2025)",
      url: "https://www.clpgroup.com/content/dam/clp-group/channels/investor/document/3-2-results---presentations/2024/CLP%202024%20Annual%20Results%20Presentation.pdf.coredownload.pdf",
    },
    {
      label: "CLP Holdings — 2023 Annual Results Highlights (26 Feb 2024)",
      url: "https://www.clpgroup.com/content/dam/clp-group/channels/media/document/embedded_pdfs_en/2023AR_highlights_en.pdf",
    },
    {
      label: "CLP Holdings — 2022 Annual Report / Results Highlights (27 Feb 2023)",
      url: "https://www.clpgroup.com/content/dam/clp-group/channels/investor/document/3-3-financial-reports/2022/e_2022Annual%20Report.pdf",
    },
    {
      label: "CLP Holdings — Investor Relations, Quick Facts & Dividends",
      url: "https://www.clpgroup.com/en/investor-relations/financial-reporting/quick-facts.html",
    },
    {
      label: "South China Morning Post — \"Hong Kong utility CLP's 2024 profit surges 76% on strong performance in Australia\"",
      url: "https://www.scmp.com/business/article/3299883/hong-kong-utility-clps-2024-profit-surges-76-strong-performance-australia",
    },
  ],
};
