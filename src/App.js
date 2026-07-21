import React from 'react';
import Lenis from 'lenis';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar, Background } from './components';
import './App.css';

const App = () => {
  // Inertia-based smooth scrolling (Lenis). Skipped for reduced-motion users,
  // who get instant native scrolling instead.
  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      anchors: true,
    });
    window.__lenis = lenis; // lets the Navbar pause scrolling while its overlay is open

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  // Scroll-in reveals
  React.useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Background />
      <Navbar />
      <main>
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;
