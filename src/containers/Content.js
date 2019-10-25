import React from 'react';

export const Content = ({ content }) => {
  return (
    <section>
      <article>
        <h3>{content.title}</h3>
        <p>{content.description}</p>
        {content.gitHub && (
          <a href={content.gitHub}>
            <img src='../assets/gitHub.png' />
          </a>
        )}
        {content.live && (
          <a href={content.live}>
            <img src='../assets/liveDemo.png' />
          </a>
        )}
      </article>
      <article>
        <img src={content.image} />
      </article>
    </section>
  );
};
