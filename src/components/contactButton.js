import React from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';

const StyledButton = styled(Link)`
  margin: 10rem auto;
  padding: 1rem 2.5rem;
  font-family: 'Varela Round', sans-serif;
  font-weight: bolder;
  color: #3991ac;
  background-color: #efefef;
  border: 3px solid #c1dbe3;
  border-radius: 15px;
  cursor: pointer;
  :hover {
    color: #66b4cc;
    box-shadow: 1px 1px 2px 2px #c1dbe3;
    border-color: transparent;
  }
`;

const ContactButton = ({ click }) => {
  return <StyledButton to="/contact">Contact me!</StyledButton>;
};

export default ContactButton;
