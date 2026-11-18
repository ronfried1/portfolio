# Ron Fried’s portfolio

An English-language Next.js portfolio with direct links to work, experience, CV and contact. Review the design and the career evidence before approving production.

## Run and review

Use Node.js 26 LTS and npm. Next.js 16 builds the App Router site with Turbopack. The components use React 19, TypeScript 7 and plain CSS. Biome checks the source and tests. Exact package versions are in `package-lock.json`.

```sh
nvm install
npm ci
npm run dev
```

For a production preview, run `npm run build`, then `npm run start -- -H 127.0.0.1 -p 4176`. Run `npm run lint` and `npm run typecheck`. With the preview running, `npm test` checks the public routes, current CV and share image. Set `PORTFOLIO_PREVIEW_URL` to run the same checks on a Vercel deployment.

## Edit

- Edit case studies, evidence URLs, experience and contact addresses in `src/app/content.ts`. The home and article routes share the same study records. The hero is in `src/app/page.tsx`; the biography is in `src/app/about/page.tsx`.
- The homepage terrain study and featured-work layout use `src/app/fieldwork.css` and `src/app/components/TerrainStudy.tsx`. Shared styles live in `src/app/globals.css`. The Landly case diagram and Firefly replay are in `ParcelScene.tsx` and `StreamReplay.tsx`. The design handoff documents imagery and elevation data.
- The current CV is Ron’s supplied 2026 PDF. Replace `public/files/Ron-Fried-cv.pdf` to update it while preserving the public URL.
- The contact form progressively enhances an ordinary POST to the existing Formspree endpoint. Its address and retry behavior are in `src/app/components/Contact.tsx`. The direct email and professional links are independent of that service.
- Metadata lives in `src/app/layout.tsx` and each route. The local social image and vector mark are in `public/atlas`. If the production hostname changes, update `metadataBase`.

## Release

The production site runs at [www.ron-fried.com](https://www.ron-fried.com/) in the Vercel project `portfolio-2mjp`. Vercel builds previews from GitHub branches and reads the runtime major from `engines.node`. Check the branch deployment before publishing to the production domain.

[Product brief](PRODUCT.md) · [Design and previews](DESIGN.md) · [Research and evidence](docs/research.md) · [Validation record](docs/validation.md)
