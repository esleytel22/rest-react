# Gerícht — Restaurant Site (2026 redesign)

A modernized take on the original dark fine-dining template. Run it the usual way:

```
npm install
npm start
```

## What changed in the redesign

- **Design system** — all tokens live in `src/index.css`: warm ink background (`#0d0c0a`), bone text, a single brass accent (`#c8a468`), and hairline borders instead of heavy decoration.
- **Typography** — Fraunces (editorial serif, italics for emphasis) paired with Manrope for body and letterspaced small caps for labels. Replaces Cormorant Upright / Open Sans.
- **Hero** — full-viewport editorial composition: oversized headline, framed photography, and a facts strip (est. / address / hours) along the base.
- **Navbar** — fixed, turns to blurred glass on scroll; full-screen menu on mobile.
- **Menu** — dotted-leader price lists with hover states, framed center image.
- **Living background** — `src/components/Background` pins the kitchen video (`meal.mp4`) full-screen behind the whole site, always playing (muted, looping, `playsInline`) under a dark scrim. The About, Chef's word, Laurels, Contact, and footer (newsletter + contact) sections paint the original marble texture (`bg.png`) as an opaque backdrop on top via the `.section--marble` class — everywhere else the moving video shows through. Because the video layer never stops, it's always mid-motion whenever it reappears between marble sections. A floating corner button pauses/resumes it, and it stays paused for users with `prefers-reduced-motion`.
- **Motion** — [Lenis](https://lenis.darkroom.engineering) inertia smooth-scrolling (skipped for `prefers-reduced-motion` users, who get instant native scrolling), plus IntersectionObserver scroll reveals (`data-reveal`).
- **Performance** — `meal.mp4` re-encoded from 4K/20 MB to 720p/1.3 MB (indistinguishable as a dimmed backdrop, dramatically smoother scrolling), no `background-attachment: fixed` (it forces repaints every frame), and the video layer is GPU-composited.
- **Tablet / mobile menu** — full-screen marble overlay with staggered link animation; it locks page scrolling while open (native + Lenis) and closes on Escape or link tap.
- **Accessibility** — semantic `header/main/section/footer`, labeled icon buttons, visible focus states, alt text on photography.

Component structure is unchanged (`src/container`, `src/components`), so it remains easy to extend.
