# Working Excellence — Website

**Production:** [workingexcellence.com](https://www.workingexcellence.com)  
**Repo:** [github.com/jjordanbwt/wex-website](https://github.com/jjordanbwt/wex-website)  
**Contact:** info@workingexcellence.com | (202) 587-1200

---

## Quick Start

No build step. No dependencies. No package manager.

```bash
git clone https://github.com/jjordanbwt/wex-website.git
cd wex-website
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

Deploy by pushing to GitHub Pages, Netlify, or Vercel — publish the root folder as-is.

---

## Site Map

### Core Pages (root)

| File | URL | Description |
|------|-----|-------------|
| `index.html` | `/` | Homepage — hero, services, assessments, calculators, methodology |
| `about-us.html` | `/about-us` | Team bios, leadership, global office locations |
| `calculators.html` | `/calculators` | 6 interactive ROI calculators with email/PDF export |
| `industries.html` | `/industries` | Industries hub — links to all 17 verticals |
| `contact-us.html` | `/contact-us` | Contact form + office addresses |
| `privacy-policy.html` | `/privacy-policy` | Privacy policy (effective 1/1/2024) |
| `thank-you.html` | `/thank-you` | Post-form confirmation page |
| `blog.html` | `/blog` | Redirects to workingexcellence.com/blog |
| `insights.html` | `/insights` | Redirects to workingexcellence.com/blog |

---

### Service Pages (root — Practice Areas)

| File | URL | Practice Area |
|------|-----|---------------|
| `data-consulting.html` | `/data-consulting` | Data Strategy, Governance, AI/ML, Architecture |
| `cybersecurity-consulting.html` | `/cybersecurity-consulting` | Cybersecurity, NIST CSF 2.0, Incident Response |
| `digital-engineering-consulting.html` | `/digital-engineering-consulting` | Cloud, DevSecOps, APIs, Intelligent Automation |
| `sales-improvement.html` | `/sales-improvement` | GTM, Revenue Ops, Sales Enablement |
| `ai-agents-for-business.html` | `/ai-agents-for-business` | Agentic AI services and readiness |

---

### Sub-Service Pages

Each practice area has dedicated sub-service pages in its own folder.

**`/data/`** — Data Consulting sub-services
| File | Topic |
|------|-------|
| `data/strategy.html` | Data Strategy |
| `data/data-governance.html` | Data Governance |
| `data/data-architecture.html` | Data Architecture |
| `data/data-operations.html` | Data Operations |
| `data/artificial-intelligence.html` | AI / GenAI |
| `data/machine-learning.html` | Machine Learning |

**`/cybersecurity/`** — Cybersecurity sub-services
| File | Topic |
|------|-------|
| `cybersecurity/strategy.html` | Cybersecurity Strategy |
| `cybersecurity/architecture-and-tools.html` | Architecture & Tools |
| `cybersecurity/governance-and-process.html` | Governance & Process |
| `cybersecurity/security-operations.html` | Security Operations |

**`/digital-engineering/`** — Digital Engineering sub-services
| File | Topic |
|------|-------|
| `digital-engineering/strategy.html` | Engineering Strategy |
| `digital-engineering/cloud-migrations.html` | Cloud Migrations |
| `digital-engineering/intelligent-automation.html` | Intelligent Automation |
| `digital-engineering/application-support.html` | Application Support |

---

### Industry Pages (`/industries/`)

17 vertical-specific landing pages — all follow the same template.

| File | Industry |
|------|----------|
| `industries/financial-services.html` | Financial Services |
| `industries/healthcare.html` | Healthcare |
| `industries/technology.html` | Technology |
| `industries/telecom.html` | Telecom |
| `industries/life-sciences.html` | Life Sciences |
| `industries/public-sector.html` | Public Sector |
| `industries/manufacturing.html` | Manufacturing |
| `industries/energy-utilities.html` | Energy & Utilities |
| `industries/retail.html` | Retail |
| `industries/transportation.html` | Transportation |
| `industries/defense.html` | Defense |
| `industries/cpg.html` | Consumer Packaged Goods |
| `industries/real-estate.html` | Real Estate |
| `industries/media-entertainment.html` | Media & Entertainment |
| `industries/education.html` | Education |
| `industries/nonprofit.html` | Nonprofit |
| `industries/private-equity.html` | Private Equity |

---

### AWS Pages (`/aws/`)

| File | Topic |
|------|-------|
| `aws/managed-aws-services-.html` | Managed AWS overview |
| `aws/cloud-cost-optimization-services.html` | Cloud cost optimization |
| `aws/finops-services.html` | FinOps services |

---

## Shared Infrastructure

These files are loaded by every page. Edit here — changes apply sitewide.

| File | Purpose |
|------|---------|
| `shared.css` | All global styles, CSS custom properties (design tokens), layout components |
| `shared.js` | Nav scroll behavior, mega menu logic, hamburger menu, scroll animations |
| `faq.js` | FAQ accordion component — renders dynamically from `faq-data.json` |
| `faq-data.json` | **FAQ content CMS** — edit questions/answers here, not in HTML files |

---

## Images

```
images/
├── logos/
│   ├── WE_Logo_Orange_White.png        # Orange text + white compass — use on dark BGs (nav, hero)
│   ├── WE_Logo_White.png               # White text + orange compass — use on dark hero sections
│   ├── WE_Logo_Orange_Compass.png      # Orange text + gray/orange compass — general brand
│   ├── WE_Logo_Orange_Gray.png         # Orange text + gray compass — use on light BGs
│   ├── WE_Compass_Orange.png           # Compass icon only, orange ring — icon / avatar use
│   └── WE_Compass_Logo_White.png       # Compass icon only, white ring — dark section icons
│
├── team/                               # Headshots (upload these — see Pending Tasks)
│   ├── james-kenefick.jpg              # Chairman & CEO
│   ├── kurt-smith.jpg                  # Chief Revenue Officer
│   ├── james-gorman.jpg                # CISO
│   └── jaswanth-gaddam.jpg             # Engineering Lead
│
├── clients/                            # Client logos and case study visuals
├── og/                                 # Open Graph / social share images (1200x630px)
│   └── og-default.jpg                  # Default OG image (add this)
│
└── Managed_AWS.png                     # AWS hero image
```

---

## Favicon Files

All favicon files live in the root. Root pages use `href="favicon.ico"`, subfolder pages use `href="../favicon.ico"`.

| File | Size | Use |
|------|------|-----|
| `favicon.ico` | 16/32/48px | Browser tab (all browsers) |
| `favicon-16.png` | 16px | Standard |
| `favicon-32.png` | 32px | Standard |
| `favicon-48.png` | 48px | Windows tiles |
| `favicon-180.png` | 180px | Apple touch icon (iOS) |
| `favicon-192.png` | 192px | Android / PWA |

---

## Navigation System

Four mega menus, all triggered via `onclick="toggleMenu('id')"` in `shared.js`.

| Trigger Button ID | Panel ID | Contents |
|-------------------|----------|----------|
| `btn-practice` | `mega-practice` | 5 practice areas with hover sub-panels |
| `btn-industries` | `mega-industries` | 17 industries in two columns |
| `btn-assessments` | `mega-assessments` | 3 assessments with pricing sub-panels |
| `btn-about` | `mega-about` | Team stats, pillars, book a session CTA |

Sub-panel hover switching uses `onmouseover="showSub('panel-id', this)"`.  
Menu closes on backdrop click (`#menu-backdrop`) or Escape key press.

---

## Assessment Pricing

Three fixed-fee products, two tiers each. Pricing is hard-coded in HTML — search `$` to find all instances.

| Assessment | Essentials Tier | Price | Executive Tier | Price |
|-----------|----------------|-------|----------------|-------|
| Technical Risk Assessment | Threat Surface Scan | $14,750 | Resilience Architect | $47,500 |
| AI Readiness Diagnostic | AI Signal Check | $24,790 | AI Strategic Blueprint | $74,500 |
| Cloud Infrastructure Assessment | Cloud Recon | $14,500 | Cloud Fortify | $65,000 |

---

## Calculators

Six calculators in `calculators.html`, organized in three color-coded groups.

| Group | Color | Calculator | Result Element ID |
|-------|-------|-----------|-------------------|
| Security | Red | Cyber Incident Cost | `cyber-result` |
| Security | Red | Cyber & AI Readiness Scorecard | `sc-result` |
| Data / AI | Blue | Data Quality & Governance Cost | `dq-result` |
| Data / AI | Blue | AI Value Potential | `ai-result` |
| FinOps | Gold | Cloud Waste Estimator | `cloud-result` |
| FinOps | Gold | Cost of Inaction | `ia-total` |

Email results: Formspree modal — replace placeholder endpoint by searching `formspree.io/f/placeholder` in `calculators.html`.

---

## Brand Design System

### Color Tokens (defined in `shared.css`)

```css
--orange:      #f18f0a   /* Primary brand accent — all CTAs, links, highlights */
--orange-lt:   #f9a832   /* Hover states */
--grey-950:    #1a1c23   /* Page background */
--grey-900:    #22242d   /* Section backgrounds */
--grey-800:    #2c2e38   /* Card backgrounds */
--grey-750:    #343640   /* Assessment cards */
--grey-700:    #3e404c   /* Borders (--border alias) */
--navy:        #132B72   /* Accent navy */
--navy-deep:   #06093A   /* Deep navy hero bands */
--accent-red:  #ED1C24   /* Risk / alert / security elements */
--accent-blue: #0088CB   /* Info / diagram / data elements */
--accent-gold: #FFCB05   /* Highlight / FinOps / award elements */
```

### Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| H1 / H2 headlines | Playfair Display | 700 | 40–56px |
| H3 subheads | Playfair Display | 700 | 28–36px |
| Body copy | Roboto | 400 | 16–18px |
| Section labels | DM Mono | 400 | 0.82rem |
| CTAs / buttons | Roboto | 700 | 0.92rem |

> Base: `html { font-size: 120% }` in `shared.css` — all `rem` values scale from this. Do not change.

---

## Path Rules for Subfolders

Pages inside `industries/`, `aws/`, `cybersecurity/`, `data/`, or `digital-engineering/` must use `../` prefixes.

```html
<!-- Subfolder pages (industries/*, aws/*, cybersecurity/*, data/*, digital-engineering/*) -->
<link rel="stylesheet" href="../shared.css">
<script src="../shared.js"></script>
<script src="../faq.js"></script>
<img src="../images/logos/WE_Logo_Orange_White.png">
<link rel="icon" href="../favicon.ico">

<!-- Root pages (index.html, about-us.html, etc.) -->
<link rel="stylesheet" href="shared.css">
<script src="shared.js"></script>
<img src="images/logos/WE_Logo_Orange_White.png">
<link rel="icon" href="favicon.ico">
```

---

## Team

| Name | Role | Headshot File |
|------|------|---------------|
| James F. Kenefick | Chairman & CEO | `images/team/james-kenefick.jpg` |
| Kurt Smith | Chief Revenue Officer | `images/team/kurt-smith.jpg` |
| James Gorman | CISO | `images/team/james-gorman.jpg` |
| Jaswanth Gaddam | Engineering Lead | `images/team/jaswanth-gaddam.jpg` |

---

## Office Locations

| Office | Address |
|--------|---------|
| Washington DC — Global HQ | 11921 Freedom Drive, Suite 550, Reston, VA 20190 |
| Chicago | 2625 Butterfield Road, Oak Brook, IL 60523 |
| New York | 413 W. 14th Street, Suite 200, New York, NY 10014 |
| Puerto Rico | 1225 Ave Ponce De Leon, PH 1700, San Juan, PR 00907 |

---

## Pending Tasks

| Priority | Task | Where |
|----------|------|-------|
| HIGH | Upload team headshots | `images/team/` — 4 files |
| HIGH | Replace Formspree placeholder with real endpoint | `calculators.html` — search `formspree.io/f/placeholder` |
| HIGH | Wire all CTA buttons to Calendly or HubSpot booking link | All pages — search `href="#"` |
| MEDIUM | Add Google Analytics / GTM tag to `<head>` | All pages via `shared.js` |
| MEDIUM | Add SEO meta tags and Open Graph per page | All pages |
| MEDIUM | Add OG default image | `images/og/og-default.jpg` (1200x630px) |
| MEDIUM | Fix `#coaching` and `#revenue` anchor IDs | `sales-improvement.html` |
| LOW | Mobile hamburger menu — mega menus not accessible on mobile | `shared.js` |
| LOW | Add case study content (Brazilian AWS client) | Homepage + `aws/` pages |

---

## Style Rules (Do Not Break)

- No text arrows (`→`, `&rarr;`) anywhere — use SVG or CSS design elements only
- No italic text — `em { font-style: normal }` is set globally in `shared.css`
- No hyphens (`-`) in copy outside of code blocks
- `html { font-size: 120% }` — do not change the base font size
- Section label eyebrow text — `.82rem`, `letter-spacing: .2em`, DM Mono, uppercase
- All CTA buttons — orange `#f18f0a`, Roboto 700, uppercase

---

## Deployment

Static site — no build step required.

**GitHub Pages:** Repo Settings → Pages → Source: `main` branch, root `/`  
**Netlify / Vercel:** Connect repo → build command: *(leave blank)* → publish directory: `.`  
**Manual FTP:** Upload all files maintaining folder structure exactly as-is

