import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PageTransition from 'gatsby-plugin-page-transitions';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hello from '../../assets/hello.svg';

const Text = styled.section`
  font-size: 1.4rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const Highlight = styled.span`
  color: ${props => props.theme.main_color};
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.main_color};
  text-decoration: none;
  cursor: pointer;
  :hover {
    color: ${props => props.theme.main_color_dark};
  }
`;

const HelloSvg = styled(Hello)`
  transform: rotateY(180deg);
  width: 64px;
  height: 52px;
  margin: 0 auto;
  @media (min-width: 699px) {
    width: 100px;
    height: 82px;
  }
`;

const Triangle = styled.div`
  position: absolute;
  bottom: 100px;
  width: 300px;
  height: 300px;
  background: ${props => props.theme.main_color};
  opacity: 0.3;
  clip-path: polygon(50% 0%, 0% 100%, 100% 50%);
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageTransition>
      <Grid>
        <Text>
          <p>
            Hello my name is Paul Sieber. I’m an{' '}
            <Highlight>olympic rower</Highlight> and{' '}
            <Highlight>webdeveloper.</Highlight>
          </p>

          <p>
            On the water I celebrated U-23-Worldchamp title and a 12th place at
            the Olympic Games in Rio. You can find out more about me as a rower
            on this <StyledLink to="/rowing">page</StyledLink>.
          </p>

          <p>
            Off the water I like to create good looking usable websites and
            apps. If you want to know more about the technologies I’m working
            with or how this site was build head over to this{' '}
            <StyledLink to="/web">page</StyledLink>.
          </p>

          <p>
            If you have any questions or just want to say hi, send me an email.
          </p>
        </Text>
        <HelloSvg />
      </Grid>
      <Triangle />
    </PageTransition>
  </Layout>
);

export default IndexPage;
