/* eslint-disable */

import React from 'react';
import styled from 'styled-components';
import { StaticQuery } from 'gatsby';

const InstaImage = styled.img`
  padding: 2rem 0;
  max-width: 100%;
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
            # sort: { order: DESC, fields: timestamp }
            filter: { mediaType: { eq: "GraphImage" } }
          ) {
            edges {
              node {
                id
                caption
                thumbnails {
                  config_height
                  config_width
                  src
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <InstaWrapper>
            {data.allInstaNode.edges.map(edge => (
              <InstaImage
                src={edge.node.thumbnails[3].src}
                key={edge.node.id}
                width={edge.node.thumbnails[3].config_width}
              />
            ))}
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
