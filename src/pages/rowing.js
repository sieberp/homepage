import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import SEO from '../components/seo';
import TextStyles from '../components/styles/text';
import Highlight from '../components/styles/highlight';

const Cite = styled.span`
  font-style: italic;
  font-size: 2.5rem;
  font-weight: bolder;
`;

const StyledImg = styled(Img)`
  margin: 1rem 0;
  @media screen and (min-width: 700px) {
    margin: 2rem;
  }
`;

const Section = styled.section`
  position: relative;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  height: max-content;
  display: grid;
  grid-template-columns: 1fr 2fr;
  &:nth-of-type(2n) {
    grid-template-columns: 2fr 1fr;
  }
  @media screen and (max-width: 699px) {
    display: block;
    flex-direction: column-reverse;
    flex-basis: 1;
  }
`;

const ListStyles = styled.ul`
  list-style: none;
  text-align: right;
  li {
    margin: 1rem;
  }
`;

const RowingPage = ({ data }) => {
  return (
    <>
      <SEO title="Rowing" keywords={[`rowing`, `olympics`, `sieber`, `paul`]} />
      <TextStyles>
        <Cite>"Rowing is like flying, just better..."</Cite>
        <Section data-sal="fade" data-sal-delay="300" data-sal-easing="ease">
          <p>
            In rowing there is no perfect stroke, you can row your whole life,
            there will always be something to work on. But there is the feeling
            of gliding over the water, being in synchronistation with your team,
            calmly breathing, being alive -<br />
            <Highlight>this is perfection</Highlight>.
          </p>
          <StyledImg
            fluid={data.tealRow.childImageSharp.fluid}
            alt="A rowing double in smooth light on flat water (c) Julius Hirtzberger"
          />
        </Section>
        <Section data-sal="fade" data-sal-delay="600" data-sal-easing="ease">
          <StyledImg
            fluid={data.mountainRow.childImageSharp.fluid}
            alt="A rowing double on flat water, athletes are pushing hard (c) Julius Hirtzberger"
          />
          <p>
            <Highlight>Racing at Olympic Games</Highlight> needs perfection. You
            have to put in the work over years and stay in the moment when it
            comes to racing. As an Olympian I know what it takes and am ready to
            put in the effort.
            <br />
            <br />
          </p>
        </Section>
        <Section data-sal="fade" data-sal-delay="600" data-sal-easing="ease">
          <h2>Greates Achievments</h2>
          <ListStyles>
            <li>12th Place Olympic Games - Rio 2016</li>
            <li>U-23 World Champion - Trakai 2012</li>
            <li>Gold at the Universiade - Kazan 2013</li>
          </ListStyles>
        </Section>
      </TextStyles>
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
