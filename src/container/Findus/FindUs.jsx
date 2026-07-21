import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
<<<<<<< HEAD
import './FindUs.css';

const FindUs = () => (
  <section className="findus section section--marble" id="contact">
    <div className="container split">
      <div className="split__info">
        <div data-reveal>
          <SubHeading title="Contact" />
          <h2 className="display" style={{ marginTop: '1.25rem' }}>Find us</h2>
        </div>

        <div className="findus__details" data-reveal>
          <p className="lead">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>

          <div className="findus__hours">
            <p className="small-caps findus__hours-title">Opening hours</p>
            <div className="findus__hours-row">
              <span>Mon – Fri</span>
              <span>10:00 am – 02:00 am</span>
            </div>
            <div className="findus__hours-row">
              <span>Sat – Sun</span>
              <span>10:00 am – 03:00 am</span>
            </div>
          </div>

          <a href="#home" className="btn">Reserve a table</a>
        </div>
      </div>

      <div className="split__img frame findus__img" data-reveal>
        <img src={images.findus} alt="The dining room at Gerícht" />
      </div>
    </div>
  </section>
=======

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
>>>>>>> c626e25925407ce0bddef18286228ff74d117307
);

export default FindUs;
