import React from 'react';
import { graphql, Link } from 'gatsby';

import TextStyles from '../components/styles/text';
import styled from 'styled-components';

const ImgStyles = styled.img`
  width: 100%;
  height: 400px;
  object-position: 0 0;
  object-fit: cover;
`;

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <>
      <Link to="/web">Back</Link>
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
        featuredImage {
          publicURL
          id
        }
      }
    }
  }
`;
