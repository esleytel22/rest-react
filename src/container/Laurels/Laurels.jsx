import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
<<<<<<< HEAD
  <div className="award-card" data-reveal>
    <img src={imgUrl} alt="" aria-hidden="true" />
    <div>
      <p className="award-card__title">{title}</p>
      <p className="award-card__subtitle">{subtitle}</p>
=======
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
>>>>>>> c626e25925407ce0bddef18286228ff74d117307
    </div>
  </div>
);

const Laurels = () => (
<<<<<<< HEAD
  <section className="laurels section section--marble" id="awards">
    <div className="container split">
      <div className="split__info">
        <div data-reveal>
          <SubHeading title="Awards & recognition" />
          <h2 className="display" style={{ marginTop: '1.25rem' }}>Our laurels</h2>
        </div>

        <div className="laurels__grid">
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>

      <div className="split__img frame laurels__img" data-reveal>
        <img src={images.laurels} alt="An awarded dish at Gerícht" />
      </div>
    </div>
  </section>
=======
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels_img" />
    </div>
  </div>
>>>>>>> c626e25925407ce0bddef18286228ff74d117307
);

export default Laurels;
