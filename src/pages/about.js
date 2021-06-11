import React from 'react';
import styled from 'styled-components';

import TextStyles from '../components/styles/text';

const LinkStyles = styled.a`
  color: ${props => props.theme.link_text};
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: color 0.2s cubic-bezier(0.86, 0, 0.07, 1);
  :hover {
    color: ${props => props.theme.body};
  }
  :before {
    content: '';
    display: block;
    height: 0;
    background-color: ${({ theme }) => theme.link_text};
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    border-radius: 2px;
    transition: height 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }
  :hover:before {
    height: 100%;
  }
`;

export default function AboutPage() {
  return (
    <TextStyles>
      This page is my personal playground to test out all kind of new
      technolgies or things I want to learn. <br />
      Currently it is build using GatsbyJS. The projects are stored in there own
      folders and description of them is written in markdown. <br />
      The site is constantly under construction and I hope you like the way it
      looks and works right now. <br />
      You can check out the code to the website on{' '}
      <LinkStyles href="https://github.com/holypoli/homepage" target="_blank">
        Github
      </LinkStyles>
    </TextStyles>
  );
}
