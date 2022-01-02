import React from "react";
import "./FullTime.css";

export const FullTime = ({ content }) => {
  const { companyName, jobTitle, dates, description, image } = content;

  return (
    <article className="fullTime-container">
      <section className="fullTime-info-container">
        <h3 className="fullTime-title" data-testid="fullTime-title">
          {companyName}
        </h3>
        <h3 className="fullTime-title" data-testid="fullTime-title">
          {jobTitle}
        </h3>
        <h4 className="fullTime-dates" data-testid="fullTime-dates">
          Dates: {dates}
        </h4>
        <p className="fullTime-description" data-testid="fullTime-description">
          {description}
        </p>
      </section>
      <article className="fullTime-image-container">
        <img
          className="fullTime-image"
          src={image}
          alt={`${companyName} fullTime project`}
        />
      </article>
    </article>
  );
};
