import React from 'react';
import styled, { keyframes } from 'styled-components';

import SEO from '../components/seo';
import Text from '../components/styles/text';
import StyledLink from '../components/styles/styledLink';
import Image from '../components/image';

const Heading = styled.h2`
  font-size: 3rem;
  padding: 0 1rem;
`;

const lineThrough = keyframes`
  0% {
    width: 0;
  }
  
  20% {
    width: 0;
  }

  80% {
    width: 100%;
  }

  100% {
    width: 100%;
  }
`;

const ActionCall = styled.p`
  font-size: 3rem;
  text-align: center;
  letter-spacing: 1px;
  text-shadow: 0px 1.5px 5px rgba(0, 0, 0, 0.2), 1px 2px 5px rgba(0, 0, 0, 0.3),
    -1px 2px 5px rgba(0, 0, 0, 0.3);

  span {
    position: relative;
    display: inline-block;
    transform: all 0.5 cubic-bezier;
    height: fit-content;
  }
  span::before {
    position: absolute;
    top: calc(50% - 1.5px);
    content: ' ';
    height: 3px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.link_text};
    animation-name: ${lineThrough};
    animation-duration: 1.5s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }
`;

const IndexPage = () => {
  return (
    <>
      <SEO
        title="Home"
        keywords={[
          `paul sieber`,
          `paul`,
          `sieber`,
          `rudern`,
          `rowing`,
          `olympia`,
          `webdevelopment`,
        ]}
      />
      <Heading>
        Paul Sieber <br />
        <StyledLink to="/rowing">Olympic rower</StyledLink> &{' '}
        <StyledLink to="/web">webdeveloper</StyledLink>
      </Heading>
      <Image />
      <Text>
        <p>
          My goal is to create extra ordinary experiences - in rowing and on the
          web.
        </p>
        <p>
          I love to work in teams, improve every day, optimize every detail and
          perform at the top level. Always aiming for perfection.
        </p>
        <ActionCall>
          Let's make the
          <br /> <span>IM</span>POSSIBLE
        </ActionCall>
      </Text>
    </>
  );
};

export default IndexPage;
