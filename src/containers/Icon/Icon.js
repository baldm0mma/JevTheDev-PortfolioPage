import React from "react";

export const Icon = ({ source }) => {
  return (
    <a
      className="about-link"
      href={source.link}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="icon-a-tag"
    >
      <img className="icon" src={source.imageSource} alt={source.altText} />
    </a>
  );
};
