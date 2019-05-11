import React from 'react';
import styled from 'styled-components';
import PageTransition from 'gatsby-plugin-page-transitions';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Triangle = styled.div`
  position: absolute;
  top: 200px;
  right: 0;
  width: 300px;
  height: 300px;
  background: ${props => props.theme.main_color};
  opacity: 0.3;
  clip-path: polygon(96% 100%, 0 43%, 85% 0);
`;

const RowingPage = () => (
  <Layout>
    <SEO title="Rowing" keywords={[`gatsby`, `application`, `react`]} />
    <PageTransition>
      <h1>This is the rowing page</h1>
      <Triangle />
    </PageTransition>
  </Layout>
);

export default RowingPage;
