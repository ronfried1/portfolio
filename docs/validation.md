# Review record

November 17, 2026. Tested a local production build bound to loopback. The branch is based on `cf34cc7`.

| Check | Observed result |
| --- | --- |
| Build, lint, types | Next.js generated the home page, About and both case studies. Next lint reported zero warnings or errors. TypeScript passed with `--noEmit`. |
| Routes and files | Both committed preview tests passed. All internal links and fragment targets resolved, including the legacy `/#projects` and `/#contact`. Unknown case slugs returned 404. The updated CV matched Ron’s supplied 2026 PDF byte for byte, and the 1200 × 630 social image returned a valid JPEG. |
| Browser layout | Chromium on macOS at 320, 390, 740, 768, 820, 1024 and 1440 CSS pixels. All four routes fit horizontally. Inspected desktop, 390 × 844 mobile, article and expanded-system screenshots. Sticky navigation cleared the experience anchor. |
| Controls | Keyboard traversal reached the skip link and radio group. Arrow keys changed the view. The selected label has a visible focus outline. Touch emulation selected the system and opened its linked case. Reduced motion computed a zero-second transition. The radio switch, readable articles and contact form remained available with JavaScript disabled. |
| Accessibility | Axe’s WCAG 2 A/AA and 2.1 A/AA rules reported zero violations on each of four routes in the default desktop state. The case and radio descriptions are present in HTML. Device screen-reader testing, physical devices and Safari/Firefox remain untested. |
| Contact | Native required-field constraints worked. Intercepted 422 and 200 responses exercised retry with preserved values and success with reset fields. The native form posts to the original endpoint. No real message was sent. |
| Links | External GET requests reached the public sources, GitHub, project demos and Landly. The pinned FastRide source returned 200 on retry. LinkedIn returned 999 to automation; its indexed profile matched the original link. The FastRide demo displayed its controls without ride inventory. No external booking or checkout was attempted. |
| Loading and runtime | Final first-visit desktop sample over loopback, with no throttling, produced LCP 56 ms, CLS 0.0010 and zero observed long tasks. Subresource transfer total was 297,787 bytes. Next reported 84.4 kB first-load JS on home and at most 89.6 kB on a case. No unexpected console or page errors in the functional run. These are local measurements; production traffic and field percentiles have not been measured. |

## Shared design review

Impeccable’s layout review found undersized mobile diagram labels, a self-link on the Landly article and an ambiguous CV link. Narrow layouts now describe the layers in readable HTML. The article links to the actual Landly team, and the header now links to the current CV. Emil’s interaction pass kept the native radio group, instant reduced-motion state and a single transform transition. The case pages and contact remain reachable independently of the illustration.

Taste’s initial pass prompted stronger secondary-text contrast, a more visible footer focus ring and an adjustment to keep the work heading clear of the desktop fold. Its additional style rules prefer full-screen sections, photographic coverage for experience, fixed heading scales, and removing image captions. The accepted layout keeps the reconstruction label and lets visitors scan articles and employment history without waiting through full-screen sections. The final checker reported 38 open style findings and 20 warnings. Its focus rule flags the visually hidden radio input; keyboard focus is intentionally drawn on its visible label. The list below records the design review before the November 2026 CV update. The production build, smoke tests and four-route browser checks passed again after the CV and experience copy were updated.

## Release considerations

- Review the Firefly migration wording with Ron. Landly’s start date and formal CTO title remain open if Ron wants either published.
- The existing lockfile was retained for review. On November 17, `npm audit --omit=dev` reported 46 affected package entries, including 18 critical and 21 high. Next.js itself was rated critical. These counts include transitive tooling and do not establish exploitable paths in this application. Plan and test the framework and dependency upgrade separately before public release.
- No merge, push, production deployment, or change to the existing Vercel project was performed.

## Automated style findings

- hero-fill        section#projects "Selected work."  [1440]
- no-visual        section#projects "Selected work."  [1440, 390]
- text-only        section#experience "Experience."  [1440]
- cta              section#experience "Experience."  [1440, 390]
- copy-headings    section#projects > a.study-row:nth-of-type(2) > div.study-name > h3 "FastRide"  [1440]
- heading-scale    section#projects > a.study-row:nth-of-type(1) > div.study-name > h3 "Landly"  [1440]
- off-grid         section#projects > details.archive > summary "More projects"  [1440, 390]
- off-grid         div.contact-grid > div.contact-options > details > summary "Send a message"  [1440, 390]
- visual-caption   div.wrap > section.hero > figure.scene > figcaption "Illustrative reconstruction Read the   [1440]
- section-tile     main#main > div.wrap > section.hero "Full-stack engineer."  [1440]
- section-tile     section#projects "Selected work."  [1440, 390]
- focus-visible    input#product  [1440]
- hero-screen      main#main > div.wrap "Full-stackengineer.I’m Ron Fried. I lead"  [1440]
- section-height   footer#contact "Get in touch.For engineering roles, coll"  [1440]
- section-height   main#main > div.wrap "Full-stackengineer.I’m Ron Fried. I lead"  [1440]
- one-section      div.wrap > div.contact-grid > div:nth-of-type(1) > h2 "Get in touch."  [1440]
- one-section      main#main > div.wrap "Full-stackengineer.I’m Ron Fried. I lead"  [1440]
- one-heading      section#projects > div.section-title > h2 "Selected work."  [1440]
- container-edges  main#main > div.wrap "Full-stackengineer.I’m Ron Fried. I lead"  [1440]
- container-edges  header.site-header "Ron FriedWorkExperienceEarlier CV Contac"  [1440]
- container-edges  footer#contact "Get in touch.For engineering roles, coll"  [1440]
- container-edges  a.skip "Skip to content"  [1440]
- container-edges  p#product-description "One parcel, placed in its geographic con"  [1440]
- container-edges  figure.scene > div.scene-body > div.scene-heading > strong "Landly"  [1440]
- container-edges  footer#contact > div.wrap > div.footer-end "Ron FriedBack to top ↑"  [1440]
- split-pair       main#main > div.wrap > section.hero "Full-stackengineer.I’m Ron Fried. I lead"  [1440]
- split-pair       footer#contact > div.wrap > div.contact-grid "Get in touch.For engineering roles, coll"  [1440]
- no-visual        section#experience "Experience."  [390]
- edge-left        div.wrap figure.scene "LandlyParcel explorerExplore the"  [1440]
- edge-left        div.wrap h3 "Landly"  [1440, 390]
- edge-left        div.wrap p "Connecting a plot of land to the"  [1440, 390]
- edge-left        div.wrap h3 "FastRide"  [1440, 390]
- edge-left        div.wrap p "Keeping a park visitor’s return "  [1440, 390]
- edge-left        div.wrap h3 "Firefly"  [1440]
- edge-left        div.wrap p "My work spans the frontend and t"  [1440]
- edge-left        div.wrap p "I lead development of a real-est"  [1440]
- edge-left        div.wrap h3 "Signature-it"  [1440]
- edge-left        div.wrap p "I worked on React and Magento co"  [1440]
