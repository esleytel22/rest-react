<<<<<<< HEAD
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
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> c626e25925407ce0bddef18286228ff74d117307
