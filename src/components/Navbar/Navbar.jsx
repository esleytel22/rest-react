import React from 'react';
<<<<<<< HEAD
import { createPortal } from 'react-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
=======
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
>>>>>>> c626e25925407ce0bddef18286228ff74d117307

import images from '../../constants/images';
import './Navbar.css';

<<<<<<< HEAD
const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // While the overlay is open: freeze page scrolling (both native and Lenis)
  // and allow closing with the Escape key.
  React.useEffect(() => {
    if (!toggleMenu) return undefined;

    document.body.style.overflow = 'hidden';
    if (window.__lenis) window.__lenis.stop();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setToggleMenu(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      if (window.__lenis) window.__lenis.start();
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [toggleMenu]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#home" className="navbar__logo">
          <img src={images.gericht} alt="Gerícht" />
        </a>

        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <a href="#contact" className="btn btn--ghost navbar__cta">Reserve a table</a>
          <button
            type="button"
            className="navbar__burger"
            aria-label="Open menu"
            aria-expanded={toggleMenu}
            onClick={() => setToggleMenu(true)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {toggleMenu && createPortal(
        <div className="nav-overlay" role="dialog" aria-modal="true" aria-label="Site menu">
          <div className="nav-overlay__head">
            <img src={images.gericht} alt="Gerícht" className="nav-overlay__logo" />
            <button
              type="button"
              className="nav-overlay__close"
              aria-label="Close menu"
              onClick={() => setToggleMenu(false)}
            >
              <MdClose />
            </button>
          </div>

          <ul className="nav-overlay__links">
            {links.map((link, index) => (
              <li key={link.href} style={{ '--i': index }}>
                <a href={link.href} onClick={() => setToggleMenu(false)}>
                  <span className="nav-overlay__index">0{index + 1}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-overlay__footer">
            <a href="#contact" className="btn" onClick={() => setToggleMenu(false)}>Reserve a table</a>
            <p className="small-caps">9 W 53rd St, New York — Tue–Sun from 5 pm</p>
          </div>
        </div>,
        document.body,
      )}
    </nav>
  );
=======
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="app logo"/>
    </div>
    <ul className='app__navbar-links'>
      <li className="p__opensans"><a href='#home'>Home</a></li>
      <li className="p__opensans"><a href='#about'>About</a></li>
      <li className="p__opensans"><a href='#menu'>Menu</a></li>
      <li className="p__opensans"><a href='#awards'>Awards</a></li>
      <li className="p__opensans"><a href='#contact'>contact</a></li>
    </ul>
    <div className='app__navbar-login'>
      <a href="#login" className='p__opensans'>Log In / Register</a>
      <div/>
      <a href="/" className='p__opensans'>Book Table</a>

    </div>
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>
      
      {toggleMenu && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
        <MdOutlineRestaurantMenu fontSize={27} className='overlay__close'onClick={() => setToggleMenu(false)}/>
        <ul className='app__navbar-smallscreen_links'>
          <li className="p__opensans"><a href='#home'>Home</a></li>
          <li className="p__opensans"><a href='#about'>About</a></li>
          <li className="p__opensans"><a href='#menu'>Menu</a></li>
          <li className="p__opensans"><a href='#awards'>Awards</a></li>
          <li className="p__opensans"><a href='#contact'>contact</a></li>
        </ul>
      </div>
      )}

    </div>
  </nav>
  )
>>>>>>> c626e25925407ce0bddef18286228ff74d117307
};

export default Navbar;
