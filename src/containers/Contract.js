import React from 'react';
import { contractContent } from '../projectContent/projectContent';

const { title, dates, description, image } = contractContent;

export const Contract = () => {
  return (
    <article className='contract-container'>
      <section>
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
