import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <footer className="footer section section--marble">
    <div className="container">
      <Newsletter />

      <div className="footer__grid">
        <div className="footer__col">
          <h3 className="small-caps footer__heading">Contact us</h3>
          <p>9 W 53rd St, New York, NY 10019, USA</p>
          <p>+1 212-344-1230</p>
          <p>+1 212-555-1230</p>
        </div>

        <div className="footer__col footer__col--brand">
          <img src={images.gericht} alt="Gerícht" className="footer__logo" />
          <p className="footer__tagline">
            &ldquo;The best way to find yourself is to lose yourself in the
            service of others.&rdquo;
          </p>
          <div className="footer__icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FiFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FiTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FiInstagram /></a>
          </div>
        </div>

        <div className="footer__col footer__col--right">
          <h3 className="small-caps footer__heading">Working hours</h3>
          <p>Monday – Friday</p>
          <p>08:00 am – 12:00 am</p>
          <p>Saturday – Sunday</p>
          <p>07:00 am – 11:00 pm</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="small-caps">© 2026 Gerícht. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
