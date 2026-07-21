import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <section className="chef section section--marble">
    <div className="container split split--img-first">
      <div className="split__img frame chef__img" data-reveal>
        <img src={images.chef} alt="Chef Kevin Luo plating a dish" />
      </div>

      <div className="split__info" data-reveal>
        <SubHeading title="Chef's word" />
        <h2 className="display">What we believe in</h2>

        <blockquote className="chef__quote">
          <p>&ldquo;Respect the ingredient, and the plate takes care of itself.&rdquo;</p>
        </blockquote>

        <p className="lead">
          My goal is simple — to honor tradition and create food that connects
          people. Every plate tells a story of dedication, patience, and love
          for the craft.
        </p>

        <div className="chef__sign">
          <img src={images.sign} alt="Kevin Luo's signature" />
          <div>
            <p className="chef__sign-name">Kevin Luo</p>
            <p className="small-caps">Chef &amp; founder</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Chef;
