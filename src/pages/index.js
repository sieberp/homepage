import React from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';
import Text from '../components/styles/text';
import StyledLink from '../components/styles/styledLink';
import Image from '../components/image';

const Heading = styled.h2`
  font-size: 2.5rem;
  padding: 0 1rem;
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
        Paul Sieber. <br />
        <StyledLink to="/rowing">Olympic rower</StyledLink> &{' '}
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
        <ul>
          <li>helping others fulfill there potential</li>
          <li>cathalysator</li>
          <li>
            making the <del>im</del>possible
          </li>
        </ul>
      </Text>
    </>
  );
};

export default IndexPage;
