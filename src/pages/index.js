import React from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';
import Hello from '../../assets/hello.svg';
import Wave from '../../assets/wave1.svg';
import Text from '../components/styles/text';
import Highlight from '../components/styles/highlight';
import StyledLink from '../components/styles/styledLink';
import Image from '../components/image';

const HelloSvg = styled(Hello)`
  transform: rotateY(180deg);
  width: 64px;
  height: 52px;
  float: right;
  margin-right: 30px;
  @media (min-width: 699px) {
    width: 100px;
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

const Heading = styled.h2`
  font-size: 2.5rem;
  padding: 0 1rem;
`;

const IndexPage = () => {
  return (
    <>
      <SEO
        title="Home"
        keywords={[`rowing`, `webdevelopment`, `paul sieber`]}
      />
      <Heading>
        Paul Sieber. <br />
        <StyledLink to="/rowing">Olympic rower</StyledLink> and{' '}
        <StyledLink to="/web">webdeveloper</StyledLink>.
      </Heading>
      <Image />
      <Text>
        <p>
          On the water I celebrated U-23-Worldchamp title and a 12th place at
          the Olympic Games in Rio. You can find out more about me as a rower on
          this <StyledLink to="/rowing">page</StyledLink>.
        </p>

        <p>
          Off the water I like to create good looking usable websites and apps.
          If you want to know more about the technologies I’m working with or
          how this site was build head over to this{' '}
          <StyledLink to="/web">page</StyledLink>.
        </p>
        <p>
          If you have any questions or just want to say hi, send me an email.
        </p>
      </Text>
      <WaveSvg />
    </>
  );
};

export default IndexPage;
