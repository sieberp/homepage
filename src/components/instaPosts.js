import React from 'react';
import styled from 'styled-components';
import { StaticQuery } from 'gatsby';

const InstaImage = styled.img`
  margin: 2rem;
`;

function InstaPosts() {
  return (
    <StaticQuery
      query={graphql`
        query InstaQuery {
          allInstaNode(
            limit: 5
            sort: { order: DESC, fields: timestamp }
            filter: { mediaType: { eq: "GraphImage" } }
          ) {
            edges {
              node {
                likes
                id
                caption
                username
                original
                mediaType
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
        console.log(data.allInstaNode.edges);
        return data.allInstaNode.edges.map(edge => (
          <InstaImage
            src={edge.node.thumbnails[2].src}
            key={edge.node.id}
            width={edge.node.thumbnails[2].config_width}
            height={edge.node.thumbnails[2].config_heigth}
          />
        ));
      }}
    />
  );
}

export default InstaPosts;
