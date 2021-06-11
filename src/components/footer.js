import { Link } from 'gatsby';
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
  & div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    max-width: 960px;
    margin: 0 auto;
  }
  & div div {
    display: grid;
    align-items: center;
    grid-template-columns: max-content auto;
  }
`;

const NavLink = styled(Link)`
  color: #fdfdfd;
  text-decoration: none;
  font-size: 2rem;
  text-align: right;
  margin-bottom: 2rem;
`;

const BhLogo = styled(Bundesheer)`
  width: 48px;
  height: 48px;
`;

const Footer = () => (
  <>
    <WaveSvg />
    <Container>
      <div>
        <div />
        <NavLink to="/about">About this site</NavLink>
      </div>
    </Container>
  </>
);

export default Footer;
