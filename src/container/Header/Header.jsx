import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
<<<<<<< HEAD
  <header className="hero" id="home">
    <div className="hero__inner container">
      <div className="hero__info" data-reveal>
        <SubHeading title="Gerícht — New York" />
        <h1 className="display hero__title">
          The quiet art of <em>fine dining</em>.
        </h1>
        <p className="lead">
          A tasting room in Midtown where seasonal ingredients, old technique,
          and a long wine list meet at one table.
        </p>
        <div className="hero__actions">
          <a href="#menu" className="btn">Explore the menu</a>
          <a href="#contact" className="btn btn--ghost">Reserve a table</a>
        </div>
      </div>

      <div className="hero__img frame" data-reveal>
        <img src={images.welcome} alt="Signature dish plated at Gerícht" />
      </div>
    </div>

    <div className="hero__facts container">
      <span className="small-caps">Est. 2014</span>
      <span className="small-caps">9 W 53rd St, New York</span>
      <span className="small-caps">Tue – Sun, from 5 pm</span>
    </div>
  </header>
=======
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>explores the essential elements that elevate a meal into a memorable experience. From exceptional ingredients and precise technique to ambiance, service, and presentation, this presentation breaks down how fine dining goes beyond food to create artistry on a plate and an experience for the guest. </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
>>>>>>> c626e25925407ce0bddef18286228ff74d117307
);

export default Header;
