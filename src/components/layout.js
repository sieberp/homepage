import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Header from './header';
import Footer from './footer';
import theme, { light_theme, dark_theme } from './styles/theme';
import Transtion from './transition';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }
  body {
    margin: 0;
    font-family: 'Varela Round', sans-serif;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
  }
`;

const MainContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 0px;
  padding-top: 0;
`;

const Layout = ({ children, location }) => {
  const [theme, setTheme] = React.useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
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
        <ThemeProvider theme={theme === 'light' ? light_theme : dark_theme}>
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
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
