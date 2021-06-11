import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import TextStyles from '../components/styles/text';
import SEO from '../components/seo';

const ImgStyles = styled.img`
  width: 100%;
  height: 400px;
  object-position: 0 0;
  object-fit: cover;
  margin: 2rem 0;
`;

const BackStyles = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 2rem;
  position: relative;
  :before {
    content: '';
    display: block;
    width: 100%;
    height: 1rem;
    background-color: ${({ theme }) => theme.body};
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    border-radius: 2px;
    transition: width 0.6s cubic-bezier(0.86, 0, 0.07, 1);
  }
  :after {
    content: '';
    display: block;
    width: 100%;
    height: 1rem;
    background-color: ${({ theme }) => theme.link_text};
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -2;
    border-radius: 2px;
  }
  :hover:before {
    width: 0%;
  }
`;

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <>
      <SEO
        title={frontmatter.projectName}
        keywords={[
          `paul sieber`,
          `paul`,
          `sieber`,
          `webdevelopment`,
          `frontend`,
          `react`,
          `web`,
          `developer`,
          ...frontmatter.technologies,
        ]}
      />
      <BackStyles to="/web">‹ Back</BackStyles>
      <TextStyles>
        <h1>{frontmatter.projectName}</h1>
        <ImgStyles
          src={frontmatter.featuredImage.publicURL}
          alt={`Screenshot of the project for ${frontmatter.projectName}`}
        />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </TextStyles>
    </>
  );
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        projectName
        technologies
        featuredImage {
          publicURL
          id
        }
      }
    }
  }
`;
