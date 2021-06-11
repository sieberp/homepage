import React from 'react';
import Img from 'gatsby-image';
import { graphql, StaticQuery } from 'gatsby';

import SEO from '../components/seo';
import StyledLink from '../components/styles/styledLink';
import styled from 'styled-components';

const TextStyles = styled.div`
  position: relative;
  top: -100px;
  margin: 2rem;
  color: ${({ theme }) => theme.body};
  @media (min-width: 1000px) {
    position: absolute;
    top: 100px;
    h1 {
      font-size: 3rem;
    }
    font-size: 2rem;
  }
`;

const ImgStyles = styled(Img)`
  height: 450px;
`;

const NotFoundPage = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(id: { eq: "1f92759e-63ae-5d9c-8fe8-1345bd542468" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO title="404: Not found" />
        <ImgStyles
          fluid={data.image.childImageSharp.fluid}
          alt="Boat floating through water"
        />
        <TextStyles>
          <h1>This page doesn't exist</h1>
          <p>
            You must have hit a wrong route. You can go back{' '}
            <StyledLink to="/">Home</StyledLink> here.
          </p>
        </TextStyles>
      </>
    )}
  />
);

export default NotFoundPage;
