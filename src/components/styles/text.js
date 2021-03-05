import styled from 'styled-components';

const Text = styled.section`
  padding: 0 1rem;
  font-weight: 400;
  font-size: 1.4rem;
  color: ${props => props.theme.text};
  @media (min-width: 699px) {
    font-size: 2rem;
  }
`;

export default Text;
