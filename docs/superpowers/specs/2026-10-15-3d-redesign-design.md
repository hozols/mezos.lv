# SIA Meži — 3D interaktīvs redizains (dizaina specifikācija)

Datums: 2026-10-15. Apstiprināts čatā.

## Mērķis
Pārtaisīt vienas lapas mājaslapu (Next.js 15, Tailwind 4) par interaktīvu, stilīgu, tumša "mežs krēslā" stila lapu ar 3D hero, saglabājot visu esošo saturu (teksti, kontakti, rekvizīti) nemainītu.

## 3D pieeja (hibrīds)
- Meshy ģenerēta low-poly meža diorāma (text-to-3d, meshy-7.1, preview + tekstūra, 30 kredīti). Fails: `public/models/forest.glb`.
- Procedurāli: migla, putekļu daļiņas (Points), fona gradients.
- Hero: diorāma lēni rotē, seko pelei, ritinot kamera attālinās.
- Kontaktu sekcija: tas pats modelis, cits kameras leņķis, fonā.

## Sekcijas
1. Nav: logo + saites, caurspīdīga, pēc ritināšanas ar blur fonu.
2. Hero: pilns ekrāns, 3D Canvas, virsraksts pa vārdiem, WhatsApp + tālruņa pogas ar glow.
3. Pakalpojumi: 4 glassmorphism kartes, scroll-reveal, mouse tilt.
4. Process: vertikāla līnija, kas uzzīmējas ritinot; soļi iedegas secīgi.
5. Cenas: karte ar tilt un gaismas atspīdumu.
6. Sazināties: 3D fons + pogas.
7. Footer: rekvizīti, logo.
8. Peldošā WhatsApp poga paliek.

## Tehniskais
- `three`, `@react-three/fiber`, `@react-three/drei`, `motion`, `lenis`.
- Komponenti `src/components/`: Nav, Hero, ForestScene, Services, Process, Pricing, Contact, Footer, SmoothScroll, TiltCard, Reveal.
- 3D ielādē tikai klientā (`dynamic`, `ssr:false`), ar Suspense fallback.
- Mobilie: dpr [1, 1.5], daļiņas mazāk, `prefers-reduced-motion` izslēdz autorotāciju un daļiņas.
- Pārbaude: `next build` bez kļūdām + Playwright ekrānuzņēmumi 1440px un 390px.
