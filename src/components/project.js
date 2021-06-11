import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const ProjectStyles = styled.li`
  position: relative;
  list-style: none;
  height: 415px;
  border-radius: 20px;
  box-shadow: 1px 2px 7px 2px rgb(0 0 0 / 30%);
  overflow: hidden;
  h3 {
    position: absolute;
    display: block;
    width: 100%;
    top: 15%;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    font-size: 2.5rem;
    text-shadow: 0px 2px 5px rgb(0 0 0 / 20%), 1px 3px 5px rgb(0 0 0 / 30%),
      -1px 4px 5px rgb(0 0 0 / 30%);
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.5));
  }
  img {
    display: block;
    width: 100%;
    border-radius: inherit;
    margin: 0 auto;
  }
  .link-list {
    position: absolute;
    width: 100%;
    top: 80%;
    display: flex;
    justify-content: center;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.text};
      border: 0.5px solid black;
      border-radius: 1.5rem;
      padding: 0.3rem 1rem;
      margin: 0 2rem;
      background-color: rgba(255, 255, 255, 0.9);
      box-shadow: 1px 2px 7px 2px rgb(0 0 0 / 30%);
      transition: all 0.3s;
      :hover {
        transform: scale(1.02);
        background-color: ${({ theme }) => theme.link_text};
        color: ${({ theme }) => theme.body};
      }
    }
  }
`;

function Project({ project }) {
  const { slug, projectName, featuredImage, url } = project.frontmatter;
  return (
    <ProjectStyles>
      <h3>{projectName}</h3>
      {featuredImage && <img src={featuredImage.publicURL} alt={projectName} />}
      <div className="link-list">
        <Link to={slug}>More Information</Link>
        <a href={url} target="_empty">
          Visit Page
        </a>
      </div>
    </ProjectStyles>
  );
}

export default Project;
