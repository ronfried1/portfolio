# Review record

## Mount Arbel redesign · November 18, 2026

The production preview on port 4176 served the home page, About, and the Firefly, Landly and FastRide cases. The build, lint, TypeScript and all three committed smoke tests passed. The linked 2026 CV was byte-identical to Ron’s new download.

| Check | Observed result |
| --- | --- |
| Browser layout | All five routes fit at 320, 390, 740, 768, 820, 1024 and 1440 CSS pixels in Chromium. Reviewed the home page on desktop and mobile, the comparison in use and the case pages. |
| Terrain | Keyboard, pointer and emulated touch changed the split and its elevation readout. The unscripted page showed both terrain views and the default profile. |
| Case interactions | Firefly replay advanced from partial fragments to the completed Terraform declaration. Reduced-motion and unscripted visits showed the complete code. Landly’s product/system control worked on mobile. |
| Accessibility | Axe reported zero violations on all five routes after the terrain attribution link was revised to include its visible coordinates in its accessible name. |
| Routes and contact | All internal destinations and fragment targets resolved. An unknown case returned 404. Intercepted form submissions exercised error, retry and success without sending a message. |
| Runtime | A first-visit desktop loopback sample recorded 68 ms LCP, 0.0013 CLS, zero long tasks and 687,239 bytes of subresource transfers. Next reported 97.8 kB of first-load JavaScript on the home page. The browser recorded no unexpected console or page errors. |

The Impeccable visual review prompted the explicit “Terrain study” label. Its static detector reported no findings in the two new interactive components, home page and fieldwork styles. Emil’s interaction guidance informed the direct, interruptible drag and the visitor-triggered stream replay. The larger desktop and smaller mobile plates share one camera projection and both views work without WebGL.

Physical-device and assistive-technology testing, Safari, Firefox and field performance remain unverified. The dependency findings below still apply to this branch.

## Taste visual review

The final pass followed three changes from the previous pass. The opening now fills the viewport, the CV has a 44 px mobile touch target, and the comparison has a visible, associated label. The final status was `GATE: OPEN 44` with 18 warnings. No waivers were registered. Examples of retained choices include the real geographic coordinates, a legend identifying the two terrain views, Ron’s name as the headline, and a compact, text-led experience section. The following are the final checker findings.

<details>
<summary>Open Taste findings</summary>

```text
FAIL text-only        section#experience "Experience."  [1440]
FAIL cta              section#experience "Experience."  [1440, 390]
FAIL copy-headline    h1#intro "Ron Fried."  [1440]
FAIL copy-headings    section#projects > div.section-title > h2 "Selected work."  [1440]
FAIL heading-scale    div.project-spread > article.project-feature:nth-of-type(1) > a.feature-link > h3 "Firefly  [1440, 390]
FAIL heading-scale    section#projects > div.section-title > h2 "Selected work."  [1440, 390]
FAIL off-grid         section#projects > details.archive > summary "Earlier projects"  [1440, 390]
FAIL off-grid         div.contact-grid > div.contact-options > details > summary "Send a message"  [1440, 390]
FAIL section-gaps     section#experience / footer#contact  [1440]
FAIL visual-caption   section.field-hero > div.wrap.field-grid > figure.terrain > figcaption "Satellite Drag to   [1440]
FAIL coordinates      div.wrap.field-grid > figure.terrain > div.terrain-heading > a.coordinates "32.85° N 35.49  [1440]
FAIL run-on           h1#intro "Ron Fried."  [1440]
FAIL hero-screen      section.field-hero > div.wrap.field-grid > div.field-meta > span "Bat Yam, Israel"  [1440]
FAIL hero-screen      div.wrap.field-grid > div.field-meta > div > a:nth-of-type(1) "GitHub"  [1440]
FAIL hero-screen      div.wrap.field-grid > div.field-meta > div > a:nth-of-type(2) "LinkedIn"  [1440]
FAIL section-height   footer#contact "Get in touch.For engineering roles, coll"  [1440]
FAIL section-height   main#main > div.wrap "Selected work.Product engineeringFirefly"  [1440]
FAIL section-air      section#projects > details.archive "Earlier projectsFastRideRead the case Ch"  [1440]
FAIL section-air      section#experience "Experience.About me FireflyFull-Stack De"  [1440]
FAIL one-section      div.wrap > div.contact-grid > div:nth-of-type(1) > h2 "Get in touch."  [1440]
FAIL one-section      main#main > div.wrap "Selected work.Product engineeringFirefly"  [1440]
FAIL one-heading      section.field-hero > div.wrap.field-grid > div.field-intro > h2 "Full-stack engineer & gui  [1440]
FAIL one-heading      section#experience > div:nth-of-type(1) > h2 "Experience."  [1440]
FAIL one-heading      section#projects > div.section-title > h2 "Selected work."  [1440]
FAIL container-edges  main#main > div.wrap "Selected work.Product engineeringFirefly"  [1440]
FAIL container-edges  header.site-header "Ron FriedWorkExperienceCV Contact"  [1440]
FAIL container-edges  a.skip "Skip to content"  [1440]
FAIL container-edges  div.wrap.field-grid > figure.terrain > div.elevation-readout > span:nth-of-type(1) "Elevat  [1440]
FAIL container-edges  h1#intro > em "Fried."  [1440]
FAIL container-edges  section.field-hero > div.wrap.field-grid > figure.terrain > div.terrain-heading "Mount Arb  [1440]
FAIL container-edges  section.field-hero > div.wrap.field-grid > figure.terrain > div.terrain-stage "‹ ›"  [1440]
FAIL split-pair       footer#contact > div.wrap > div.contact-grid "Get in touch.For engineering roles, coll"  [1440]
FAIL no-visual        section#experience "Experience."  [390]
FAIL edge-left        section.field-hero figure.terrain "Mount ArbelTerrain study · Galil"  [1440]
FAIL edge-left        div.wrap h3 "Landly"  [1440]
FAIL edge-left        div.wrap p "A live Israeli real-estate start"  [1440]
FAIL edge-left        div.wrap h3 "Firefly"  [1440]
FAIL edge-left        div.wrap p "I build Go services that discove"  [1440]
FAIL edge-left        div.wrap p "Alongside Firefly, I lead techno"  [1440]
FAIL edge-left        div.wrap h3 "Aporia"  [1440]
FAIL edge-left        div.wrap p "I led frontend development, conf"  [1440]
FAIL edge-left        div.wrap h3 "Signature-IT"  [1440]
FAIL edge-left        div.wrap p "I worked on React and Magento co"  [1440]
FAIL screen-short     section.field-hero section.field-hero "Ron Fried.Full-stack engineer & "  [1440, 390]
```

</details>

## Release considerations

- The Firefly article now uses the CV’s streaming integration and Ron’s description of his in-product agent work. Landly’s start date and formal CTO title remain open if Ron wants either published.
- The existing lockfile was retained for review. On November 17, `npm audit --omit=dev` reported 46 affected package entries, including 18 critical and 21 high. Next.js itself was rated critical. These counts include transitive tooling and do not establish exploitable paths in this application. Plan and test the framework and dependency upgrade separately before public release.
- No merge, push, production deployment, or change to the existing Vercel project was performed.

## Previous review

The parcel-led homepage and earlier design gates were reviewed on November 17, 2026. Commit `099cb37` preserves the findings and the corresponding implementation. External checks in that review reached Landly, GitHub and the project demos. LinkedIn returned HTTP 999 to automation. The public FastRide demo loaded with no ride inventory.
