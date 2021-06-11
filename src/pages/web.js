import { graphql } from 'gatsby';
import React from 'react';

import TextStyles from '../components/styles/text';
import SEO from '../components/seo';
import Project from '../components/project';
import styled from 'styled-components';

const ProjectGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 2rem;
  margin-top: 2rem;
  padding-top: 2rem;
`;

const Line = styled.div`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.link_text},
    ${({ theme }) => theme.body} 40%
  );
  height: 3px;
  border-radius: 15px;
`;

const WebPage = ({ data }) => {
  return (
    <>
      <SEO
        title="Web"
        keywords={[
          `paul`,
          `sieber`,
          `paul sieber`,
          `webdev`,
          `application`,
          `react`,
          `webdevelopment`,
          `web`,
          `developer`,
          `frontend`,
        ]}
      />
      <TextStyles>
        <p>
          I like to build beautiful and functional frontends on the web. I'm
          proficient in HTML, CSS and JavaScript. I also like to work with
          Libaries and Frameworks such as React, NextJS or GatsbyJS.
        </p>
      </TextStyles>
      <TextStyles>
        <h2>Selected Projects</h2>
        <Line />
        <ProjectGrid>
          {data.allMarkdownRemark.nodes.map(project => {
            return <Project key={project.id} project={project} />;
          })}
        </ProjectGrid>
      </TextStyles>
    </>
  );
};

export default WebPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          projectName
          slug
          url
          featuredImage {
            publicURL
          }
        }
      }
    }
  }
`;
