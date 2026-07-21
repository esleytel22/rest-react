import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
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
);

export default AboutUs;
