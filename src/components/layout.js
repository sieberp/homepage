import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import '@fontsource/varela-round';

import Header from './header';
import Footer from './footer';
import { light_theme, dark_theme } from './styles/theme';
import Transtion from './transition';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
	  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 10px;
    line-height: 1.5;
  }
  *, *:before, *:after { box-sizing: inherit; margin: 0; padding: 0; border: none}
  body {
    margin: 0;
    font-family: 'Varela Round', 'Times new Roman', sans-serif;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
    scroll-behavior: smooth;
    transition: background 0.3s;
    transition: all 0.7s;
  }
`;

const MainContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 0px;
  padding-top: 0;
`;

const ThemeSwitch = styled.button`
  position: fixed;
  right: 2rem;
  bottom: 6rem;
  font-size: 1.6rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  box-shadow: 1px 2px 7px 2px rgb(0 0 0 / 30%);
  z-index: 10;
  transition: all 0.2 ease-in-out;
  cursor: pointer;
  :hover {
    box-shadow: none;
  }
`;

const Layout = ({ children, location }) => {
  // const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  // const savedTheme = localStorage.getItem('theme-color-mode');
  const [theme, setTheme] = React.useState('light');
  console.log(theme);
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  React.useEffect(() => {
    const theme = localStorage.getItem('theme-color-mode');
    if (theme) setTheme(theme);
  }, []);

  React.useEffect(() => {
    localStorage.setItem('theme-color-mode', theme);
  }, [theme]);

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
            <ThemeSwitch onClick={themeToggler}>
              Switch to {theme === 'light' ? 'dark' : 'light'} theme
            </ThemeSwitch>
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
