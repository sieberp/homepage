import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const WebPage = () => (
  <Layout>
    <SEO title="Web" keywords={[`gatsby`, `application`, `react`]} />
    <h1>This is the web page</h1>
  </Layout>
);

export default WebPage;
