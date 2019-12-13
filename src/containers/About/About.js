import React from "react";
import { Contact } from "../Contact/Contact";
import { aboutContent } from "../../allData/allData.js";
import "./About.css";

const { name, title, description, image, skills } = aboutContent;

export const About = () => {
  const createSkillList = () => {
    return skills.map(skill => {
      return (
        <p className="skill" key={skill}>
          {skill}
        </p>
      );
    });
  };

  return (
    <section className="about-container">
      <img
        className="profile-photo"
        src={image}
        alt="Headshot"
        data-testid="about-image"
      />
      <h2 data-testid="about-name">{name}</h2>
      <h4 data-testid="about-title">{title}</h4>
      <p data-testid="about-description">{description}</p>
      <article data-testid="about-skill-list">
        <h3>Core Skills:</h3>
        {createSkillList()}
      </article>
      <Contact />
    </section>
  );
};
