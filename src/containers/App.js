import React, { useEffect } from 'react';
import { About } from './About';
import { Content } from './Content';
import { NameBadge } from './NameBadge';
import { projectContent, aboutContent } from '../projectContent/projectContent';
import { wakeHerokuApps } from '../fetchCalls';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import './App.css';

export const App = () => {
  useEffect(() => {
    wakeHerokuApps();
  }, []);

  return (
    <main>
      {/* <NameBadge /> */}
      <Zoom>
        <h4 className='about-title'>About</h4>
      </Zoom>
      <img className='down-arrow' src='./assets/downArrow.png' />
      <Zoom>
        <About />
      </Zoom>
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
