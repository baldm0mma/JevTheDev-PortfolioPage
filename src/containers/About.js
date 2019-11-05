import React from 'react';
import { aboutContent } from '../projectContent/projectContent.js';
import './About.css';

const {
  name,
  title,
  description,
  gitHub,
  linkedIn,
  resume,
  email,
  image,
  skills
} = aboutContent;

export const About = () => {
  const createSkillList = () => {
    return skills.map(skill => {
      return <p className='skill'>{skill}</p>;
    });
  };

  return (
    <section className='about-container'>
      <img className='profile-photo' src={image} />
      <h2>{name}</h2>
      <h4>{title}</h4>
      <p>{description}</p>
      <article>
        <h3>Core Skills:</h3>
        {createSkillList()}
      </article>
      <article className='about-icon-container'>
        <a className='about-link' href={resume} target='_blank'>
          <img className='icon' src='../assets/cv.png' />
        </a>
        <a className='about-link' href={gitHub} target='_blank'>
          <img className='icon' src='../assets/gitHub.png' />
        </a>
        <a className='about-link' href={linkedIn} target='_blank'>
          <img className='icon' src='../assets/linkedIn.png' />
        </a>
        <a className='about-link' href={email} target='_blank'>
          <img className='icon' src='../assets/email.png' />
        </a>
      </article>
    </section>
  );
};
