/**
 * CLP Holdings Limited (HKEX: 0002) — key financial data, FY2023–FY2025.
 * CLP is a Hong Kong-listed, vertically-integrated power/infrastructure group
 * (generation, transmission & retail in Hong Kong, Mainland China, Australia
 * (EnergyAustralia), India, Southeast Asia, Taiwan).
 *
 * Every figure below is confirmed directly against CLP's own primary
 * disclosures (annual results presentations and announcements), not just a
 * secondary aggregator. "Total Earnings" is CLP's own label for statutory
 * profit attributable to shareholders. "Operating Earnings" here is CLP's
 * own headline non-GAAP measure (which still includes fair-value movements
 * on energy derivatives, but excludes "items affecting comparability" such
 * as impairments and disposal gains/losses) — the same definition is used
 * consistently across all three years shown.
 *
 * This is a personal portfolio exercise, not a CLP Holdings publication —
 * see README and the disclaimer on every page for details.
 *
 * Scope note: this page originally covered FY2020-FY2025 and several more
 * ratios (ROE, gearing, FFO interest cover). After two rounds of fact-
 * checking turned up a genuinely confusing web of similarly-named CLP
 * metrics (e.g. "Operating Earnings" vs "Operating Earnings before fair
 * value movements" are two different, both-real numbers), the scope was
 * deliberately cut to three years and four metrics on one consistent
 * basis each, rather than six years with more room for exactly that kind
 * of mix-up. Reliability here comes from a narrower, consistent basis, not
 * from covering more years.
 */

const CLP_DATA = {
  asOf: "FY2025 (reported 26 Feb 2026)",
  currency: "HKD",

  years: [2023, 2024, 2025],

  // Consolidated revenue, HK$bn.
  revenue: {
    values: [87.169, 90.964, 88.018],
  },

  // "Total Earnings" — statutory profit attributable to shareholders, HK$bn.
  totalEarnings: {
    values: [6.655, 11.742, 10.468],
    note:
      "FY2023's low base was driven by a HK$5.9bn non-cash goodwill impairment on EnergyAustralia's Customer business, disclosed in a January 2024 profit warning ahead of full-year results. FY2024's 76% jump is largely the mechanical absence of a repeat of that one-off charge, not a comparable-scale improvement in the underlying business — see Operating Earnings for the steadier picture.",
  },

  // "Operating Earnings" — CLP's own headline non-GAAP measure (includes
  // fair-value movements, excludes items affecting comparability like the
  // FY2023 impairment), HK$bn. Same basis across all three years.
  operatingEarnings: {
    values: [12.252, 11.648, 10.909],
  },

  // Full-year dividend per share, HK$.
  dividendPerShare: {
    values: [3.10, 3.15, 3.20],
  },

  sources: [
    {
      label: "CLP Holdings — 2025 Annual Results announcement (26 Feb 2026), p.8",
      url: "https://www.clpgroup.com/content/dam/clp-group/channels/investor/document/3-4-announcements-circulars/2026/e_Results%20Announcement_20260226_final_1137.pdf.coredownload.pdf",
    },
    {
      label: "CLP Holdings — 2024 Annual Results Presentation (24 Feb 2025), p.27",
      url: "https://www.clpgroup.com/content/dam/clp-group/channels/investor/document/3-2-results---presentations/2024/CLP%202024%20Annual%20Results%20Presentation.pdf.coredownload.pdf",
    },
    {
      label: "CLP Holdings — 2023 Annual Results Highlights (26 Feb 2024), p.26",
      url: "https://www.clpgroup.com/content/dam/clp-group/channels/media/document/embedded_pdfs_en/2023AR_highlights_en.pdf",
    },
    {
      label: "HKEX filing — Profit warning: impairment of goodwill of EnergyAustralia's Customer business (30 Jan 2024)",
      url: "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0130/2024013000234.pdf",
    },
    {
      label: "South China Morning Post — \"Hong Kong utility CLP's 2024 profit surges 76% on strong performance in Australia\"",
      url: "https://www.scmp.com/business/article/3299883/hong-kong-utility-clps-2024-profit-surges-76-strong-performance-australia",
    },
  ],
};
