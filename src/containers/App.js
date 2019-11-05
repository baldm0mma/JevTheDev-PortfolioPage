import React, { useEffect } from 'react';
import { About } from './About';
import { Content } from './Content';
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
      <Zoom>
        <article className='nameBadge-container'>
          <h2>Welcome to _jevTheDev</h2>
          <p>Hi, I'm Jev; This is my portfolio.</p>
        </article>
      </Zoom>
      <Zoom>
        <h4 className='about-title'>About</h4>
      </Zoom>
      <img
        className='down-arrow'
        src='./assets/downArrow.png'
        alt='Down Arrow'
      />
      <Zoom>
        <About />
      </Zoom>
      <Zoom>
        <h4 className='about-title'>Projects</h4>
      </Zoom>
      <img
        className='down-arrow'
        src='./assets/downArrow.png'
        alt='Down Arrow'
      />
      <Fade right>
        <Content content={projectContent[0]} />
      </Fade>
      <img
        className='down-arrow'
        src='./assets/downArrow.png'
        alt='Down Arrow'
      />
      <Fade left>
        <Content content={projectContent[1]} />
      </Fade>
      <img
        className='down-arrow'
        src='./assets/downArrow.png'
        alt='Down Arrow'
      />
      <Fade right>
        <Content content={projectContent[4]} />
      </Fade>
      <img
        className='down-arrow'
        src='./assets/downArrow.png'
        alt='Down Arrow'
      />
      <Fade left>
        <Content content={projectContent[2]} />
      </Fade>
      <img
        className='down-arrow'
        src='./assets/downArrow.png'
        alt='Down Arrow'
      />
      <Fade right>
        <Content content={projectContent[3]} />
      </Fade>
      <img
        className='down-arrow'
        src='./assets/downArrow.png'
        alt='Down Arrow'
      />
      <Fade left>
        <Content content={projectContent[5]} />
      </Fade>
    </main>
  );
};
