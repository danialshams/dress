# IRON THEORY — demo storefront

RTL Persian Next.js storefront derived from the approved mockup, with local WebP photos (cropped from the reference, so their resolution is limited), Vazirmatn, GSAP and Lenis. Shopping, favorites, newsletter and catalog are client-side demos; no payment or backend.

## Next.js
Requires Node 22+ and npm registry access. `npm install`, `npm run dev`, `npm run build`. Build output: `out/`. GitHub Actions builds every branch. Deploy the tested commit via Vercel's Next.js preset after checking the build and visual layout.

## Offline preview
`python -m http.server 8000 --directory preview` then open http://localhost:8000. This preview shares the source markup, styles and interactions; CSS scroll-reveal fallback is used instead of GSAP/Lenis and system font fallback is used because the Vazirmatn npm package is not installed offline. The Next.js app imports Vazirmatn locally from its dependency. No production build has been verified in the offline environment.
