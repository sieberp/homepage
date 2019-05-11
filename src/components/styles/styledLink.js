import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: ${props => props.theme.main_color};
  text-decoration: none;
  cursor: pointer;
  :hover {
    color: ${props => props.theme.main_color_dark};
  }
`;

export default StyledLink;
