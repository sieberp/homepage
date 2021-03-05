import { StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';

const Sec1 = styled.div`
  height: 100vh;
  background-color: pink;
  position: relative;
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  &.active {
    opacity: 1;
  }
`;
const Sec2 = styled.div`
  width: 50%;
  height: 100vh;
  background-color: greenyellow;
  position: relative;
  left: 50%;
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  &.active {
    opacity: 1;
  }
`;
const Sec3 = styled.div`
  width: 50%;
  height: 100vh;
  background-color: pink;
  position: relative;
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  &.active {
    opacity: 1;
  }
`;

const WebPage = () => {
  window.addEventListener('scroll', debounce(checkSection));

  const sections = document.querySelectorAll('.section');

  function checkSection() {
    sections.forEach(section => {
      console.log(section.clientHeight);
      // half way through the image
      const slideInAt =
        window.scrollY + window.innerHeight - section.clientHeight / 2;
      // bottom of the image
      const imageBottom = section.offsetTop + section.clientHeight;
      console.log(`imageBottom: ${imageBottom}`);
      const isHalfShown = slideInAt > section.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom - 300;
      if (isHalfShown && isNotScrolledPast) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }

  function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  return (
    <StaticQuery
      query={graphql`
        query ImageQuerz {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <SEO
            title="Web"
            keywords={[`webdev`, `application`, `react`, `webdevelopment`]}
          />
          <Sec1 className="section">
            <img src="images/row_mountains.jpg" />
          </Sec1>
          <Sec2 className="section" />
          <Sec3 className="section" />
        </>
      )}
    />
  );
};

export default WebPage;
