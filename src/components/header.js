import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import LogoSVG from '../../assets/logo.svg';

const Container = styled.div`
  margin-bottom: 10px;
`;
const Inner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: grid;
  grid-template-columns: 2fr repeat(4, max-content);
  align-items: center;
`;

const NavLink = styled(Link)`
  text-align: right;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.8rem;
  font-weight: bolder;
  margin: 10px;
  display: inline-block;
  position: relative;
  :before {
    content: '';
    display: block;
    height: 0.5rem;
    width: 0;
    background-color: ${({ theme }) => theme.link_text};
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0.5rem;
    z-index: -1;
    border-radius: 2px;
    transition: width 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }
  :hover:before {
    width: 100%;
  }
  &.active:before {
    width: 100%;
  }
  @media (min-width: 699px) {
    font-size: 2.5rem;
  }
`;

const Logo = styled(LogoSVG)`
  width: 100px;
  height: 45px;
  fill: ${props => props.theme.text};
  stroke: ${props => props.theme.text};
  :hover {
    opacity: 0.7;
  }
  @media (min-width: 699px) {
    width: 150px;
    height: 68px;
  }
`;

const Header = () => {
  React.useEffect(() => {
    let path = window.location.pathname.match(/\w+/);
    if (!path || path[0] === '404') return;
    if (path[0] === 'projects' || path[0] === 'about') path = 'web';

    const activeLink = document.getElementById(path);
    activeLink.classList.add('active');
    return () => {
      activeLink.classList.remove('active');
    };
  });

  return (
    <Container>
      <Inner>
        <Link to="/">
          <Logo />
        </Link>
        <NavLink to="/rowing" id="rowing">
          Rowing
        </NavLink>
        <NavLink to="/web" id="web">
          Web
        </NavLink>
        <NavLink to="/contact" id="contact">
          Contact
        </NavLink>
      </Inner>
    </Container>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
