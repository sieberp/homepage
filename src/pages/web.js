import React from 'react';
import styled from 'styled-components';
import PageTransition from 'gatsby-plugin-page-transitions';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Developer from '../../assets/developer.svg';
import Text from '../components/styles/text';
import Grid from '../components/styles/grid';

const DeveloperStyle = styled(Developer)`
  width: 96px;
  height: 52px;
  float: right;
  margin-right: 30px;
  @media (min-width: 699px) {
    width: 152px;
    height: 82px;
  }
`;

const Triangle = styled.div`
  position: absolute;
  top: 100px;
  width: 300px;
  height: 300px;
  background: ${props => props.theme.main_color};
  opacity: 0.3;
  clip-path: polygon(65% 100%, 13% 0, 100% 35%);
`;

const WebPage = () => (
  <Layout>
    <SEO title="Web" keywords={[`gatsby`, `application`, `react`]} />
    <PageTransition>
      <Text>
        <Grid>
          <p>
            This page was build with GatsbyJS. It is a static site generator
            that produces blazing fast web sites.
          </p>
          <DeveloperStyle />
          <Triangle />
        </Grid>
      </Text>
    </PageTransition>
  </Layout>
);

export default WebPage;
