import styled from 'styled-components';

const TextStyles = styled.section`
  padding: 0 1rem;
  font-weight: 400;
  font-size: ${props => (props.height === 'big' ? '2.5rem' : '1.6rem')};
  color: ${props => props.theme.text};
  margin-bottom: 2rem;
  h1 {
    font-size: ${props => (props.height === 'big' ? '3.5rem' : '3rem')};
    font-weight: bold;
  }
  h2 {
    font-size: ${props => (props.height === 'big' ? '3rem' : '2.5rem')};
    font-weight: bold;
  }
  h3 {
    font-size: ${props => (props.height === 'big' ? '2.5rem' : '1.6rem')};
    font-weight: bold;
  }
  @media (min-width: 699px) {
    font-size: ${props => (props.height === 'big' ? '2.5rem' : '2rem')};
  }
`;

export default TextStyles;
