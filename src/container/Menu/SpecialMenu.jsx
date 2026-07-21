import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
<<<<<<< HEAD
  <section className="menu section" id="menu">
    <div className="container">
      <div className="section-head section-head--center" data-reveal>
        <SubHeading title="The cellar & the bar" />
        <h2 className="display">Today&apos;s special</h2>
      </div>

      <div className="menu__grid">
        <div className="menu__col" data-reveal>
          <h3 className="small-caps menu__col-title">Wine &amp; beer</h3>
=======
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
>>>>>>> c626e25925407ce0bddef18286228ff74d117307
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
<<<<<<< HEAD

        <div className="menu__img frame" data-reveal>
          <img src={images.menu} alt="A pour of red wine beside a plated course" />
        </div>

        <div className="menu__col" data-reveal>
          <h3 className="small-caps menu__col-title">Cocktails</h3>
=======
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
>>>>>>> c626e25925407ce0bddef18286228ff74d117307
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
<<<<<<< HEAD

      <div className="menu__more" data-reveal>
        <a href="#contact" className="btn btn--ghost">View the full menu</a>
      </div>
    </div>
  </section>
=======
    </div>

    <div style={{ marginTop: '15px' }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
>>>>>>> c626e25925407ce0bddef18286228ff74d117307
);

export default SpecialMenu;
