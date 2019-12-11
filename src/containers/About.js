import React from "react";
import { Contact } from "./Contact";
import { aboutContent } from "../projectContent/projectContent.js";
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
      <img className="profile-photo" src={image} alt="Headshot" />
      <h2>{name}</h2>
      <h4>{title}</h4>
      <p>{description}</p>
      <article>
        <h3>Core Skills:</h3>
        {createSkillList()}
      </article>
      <Contact />
    </section>
  );
};
