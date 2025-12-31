import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
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
);

export default Header;
