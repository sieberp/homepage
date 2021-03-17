import styled from 'styled-components';

const Text = styled.section`
  padding: 0 1rem;
  font-weight: 400;
  font-size: ${props => (props.height === 'big' ? '2.5rem' : '1.6rem')};
  color: ${props => props.theme.text};
  @media (min-width: 699px) {
    font-size: ${props => (props.height === 'big' ? '2.5rem' : '2rem')};
  }
`;

export default Text;
