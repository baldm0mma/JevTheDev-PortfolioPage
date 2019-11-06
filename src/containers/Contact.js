import React from 'react';
import { aboutContent } from '../projectContent/projectContent.js';
import './Contact.css';

const { gitHub, linkedIn, resume, email } = aboutContent;

export const Contact = () => {
  return (
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
        <img className='icon' src='../assets/gitHub-black.png' alt='GitHub Icon' />
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
  );
};
