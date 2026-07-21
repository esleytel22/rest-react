import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
<<<<<<< HEAD
  <div className="newsletter" data-reveal>
    <div className="newsletter__heading">
      <SubHeading title="Newsletter" />
      <h2 className="display newsletter__title">Never miss a seating.</h2>
      <p className="lead">New menus, wine dinners, and late openings — once a month, no noise.</p>
    </div>
    <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
      <input type="email" placeholder="Enter your email address" aria-label="Email address" required />
      <button type="submit" className="btn">Subscribe</button>
    </form>
=======
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Subscribe</button>
    </div>
>>>>>>> c626e25925407ce0bddef18286228ff74d117307
  </div>
);

export default Newsletter;
