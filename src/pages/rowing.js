import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const RowingPage = () => (
  <Layout>
    <SEO title="Rowing" keywords={[`gatsby`, `application`, `react`]} />
    <h1>This is the rowing page</h1>
  </Layout>
);

export default RowingPage;
