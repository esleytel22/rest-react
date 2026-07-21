import React from 'react';

<<<<<<< HEAD
const SubHeading = ({ title }) => (
  <p className="eyebrow">{title}</p>
=======
import { images } from '../../constants';
const SubHeading = ({ title }) => (
  <div style={{marginBottom: '1rem'}}>
    <p className='p__cormorant'>{ title }</p>
    <img src={images.spoon} alt="spoon" className='spoon__img' />
  </div>
>>>>>>> c626e25925407ce0bddef18286228ff74d117307
);

export default SubHeading;
