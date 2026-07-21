import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className="menu-item">
    <div className="menu-item__head">
      <p className="menu-item__name">{title}</p>
      <span className="menu-item__leader" aria-hidden="true" />
      <p className="menu-item__price">{price}</p>
    </div>
    <p className="menu-item__tags">{tags}</p>
  </div>
);

export default MenuItem;
