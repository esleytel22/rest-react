import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Background.css';

// The kitchen video plays continuously behind the whole site.
// Marble sections paint their own opaque backdrop on top of it;
// everywhere else the video shows through.
const Background = () => {
  const vidRef = React.useRef();
  const [playing, setPlaying] = React.useState(true);

  // Play by default. Muted + playsInline autoplay is allowed everywhere, but if a
  // browser still blocks it, retry on the user's first interaction with the page.
  React.useEffect(() => {
    const video = vidRef.current;

    const tryPlay = () => {
      const attempt = video.play();
      if (attempt !== undefined) {
        attempt.then(() => setPlaying(true)).catch(() => setPlaying(false));
      }
    };

    tryPlay();

    const onFirstInteraction = () => {
      if (video.paused) tryPlay();
    };
    window.addEventListener('pointerdown', onFirstInteraction, { once: true });
    return () => window.removeEventListener('pointerdown', onFirstInteraction);
  }, []);

  const toggle = () => {
    const video = vidRef.current;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <div className="bg-stage" aria-hidden="true">
        <video ref={vidRef} src={meal} type="video/mp4" autoPlay loop muted playsInline preload="auto" />
        <div className="bg-stage__scrim" />
      </div>

      <button
        type="button"
        className="bg-stage__toggle"
        aria-label={playing ? 'Pause background video' : 'Play background video'}
        onClick={toggle}
      >
        {playing ? <BsPauseFill /> : <BsFillPlayFill />}
      </button>
    </>
  );
};

export default Background;
