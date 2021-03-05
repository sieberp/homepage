import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(Link)`
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

export default StyledLink;
