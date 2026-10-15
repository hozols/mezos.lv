# Plāns: 3D redizains

1. Meshy: text-to-3d preview → pārbaudīt → refine ar tekstūru → lejupielādēt GLB uz `public/models/forest.glb`.
2. Instalēt three, @react-three/fiber, @react-three/drei, motion, lenis, @types/three.
3. `globals.css`: tumšā paletes tokeni, fonts (Google Fonts via next/font), utilītklases glow/glass.
4. Komponenti: SmoothScroll (lenis), Nav, Hero + ForestScene (R3F), Reveal, TiltCard, Services, Process, Pricing, Contact, Footer, FloatingWhatsApp.
5. `page.tsx` salikt no komponentiem; `layout.tsx` fonts + SmoothScroll.
6. `next build`, Playwright ekrānuzņēmumi desktop + mobile, salabot problēmas.
7. Commit.
