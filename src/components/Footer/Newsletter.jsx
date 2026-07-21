import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
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
  </div>
);

export default Newsletter;
