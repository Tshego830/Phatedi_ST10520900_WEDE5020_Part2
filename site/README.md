# Hope Haven Youth Shelter Website

WEDE5020 Portfolio of Evidence - Part 1

## Student Information

- **Name:** Tshegofatso Phatedi
- **Student number:** ST10520900
- **Module:** WEDE5020 (Web Development)
- **Institution:** The Independent Institute of Education (Pty) Ltd
- **Year:** 2026

## Project Title

Hope Haven Youth Shelter - a five-page informational and fundraising website for
a non-profit youth shelter.

## Project Overview

Hope Haven Youth Shelter, founded in 2018, provides emergency housing,
counselling and vocational training for vulnerable youth aged 16-24. Its mission
is to break the cycle of youth homelessness through safe housing and community
support, envisioning a community where every young person has a safe home and a
viable future.

The current website has strong imagery and a clear mission statement, but suffers
from outdated navigation, a non-responsive mobile layout and no secure online
payment integration. This project rebuilds the site with a streamlined
navigation structure, a fully responsive layout and a clear path to donating,
volunteering and getting help.

**Target audience:** local donors, corporate sponsors, community volunteers, and
young people seeking support services.

## Website Goals and Objectives

- Grow online recurring donations by 25% within six months of launch.
- Grow the active volunteer base by 40% within six months of launch.
- Make emergency help reachable within one click from any page.

**KPIs**

- Monthly online donation revenue
- Volunteer application form submission rate
- Unique visitor traffic and bounce rate

## Key Features and Functionality

- Donation enquiry form supporting one-time and monthly recurring gifts
  (secure payment processing follows in Part 2).
- Volunteer sign-up form with validation and an on-page confirmation message
  (automatic e-mail confirmation follows in Part 2).
- Shelter occupancy indicator showing bed availability for emergency enquiries.
- News and community impact blog previews on the home page.
- Corporate sponsorship enquiry form.
- Contact page with details and maps for both shelter locations.
- Sticky navigation bar with prominent "Donate" and "Get Help" calls to action.

## Design and User Experience

- **Branding:** compassionate, welcoming and trustworthy visual identity.
- **Colour scheme:** Deep Navy `#1A365D`, Soft Sage Green `#84A98C`, Off-White
  `#F8F9FA`.
- **Typography:** Aptos for headings and body text, with clean sans-serif
  fallbacks.
- **Layout and UX:** high-contrast elements for accessibility (WCAG 2.1),
  a sticky navigation bar, a skip-to-content link, visible focus states,
  descriptive alt text and semantic HTML landmarks.

## Sitemap

```text
index.html (Home)
|
+-- about.html      (About Us: history, mission, vision, team)
+-- services.html   (Services: programmes and intake process)
+-- enquiry.html    (Get Involved: donate, volunteer, sponsor forms)
|     +-- #donate
|     +-- #volunteer
|     +-- #sponsor
+-- contact.html    (Contact: details, two location maps, contact form)
      +-- #emergency
```

All five pages are linked from the shared navigation bar and footer, so every
page is reachable from every other page.

## File and Folder Structure

```text
public/site/
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── images/
    ├── logo.png
    ├── hero-youth-common-room.jpg
    ├── vocational-training.jpg
    └── volunteers.jpg
```

The website is a static HTML/CSS/JavaScript site. It lives in `public/site/` so
that it is served directly by the hosting environment used for this project;
opening the site root (`/`) forwards to `/site/index.html`.

## Technical Requirements

- HTML5, CSS3 and vanilla JavaScript (no build step required for the website).
- Responsive, mobile-first layout using CSS custom properties, Flexbox, CSS Grid
  and media queries.
- Tested in Chrome, Edge and Firefox at mobile, tablet and desktop widths.
- Planned hosting: web hosting with a custom `.org` domain.

## Timeline and Milestones

| Period    | Milestone                                                   |
| --------- | ----------------------------------------------------------- |
| Weeks 1-2 | Requirements gathering and low-fidelity wireframing         |
| Weeks 3-5 | Frontend/backend development and database setup             |
| Week 6    | CMS integration, content population and user testing        |
| Week 7    | Final review and deployment                                 |

## Budget

| Item                            | Cost (ZAR) |
| ------------------------------- | ---------- |
| Development                     | R 10 000   |
| Hosting and domain (1 year)     | R 2 500    |
| Maintenance and security (1 yr) | R 2 000    |
| **Total estimated budget**      | **R 15 000** |

## Changelog

### Part 1 - initial submission (2026-08-10)

- Added the five core pages: `index.html`, `about.html`, `services.html`,
  `enquiry.html`, `contact.html`.
- Created the shared stylesheet `css/styles.css` implementing the navy / sage /
  off-white design system, sticky navigation and responsive breakpoints.
- Created `js/main.js` for the mobile navigation toggle, the shelter occupancy
  indicator and client-side form validation with confirmation messages.
- Added original imagery to `images/` (logo, hero, vocational training,
  volunteers).
- Added donation, volunteer sign-up, sponsorship and general contact forms.
- Added contact details and embedded maps for both shelter locations.
- Documented the project in this README, including the sitemap and references.

### Planned for Part 2

- Secure online payment integration for donations.
- Server-side form processing with automatic e-mail confirmations.
- Live data feed for the shelter occupancy indicator.
- Full news and community impact blog section.

## References

- The Independent Institute of Education. 2026. *WEDE5020 Portfolio of Evidence*.
  Johannesburg: The Independent Institute of Education.
- Nonprofit Tech for Good. 2024. *Global NGO Technology Report*. [Online].
- World Health Organization. 2023. *Web Content Accessibility Guidelines (WCAG)
  2.1*. [Online].
- World Wide Web Consortium (W3C). 2023. *Web Content Accessibility Guidelines
  (WCAG) 2.1*. [Online]. Available at: https://www.w3.org/TR/WCAG21/
- Mozilla. 2026. *MDN Web Docs: HTML, CSS and JavaScript references*. [Online].
  Available at: https://developer.mozilla.org/
- OpenStreetMap contributors. 2026. *OpenStreetMap embedded maps*. [Online].
  Available at: https://www.openstreetmap.org/

## Notes on Content

All organisational content, statistics, staff names and addresses in this website
are illustrative material created for this academic assignment and do not
describe a real organisation.
