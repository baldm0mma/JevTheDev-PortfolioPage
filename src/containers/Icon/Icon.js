import React from "react";

export const Icon = ({ source }) => {
  return (
    <a
      className="about-link"
      href={source.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="icon" src={source.imageSource} alt={source.altText} />
    </a>
  );
};
