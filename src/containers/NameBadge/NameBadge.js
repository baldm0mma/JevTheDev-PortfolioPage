import React from "react";
import "./NameBadge.css";
import Zoom from "react-reveal/Zoom";

export const NameBadge = () => {
  return (
    <Zoom>
      <article className="nameBadge-container">
        <h1 data-testid="page-title">Welcome to _jevTheDev</h1>
        <p data-testid="page-text">
          Hi, I'm Jev. I'm a Dev. This is my portfolio.
        </p>
      </article>
    </Zoom>
  );
};
