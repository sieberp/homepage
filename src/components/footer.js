import React from 'react';
import styled from 'styled-components';

import Bundesheer from '../../assets/bundesheer.svg';
import Wave from '../../assets/wave3.svg';

const WaveSvg = styled(Wave)`
  display: block;
  z-index: -1;
  fill: ${({ theme }) => theme.link_text};
`;

const Container = styled.footer`
  background-color: ${({ theme }) => theme.link_text};
  color: ${props => props.theme.body};
  padding: 10px;
  font-size: 1.5rem;
`;

const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
`;

// const NavLink = styled(Link)`
//   color: inherit;
//   text-decoration: none;
//   font-size: 1rem;
//   text-align: right;
// `;

const Support = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: max-content auto;
`;

const BhLogo = styled(Bundesheer)`
  width: 48px;
  height: 48px;
`;

const Footer = () => (
  <>
    <WaveSvg />
    <Container>
      <Inner>
        <Support>
          Supported by{' '}
          <a
            href="http://www.bundesheer.at/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BhLogo />
          </a>
        </Support>
        {/* <NavLink to="/impressum">Impressum</NavLink> */}
      </Inner>
    </Container>
  </>
);

export default Footer;
