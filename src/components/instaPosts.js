/* eslint-disable */

import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const InstaImage = styled(Img)`
  padding: 2rem 0;
  max-width: 100%;
  aspect-ratio: 1/1;
  margin: 2rem;
  :hover + span {
    border: 2px solid red;
  }
`;

const InstaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  a {
    width: 50%;
  }
`;

// function InstaPosts() {
//   return (
//     <StaticQuery
//       query={graphql`
//         query InstaQuery {
//           allInstaNode(
//             limit: 6
//             sort: { order: DESC, fields: timestamp }
//             filter: { mediaType: { eq: "GraphImage" } }
//           ) {
//             nodes {
//               id
//               localFile {
//                 id
//                 childImageSharp {
//                   fluid(maxWidth: 480) {
//                     ...GatsbyImageSharpFluid
//                   }
//                 }
//               }
//             }
//           }
//         }
//       `}
//       render={data => {
//         return (
//           <InstaWrapper>
//             {data.allInstaNode.nodes.map(node => {
//               return (
//                 <a
//                   href={`https://www.instagram.com/p/${node.id}`}
//                   target="_empty"
//                 >
//                   <InstaImage
//                     fluid={node.localFile.childImageSharp.fluid}
//                     key={node.localFile.id}
//                   />
//                 </a>
//               );
//             })}
//           </InstaWrapper>
//         );
//       }}
//     />
//   );
// }

// export default InstaPosts;
