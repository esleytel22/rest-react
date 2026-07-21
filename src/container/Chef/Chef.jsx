import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
<<<<<<< HEAD
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
=======
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans"> A founder turns an idea into a responsibility.</p>
        </div>
        <p className="p__opensans"> As a chef, my goal is simple — to respect the ingredients, honor tradition, and create food that connects people. Every plate tells a story of dedication, patience, and love for the craft.</p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
>>>>>>> c626e25925407ce0bddef18286228ff74d117307
);

export default Chef;
