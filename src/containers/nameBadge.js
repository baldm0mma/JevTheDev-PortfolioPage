import React from 'react';
import './NameBadge.css';
import Zoom from 'react-reveal/Zoom';

export const NameBadge = () => {
  return (
    <Zoom>
      <article className='nameBadge-container'>
        <h2>Welcome to _jevTheDev</h2>
        <p>Hi, I'm Jev; This is my portfolio.</p>
      </article>
    </Zoom>
  );
};
