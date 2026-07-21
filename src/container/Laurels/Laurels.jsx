import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="award-card" data-reveal>
    <img src={imgUrl} alt="" aria-hidden="true" />
    <div>
      <p className="award-card__title">{title}</p>
      <p className="award-card__subtitle">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
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
);

export default Laurels;
