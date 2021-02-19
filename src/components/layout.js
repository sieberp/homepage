import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Header from './header';
import Footer from './footer';
import theme from './styles/theme';
import Transtion from './transition';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }
  body {
    margin: 0;
    font-family: ${props => props.theme.fontStack};
    color: ${props => props.theme.black};
    background: ${props => props.theme.white};
  }
`;

const MainContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 0px 1.45rem;
  padding-top: 0;
  margin-bottom: 4.8rem;
`;

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Header />
          <Transtion location={location}>
            <MainContent>{children}</MainContent>
          </Transtion>
          <Footer />
        </>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
