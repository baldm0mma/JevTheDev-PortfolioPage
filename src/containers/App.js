import React from 'react';
import { NameBadge } from './NameBadge';
import { Content } from './Content';
import { projectContent } from '../projectContent/projectContent';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import './App.css';

export const App = () => {
  return (
    <main>
      <NameBadge />
      <Zoom>
        <h4 className='portfolio-title'>Portfolio</h4>
        <img className='down-arrow' src='./assets/downArrow.png' />
      </Zoom>
      <Fade left>
        <Content content={projectContent[0]} />
      </Fade>
    </main>
  );
};
