import React, { useEffect } from "react";
import { About } from "./containers/About/About";
import { Contact } from "./containers/Contact/Contact";
import { Content } from "./containers/Content/Content";
import { Contract } from "./containers/Contract/Contract";
import { projectContent, contractContent } from "./allData/allData.js";
import { wakeHerokuApps } from "./fetchCalls";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import "./App.css";

export const App = () => {
  useEffect(() => {
    wakeHerokuApps();
  }, []);

  return (
    <main>
      <Zoom>
        <article className="nameBadge-container">
          <h1 data-testId="page-title">Welcome to _jevTheDev</h1>
          <p>Hi, I'm Jev. I'm a Dev. This is my portfolio.</p>
        </article>
      </Zoom>
      <Zoom>
        <h4 className="about-title">About</h4>
      </Zoom>
      <img
        className="down-arrow"
        src="./assets/downArrow.png"
        alt="Down Arrow"
      />
      <Zoom>
        <About />
      </Zoom>
      <Zoom>
        <h4 className="about-title">Professional Work</h4>
      </Zoom>
      <img
        className="down-arrow"
        src="./assets/downArrow.png"
        alt="Down Arrow"
      />
      <Fade right>
        <Contract content={contractContent[0]} />
      </Fade>
      <img
        className="down-arrow"
        src="./assets/downArrow.png"
        alt="Down Arrow"
      />
      <Fade left>
        <Contract content={contractContent[1]} />
      </Fade>
      <Zoom>
        <h4 className="about-title">Personal Projects</h4>
      </Zoom>
      <img
        className="down-arrow"
        src="./assets/downArrow.png"
        alt="Down Arrow"
      />
      <Fade right>
        <Content content={projectContent[0]} />
      </Fade>
      <img
        className="down-arrow"
        src="./assets/downArrow.png"
        alt="Down Arrow"
      />
      <Fade left>
        <Content content={projectContent[1]} />
      </Fade>
      <img
        className="down-arrow"
        src="./assets/downArrow.png"
        alt="Down Arrow"
      />
      <Fade right>
        <Content content={projectContent[4]} />
      </Fade>
      <img
        className="down-arrow"
        src="./assets/downArrow.png"
        alt="Down Arrow"
      />
      <Fade left>
        <Content content={projectContent[2]} />
      </Fade>
      <img
        className="down-arrow"
        src="./assets/downArrow.png"
        alt="Down Arrow"
      />
      <Fade right>
        <Content content={projectContent[3]} />
      </Fade>
      <img
        className="down-arrow"
        src="./assets/downArrow.png"
        alt="Down Arrow"
      />
      <Fade left>
        <Content content={projectContent[5]} />
      </Fade>
      <Fade top>
        <Contact />
      </Fade>
    </main>
  );
};
