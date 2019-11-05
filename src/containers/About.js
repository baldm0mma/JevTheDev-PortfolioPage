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
      <img className='profile-photo' src={image} alt='Profile Photo' />
      <h2>{name}</h2>
      <h4>{title}</h4>
      <p>{description}</p>
      <article>
        <h3>Core Skills:</h3>
        {createSkillList()}
      </article>
      <article className='about-icon-container'>
        <a
          className='about-link'
          href={resume}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className='icon' src='../assets/cv.png' alt='Resume Icon' />
        </a>
        <a
          className='about-link'
          href={gitHub}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className='icon' src='../assets/gitHub.png' alt='GitHub Icon' />
        </a>
        <a
          className='about-link'
          href={linkedIn}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='icon'
            src='../assets/linkedIn.png'
            alt='linkedIn Icon'
          />
        </a>
        <a
          className='about-link'
          href={email}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className='icon' src='../assets/email.png' alt='Email Icon' />
        </a>
      </article>
    </section>
  );
};
