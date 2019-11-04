import React from 'react';

export const Content = ({ content }) => {
  return (
    <section>
      <article>
        <h3>{content.title}</h3>
        <p>{content.description}</p>
        <aside>
          {content.gitHub && (
            <a href={content.gitHub}>
              <img src='../assets/gitHub.png' />
            </a>
          )}
          {content.gitLab && (
            <a href={content.gitLab}>
              <img src='../assets/gitlab-icon.png' />
            </a>
          )}
          {content.live && (
            <a href={content.live}>
              <img src='../assets/liveDemo.png' />
            </a>
          )}
        </aside>
      </article>
      <article>
        <img src={content.image} />
      </article>
    </section>
  );
};
