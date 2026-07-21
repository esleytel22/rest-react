import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
<<<<<<< HEAD
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
=======

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Pain itself is love; the subject is advanced learning. The balance of texture, the text itself, harsh and elevated, marked by the challenges of difficult constraints.</p>
        <button type="button" className="custom__button"onClick={() => window.open('', '_blank')}>View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
>>>>>>> c626e25925407ce0bddef18286228ff74d117307
  );
};

export default Gallery;
