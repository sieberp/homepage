import React from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ImpressumPage = () => (
  <Layout>
    <SEO title="Impressum" />
    <PageTransition>
      <h1>Impressum</h1>
      <p>This site belongs to Paul Sieber</p>
    </PageTransition>
  </Layout>
);

export default ImpressumPage;
