<<<<<<< HEAD
// Retired: the redesigned footer no longer uses a background overlay.
const FooterOverlay = () => null;
=======
import React from 'react';

import './FooterOverlay.css';

const FooterOverlay = () => (
  <div className="app__footerOverlay">
    <div className="app__footerOverlay-black" />
    <div className="app__footerOverlay-img app__bg" />
  </div>
);
>>>>>>> c626e25925407ce0bddef18286228ff74d117307

export default FooterOverlay;
