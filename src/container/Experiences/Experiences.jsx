import React from 'react';

import { SubHeading } from '../../components';
import './Experiences.css';

const EXPERIENCES = [
  {
    name: 'Tasting Menu',
    price: 95,
    paymentLink: 'https://buy.stripe.com/REPLACE_TASTING',
    featured: false,
    features: [
      'Five courses from the current menu',
      "Chef's amuse-bouche to start",
      'House bread service',
      'Dessert & petit fours',
    ],
  },
  {
    name: "Chef's Counter",
    price: 145,
    paymentLink: 'https://buy.stripe.com/REPLACE_COUNTER',
    featured: true,
    badge: 'Most Requested',
    features: [
      'Everything in the Tasting Menu',
      'Front-row seat at the open kitchen',
      "Seven courses, chef's choice",
      'Curated wine pairings',
      'Signed menu to take home',
    ],
  },
  {
    name: 'Private Room',
    price: 175,
    paymentLink: 'https://buy.stripe.com/REPLACE_PRIVATE',
    featured: false,
    features: [
      'Everything in the Tasting Menu',
      'Private dining room, seats 14',
      'Dedicated server & sommelier',
      'Custom printed menus',
    ],
  },
];

const Experiences = () => (
  <div className="app__bg app__experiences flex__center section__padding" id="experiences">
    <div className="app__experiences-title">
      <SubHeading title="Reserve Your Evening" />
      <h1 className="headtext__cormorant">Dining Experiences</h1>
      <p className="p__opensans app__experiences-sub">Priced per guest. Reservations recommended two weeks in advance.</p>
    </div>

    <div className="app__experiences-cards">
      {EXPERIENCES.map((exp) => (
        <div key={exp.name} className={`app__experiences-card ${exp.featured ? 'app__experiences-card--featured' : ''}`}>
          {exp.badge && <div className="app__experiences-badge p__opensans">{exp.badge}</div>}
          <p className="p__cormorant app__experiences-card_name">{exp.name}</p>
          <p className="app__experiences-card_price">
            <span>$</span>{exp.price}
            <span className="app__experiences-card_per p__opensans"> / guest</span>
          </p>
          <div className="app__experiences-card_features">
            {exp.features.map((f) => (
              <p key={f} className="p__opensans">{f}</p>
            ))}
          </div>
          <a
            href={exp.paymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="custom__button app__experiences-card_btn"
          >
            Reserve
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Experiences;
