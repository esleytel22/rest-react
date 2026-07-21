import React from 'react';

import './MenuItem.css';

<<<<<<< HEAD
const MenuItem = ({ title, price, tags }) => (
  <div className="menu-item">
    <div className="menu-item__head">
      <p className="menu-item__name">{title}</p>
      <span className="menu-item__leader" aria-hidden="true" />
      <p className="menu-item__price">{price}</p>
    </div>
    <p className="menu-item__tags">{tags}</p>
=======
const MenuItem = ({title, price, tags}) => (
  <div className='app__menuitem'>
    <div className='app__menuitem-head'>
      <div className='app__menuitem-name'>
        <p className='p__cormorant' style={{color: '#DCCA87'}}>{title}</p>
      </div>

      <div className='app__menuitem-dash'/>

      <div className='app__menuitem-price'>
        <p className='p__cormorant'>{price}</p>
      </div>
    </div>

    <div className='app___menuitem-sub'>
      <p className='p__opensans' style={{ color: '#AAAAAA'}}>{tags}</p>
    </div>
>>>>>>> c626e25925407ce0bddef18286228ff74d117307
  </div>
);

export default MenuItem;
