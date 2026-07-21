import React from 'react';
<<<<<<< HEAD

import './Intro.css';

// A deliberately empty band: the global background video shows through here
// almost unobstructed, like a window into the kitchen.
const Intro = () => (
  <section className="video-window" aria-hidden="true">
    <p className="small-caps video-window__caption">A night in the kitchen</p>
  </section>
);
=======
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};
>>>>>>> c626e25925407ce0bddef18286228ff74d117307

export default Intro;
