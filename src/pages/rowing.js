import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import SEO from '../components/seo';
import Text from '../components/styles/text';
import Highlight from '../components/styles/highlight';
import StyledLink from '../components/styles/styledLink';
import InstaPosts from '../components/instaPosts';

const Cite = styled.span`
  font-style: italic;
  font-size: 2.5rem;
  font-weight: bolder;
`;

const StyledA = styled.a`
  color: ${props => props.theme.link_text};
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: color 0.2s cubic-bezier(0.86, 0, 0.07, 1);
  :hover {
    color: ${props => props.theme.body};
  }
  :before {
    content: '';
    display: block;
    height: 0;
    background-color: ${({ theme }) => theme.link_text};
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    border-radius: 2px;
    transition: height 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }
  :hover:before {
    height: 100%;
  }
`;

const StyledImg = styled(Img)`
  margin: 2rem;
`;

const Follow = styled.span`
  display: block;
  width: 100%;
  padding: 0 1rem;
  font-size: 2rem;
  font-weight: bold;
`;

const Section = styled.section`
  position: relative;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  height: max-content;
  display: grid;
  grid-template-columns: 1fr 2fr;
  :nth-of-type(2n) {
    grid-template-columns: 2fr 1fr;
  }
  @media screen and (max-width: 699px) {
    display: block;
    flex-direction: column-reverse;
    flex-basis: 1;
  }
`;

const RowingPage = ({ data }) => {
  return (
    <>
      <SEO title="Rowing" keywords={[`rowing`, `olympics`, `sieber`, `paul`]} />
      <Text>
        <Cite>"Rowing is like flying, just better..."</Cite>
        <Section data-sal="fade" data-sal-delay="300" data-sal-easing="ease">
          <p>
            In rowing there is no perfect stroke, you can row your whole life,
            there will always be something to work on. But there is the feeling
            of gliding over the water, being in synchronistation with your team,
            calmly breathing, being alive -<br />
            <Highlight>this is perfection</Highlight>.
          </p>
          <StyledImg fluid={data.tealRow.childImageSharp.fluid} />
        </Section>
        <Section data-sal="fade" data-sal-delay="600" data-sal-easing="ease">
          <StyledImg fluid={data.mountainRow.childImageSharp.fluid} />
          <p>
            <Highlight>Racing at Olympic Games</Highlight> needs perfection. You
            have to put in the work over years and stay in the moment when it
            comes to racing. As an Olympian I know what it takes and am ready to
            put in the effort.
            <br />
            <br />
            If you want to support me on the journey to Tokio then{' '}
            <StyledLink to="/contact">let's get to work together</StyledLink>
          </p>
        </Section>
        <Section data-sal="fade" data-sal-delay="900" data-sal-easing="ease">
          <Follow>
            You can also follow my journey on{' '}
            <StyledA
              href="https://www.instagram.com/paul_sieber"
              target="_empty"
            >
              Instagram
            </StyledA>
          </Follow>
          <InstaPosts />
        </Section>
      </Text>
    </>
  );
};

export default RowingPage;

export const pageQuery = graphql`
  query {
    tealRow: file(name: { eq: "12" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mountainRow: file(name: { eq: "7" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
