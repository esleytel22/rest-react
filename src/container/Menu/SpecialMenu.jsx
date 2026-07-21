import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <section className="menu section" id="menu">
    <div className="container">
      <div className="section-head section-head--center" data-reveal>
        <SubHeading title="The cellar & the bar" />
        <h2 className="display">Today&apos;s special</h2>
      </div>

      <div className="menu__grid">
        <div className="menu__col" data-reveal>
          <h3 className="small-caps menu__col-title">Wine &amp; beer</h3>
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>

        <div className="menu__img frame" data-reveal>
          <img src={images.menu} alt="A pour of red wine beside a plated course" />
        </div>

        <div className="menu__col" data-reveal>
          <h3 className="small-caps menu__col-title">Cocktails</h3>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>

      <div className="menu__more" data-reveal>
        <a href="#contact" className="btn btn--ghost">View the full menu</a>
      </div>
    </div>
  </section>
);

export default SpecialMenu;
