import React, { useEffect } from "react";
import { About } from "./containers/About/About";
import { Contact } from "./containers/Contact/Contact";
import { Contract } from "./containers/Contract/Contract";
import { FullTime } from "./containers/FullTime/FullTime";
import { NameBadge } from "./containers/NameBadge/NameBadge";
import {
  // projectContent,
  contractContent,
  fullTimeContent,
} from "./allData/allData.js";
import { wakeHerokuApps } from "./apiCalls";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import "./App.css";

export const App = () => {
  useEffect(() => {
    wakeHerokuApps();
  }, []);

  return (
    <main>
      <NameBadge />
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
      <Fade left>
        <FullTime content={fullTimeContent[0]} />
      </Fade>
      <img
        className="down-arrow"
        src="./assets/downArrow.png"
        alt="Down Arrow"
      />
      <Fade right>
        <FullTime content={fullTimeContent[1]} />
      </Fade>
      <img
        className="down-arrow"
        src="./assets/downArrow.png"
        alt="Down Arrow"
      />
      <Fade left>
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
      {/* <Zoom>
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
      </Fade> */}
      <Fade top>
        <Contact />
      </Fade>
    </main>
  );
};
