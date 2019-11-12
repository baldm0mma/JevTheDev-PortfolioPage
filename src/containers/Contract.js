import React from 'react';
import './Contract.css';

export const Contract = ({ content }) => {
  const { title, dates, description, image } = content;

  return (
    <article className='contract-container'>
      <section className='contract-info-container'>
        <h3 className='contract-title'>{title}</h3>
        <h4 className='contract-dates'>Contract Dates: {dates}</h4>
        <p className='contract-description'>{description}</p>
      </section>
      <img
        className='contract-image'
        src={image}
        alt={`photo of ${title} contract project`}
      />
    </article>
  );
};