/* eslint-disable */

import React from 'react';
import styled from 'styled-components';
import { StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const InstaImage = styled(Img)`
  padding: 2rem 0;
  max-width: 100%;
  aspect-ratio: 1/1;
  margin: 2rem;
  @media screen and (min-width: 437px) {
    width: 40%;
  }
  :hover + span {
    border: 2px solid red;
  }
`;

const InstaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function InstaPosts() {
  return (
    <StaticQuery
      query={graphql`
        query InstaQuery {
          allInstaNode(
            limit: 6
            skip: 2
            # sort: { order: DESC, fields: timestamp }
            filter: { mediaType: { eq: "GraphImage" } }
          ) {
            nodes {
              localFile {
                id
                childImageSharp {
                  fluid(maxWidth: 480) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <InstaWrapper>
            {data.allInstaNode.nodes.map(node => {
              return (
                <InstaImage
                  fluid={node.localFile.childImageSharp.fluid}
                  key={node.localFile.id}
                />
              );
            })}
          </InstaWrapper>
        );
      }}
    />
  );
  {
    /* <h1>Here should be the insta posts</h1> */
  }
}

export default InstaPosts;
