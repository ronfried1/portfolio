# Ron Fried’s portfolio

An English-language Next.js portfolio with direct links to work, experience, CV and contact. Review the design and the career evidence before approving production.

## Run and review

Use the repository lockfile. The review ran on Node 24.16.0 with Next.js 13.4.16, React 18.2.0, TypeScript 5.1.6 and Tailwind 3.

```sh
npm ci
npm run dev
```

For a production preview, run `npm run build`, then `npm run start -- -H 127.0.0.1 -p 4176`. Run `npm run lint` and `npx tsc --noEmit`. With the production preview running, `node --test tests/preview.test.mjs` checks the public routes and downloadable assets.

## Edit

- Edit case studies, evidence URLs, experience and contact addresses in `src/app/content.ts`. The home and article routes share the same study records. The hero is in `src/app/page.tsx`; the biography is in `src/app/about/page.tsx`.
- The design tokens, fonts and responsive rules are in `src/app/globals.css`. The artwork and controls are in `src/app/components/ParcelScene.tsx`. Keep the explanatory text and reduced-motion states together when changing a visual layer.
- Replace `public/files/Ron-Fried-cv.pdf` after Ron supplies a current CV. Update every “Earlier CV” label at that point. The public URL is stable.
- The contact form progressively enhances an ordinary POST to the existing Formspree endpoint. Its address and retry behavior are in `src/app/components/Contact.tsx`. The direct email and professional links are independent of that service.
- Metadata lives in `src/app/layout.tsx` and each route. The local social image and vector mark are in `public/atlas`. If the production hostname changes, update `metadataBase`.

## Release

The pre-existing public portfolio is hosted on Vercel. The repository has no deployment workflow or project settings checked in. A future release should reconcile the dependency findings and career copy, run the production checks above and use the existing Vercel project after Ron approves. Keep the review branch local until external publication is authorized.

[Product brief](PRODUCT.md) · [Design and previews](DESIGN.md) · [Research and evidence](docs/research.md) · [Validation record](docs/validation.md)
