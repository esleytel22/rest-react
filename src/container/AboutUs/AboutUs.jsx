import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
<<<<<<< HEAD
  <section className="about section section--marble" id="about">
    <div className="container">
      <p className="about__pull display" data-reveal>
        Two decades at the stove, <em>one idea</em>: respect the ingredient.
      </p>

      <div className="about__columns">
        <article className="about__col" data-reveal>
          <h2 className="eyebrow">About us</h2>
          <p className="lead">
            We are dedicated to delivering exceptional dining experiences
            through quality, creativity, and attention to detail — a short
            seasonal menu, cooked with patience.
          </p>
          <a href="#menu" className="about__link">More about us</a>
        </article>

        <div className="about__knife" data-reveal aria-hidden="true">
          <img src={images.knife} alt="" />
        </div>

        <article className="about__col about__col--right" data-reveal>
          <h2 className="eyebrow">Our history</h2>
          <p className="lead">
            Built on years of dedication to the culinary arts, our history
            reflects a continuous pursuit of refinement — from a six-seat
            counter to the room you see today.
          </p>
          <a href="#awards" className="about__link">More history</a>
        </article>
      </div>
    </div>
  </section>
=======
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">We are dedicated to delivering exceptional dining experiences through quality, creativity, and attention to detail.</p>
        <button type="button" className="custom__button">More About</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" style={{ transform: 'rotate(180deg)' }} />
        <p className="p__opensans">Built on years of dedication to the culinary arts, our history reflects a continuous pursuit of refinement. </p>
        <button type="button" className="custom__button">More History</button>
      </div>
    </div>
  </div>
>>>>>>> c626e25925407ce0bddef18286228ff74d117307
);

export default AboutUs;
