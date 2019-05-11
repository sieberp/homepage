import React from 'react';
import styled from 'styled-components';
import PageTransition from 'gatsby-plugin-page-transitions';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Developer from '../../assets/developer.svg';

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
  left: -20px;
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
      <h1>This is the web page</h1>
      <DeveloperStyle />
      <Triangle />
    </PageTransition>
  </Layout>
);

export default WebPage;
