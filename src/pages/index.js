import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Hello from '../../assets/hello.svg';

const HelloSvg = styled(Hello)`
  /* transform: rotate(180deg); */
  width: 64px;
  height: 52px;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>This is the index page</h1>
    <HelloSvg />
  </Layout>
);

export default IndexPage;
