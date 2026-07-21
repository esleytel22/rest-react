import React from 'react';

import './Intro.css';

// A deliberately empty band: the global background video shows through here
// almost unobstructed, like a window into the kitchen.
const Intro = () => (
  <section className="video-window" aria-hidden="true">
    <p className="small-caps video-window__caption">A night in the kitchen</p>
  </section>
);

export default Intro;
