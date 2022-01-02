import React from "react";
import "./Contract.css";

export const Contract = ({ content }) => {
  const { companyName, jobTitle, dates, description, image } = content;

  return (
    <article className="contract-container">
      <section className="contract-info-container">
        <h3 className="contract-title" data-testid="contract-title">
          {companyName}
        </h3>
        <h3 className="contract-title" data-testid="contract-title">
          {jobTitle}
        </h3>
        <h4 className="contract-dates" data-testid="contract-dates">
          Contract Dates: {dates}
        </h4>
        <p className="contract-description" data-testid="contract-description">
          {description}
        </p>
      </section>
      <article className="contract-image-container">
        <img
          className="contract-image"
          src={image}
          alt={`${companyName} contract project`}
        />
      </article>
    </article>
  );
};
