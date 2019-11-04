import React from 'react';

export const Content = ({ content }) => {
  return (
    <section className='content-container'>
      <article className='description-container'>
        <h3 className='title'>{content.title}</h3>
        <p className='description'>{content.description}</p>
        <aside className='icon-container'>
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
      <article className='image-container'>
        <img className='project-sample-image' src={content.image} />
      </article>
    </section>
  );
};
