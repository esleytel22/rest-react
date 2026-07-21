import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const amount = direction === 'left' ? -320 : 320;
    current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="gallery section">
      <div className="container gallery__inner">
        <div className="gallery__content" data-reveal>
          <SubHeading title="Instagram" />
          <h2 className="display">Photo gallery</h2>
          <p className="lead">
            A look inside the room — plates, pours, and the people behind
            them. Follow along at @gericht.
          </p>
          <div className="gallery__arrows">
            <button type="button" aria-label="Scroll gallery left" onClick={() => scroll('left')}>
              <BsArrowLeftShort />
            </button>
            <button type="button" aria-label="Scroll gallery right" onClick={() => scroll('right')}>
              <BsArrowRightShort />
            </button>
          </div>
        </div>

        <div className="gallery__images" ref={scrollRef} data-reveal>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <a
              className="gallery__card"
              key={`gallery_image-${index + 1}`}
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={image} alt={`Dish from the Gerícht gallery, ${index + 1} of 4`} />
              <span className="gallery__card-icon"><BsInstagram /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
