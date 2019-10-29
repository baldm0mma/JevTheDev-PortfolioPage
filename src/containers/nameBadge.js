import React from 'react';
import './NameBadge.css';
import Fade from 'react-reveal/Fade';

export const NameBadge = () => {
  return (
    <Fade>
      <article className='nameBadge-container'>
        <h2>Welcome to _jevTheDev</h2>
        <p>Hi, I'm Jev; This is my portfolio.</p>
      </article>
    </Fade>
  );
};
