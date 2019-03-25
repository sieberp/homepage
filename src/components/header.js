import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Logo from '../../assets/logo.svg';

const Container = styled.div`
  margin-bottom: 10px;
`;
const Inner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
`;

const NavLink = styled(Link)`
  text-align: right;
  text-decoration: none;
  color: ${props => props.theme.black};
  font-size: 1.8rem;
  font-weight: bolder;
`;

const Header = ({ siteTitle }) => (
  <Container>
    <Inner>
      <Link to="/">
        <Logo />
      </Link>
      <NavLink to="/web">Web</NavLink>
      <NavLink to="/rowing">Rowing</NavLink>
    </Inner>
  </Container>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
