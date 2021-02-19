import React from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';
import Developer from '../../assets/developer.svg';
import Wave from '../../assets/wave3.svg';
import Text from '../components/styles/text';
import Grid from '../components/styles/grid';
import ContactButton from '../components/contactButton';

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

const WaveSvg = styled(Wave)`
  position: fixed;
  bottom: 6.8rem;
  left: 0;
  opacity: 0.3;
  width: 100vw;
  z-index: -1;
`;

const WebPage = () => (
  <>
    <SEO
      title="Web"
      keywords={[`webdev`, `application`, `react`, `webdevelopment`]}
    />
    <Text>
      <Grid>
        <p>This is the web dev page</p>
        <div style={{ textAlign: 'center' }}>
          <DeveloperStyle />
          <ContactButton />
        </div>
      </Grid>
    </Text>
    <WaveSvg />
  </>
);

export default WebPage;
