import React from "react";
import "./Content.css";

export const Content = ({ content }) => {
  const { title, description, gitHub, gitLab, live, image } = content;
  
  return (
    <section className="content-container">
      <article className="description-container">
        <h3 className="title" data-testid="content-title">
          {title}
        </h3>
        <p className="description" data-testid="content-description">
          {description}
        </p>
        <aside className="icon-container">
          {gitHub && (
            <a href={gitHub} target="_blank" rel="noopener noreferrer">
              <img
                className="icon"
                src="../assets/gitHub-white.png"
                alt="GitHub Icon"
              />
            </a>
          )}
          {gitLab && (
            <a href={gitLab} target="_blank" rel="noopener noreferrer">
              <img
                className="icon"
                src="../assets/gitlab-icon.png"
                alt="GitLab Icon"
              />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              <img
                className="icon"
                src="../assets/liveDemo.png"
                alt="Live Demo Icon"
              />
            </a>
          )}
        </aside>
      </article>
      <article className="image-container">
        <img className="project-sample-image" src={image} alt="Project" />
      </article>
    </section>
  );
};
