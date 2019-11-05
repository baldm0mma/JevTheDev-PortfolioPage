import './App.css';
import { Content } from './Content';
import { NameBadge } from './NameBadge';
import { projectContent, aboutContent } from '../projectContent/projectContent';
import { wakeHerokuApps } from '../fetchCalls.js';
import Fade from 'react-reveal/Fade';
import React, { useEffect } from 'react';
import Zoom from 'react-reveal/Zoom';

export const App = () => {
  // useEffect(() => {
  //   wakeHerokuApps();
  // }, []);

  return (
    <main>
      <NameBadge />
      <img className='down-arrow' src='./assets/downArrow.png' />
      <Zoom>
        <h4 className='about-title'>About</h4>
      </Zoom>
      <img className='down-arrow' src='./assets/downArrow.png' />
      <Zoom>
        <h4 className='about-title'>Projects</h4>
      </Zoom>
      <img className='down-arrow' src='./assets/downArrow.png' />
      <Fade right>
        <Content content={projectContent[0]} />
      </Fade>
      <img className='down-arrow' src='./assets/downArrow.png' />
      <Fade left>
        <Content content={projectContent[1]} />
      </Fade>
      <img className='down-arrow' src='./assets/downArrow.png' />
      <Fade right>
        <Content content={projectContent[4]} />
      </Fade>
      <img className='down-arrow' src='./assets/downArrow.png' />
      <Fade left>
        <Content content={projectContent[2]} />
      </Fade>
      <img className='down-arrow' src='./assets/downArrow.png' />
      <Fade right>
        <Content content={projectContent[3]} />
      </Fade>
      <img className='down-arrow' src='./assets/downArrow.png' />
      <Fade left>
        <Content content={projectContent[5]} />
      </Fade>
    </main>
  );
};
