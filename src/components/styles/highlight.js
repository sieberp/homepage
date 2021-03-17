import styled from 'styled-components';

const Highlight = styled.span`
  font-weight: bolder;
  color: ${props => props.theme.link_text};
`;

export default Highlight;
