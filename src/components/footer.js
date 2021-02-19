import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Bundesheer from '../../assets/bundesheer.svg';

const Container = styled.footer`
  position: fixed;
  bottom: 0px;
  background-color: #C1DBE3;
  color: ${props => props.theme.black};
  width: calc(100vw - 20px);
  padding: 10px;
  height: 4.8rem;
  font-size: 1.5rem;
`;

const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.black};
  text-decoration: none;
  font-size: 1rem;
  text-align: right;
`;

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
  <Container>
    <Inner>
      <Support>
        Supported by{' '}
        <a href="http://www.bundesheer.at/" target="_blank" rel="noopener noreferrer">
          <BhLogo />
        </a>
      </Support>
      <NavLink to="/impressum">Impressum</NavLink>
    </Inner>
  </Container>
);

export default Footer;
