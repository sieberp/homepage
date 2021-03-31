import { graphql } from 'gatsby';
// import Img from 'gatsby-image';
import React from 'react';
// import styled from 'styled-components';

import Highlight from '../components/styles/highlight';
import Text from '../components/styles/text';
import SEO from '../components/seo';

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
        ]}
      />
      <Text height="big">
        I build beautiful an functional websites. <br /> <br />
        More Information coming soon!
      </Text>
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
        }
      }
    }
  }
`;
