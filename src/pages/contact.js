import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import SEO from '../components/seo';
import Text from '../components/styles/text';

const StyledInput = styled.input`
  padding: 1rem;
  width: 100%;
  font-size: 1.6rem;
  margin: 0.5rem 0 1.5rem;
  border-radius: 5px;
  border: 1px solid #333333;
  box-shadow: 1px 2px 7px 2px rgba(0, 0, 0, 0.3);
  outline: none;
  :focus {
    border-color: ${props => props.theme.link_text};
    box-shadow: 0 0 5px 2px ${({ theme }) => theme.link_text};
  }
`;

const StyledTextarea = styled.textarea`
  font-family: ${props => props.theme.fontStack};
  padding: 1rem;
  margin: 0.5rem 0 1.5rem;
  border-radius: 5px;
  border: 1px solid #333333;
  box-shadow: 1px 2px 7px 2px rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 70%;
  outline: none;
  :focus {
    border-color: ${props => props.theme.link_text};
    box-shadow: 0 0 5px 2px ${({ theme }) => theme.link_text};
  }
  @media screen and (max-width: 500px) {
    height: 70px;
    width: 100%;
  }
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-areas:
    'mail mes'
    'name mes'
    'x but';
  @media screen and (max-width: 500px) {
    grid-template-areas:
      'mail'
      'name'
      'mes'
      'but';
  }
`;

const StyledLabel = styled.label`
  width: 75%;
  &.name {
    grid-area: name;
  }
  &.email {
    grid-area: mail;
  }
  &.message {
    grid-area: mes;
  }
  /* @media screen and (max-width: 500px) {
    width: 100%;
  } */
`;

const StyledButton = styled.button`
  grid-area: but;
  width: 50%;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #333;
  font-size: 2rem;
  box-shadow: 1px 2px 7px 2px rgba(0, 0, 0, 0.3);
  background-color: #fdfdfd;
  color: #333333;
  outline: none;
  :hover,
  :focus {
    box-shadow: 0 0 5px 2px ${({ theme }) => theme.link_text};
  }
`;

const Wrapper = styled.main`
  padding: 0 1rem;
`;

const Contact = () => {
  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [buttonText, setButtonText] = React.useState('Send!');
  const [status, setStatus] = React.useState('idle');

  const handleChange = event => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const sendMail = async event => {
    event.preventDefault();
    setButtonText('Sending...');
    setStatus('sending');
    await axios
      .post('/.netlify/functions/send-contact-email', {
        contactName: inputs.name,
        contactEmail: inputs.email,
        message: inputs.message,
      })
      .then(response => {
        setStatus('sent');
        setInputs({
          name: '',
          email: '',
          message: '',
        });
        setButtonText('Send!');
      })
      .catch(error => {
        setStatus('error');
        setButtonText('Send');
      });
  };

  return (
    <>
      <SEO
        title="Contact"
        keywords={[`rowing`, `olympics`, `sieber`, `paul`]}
      />
      <Wrapper>
        <h1>CONTACT</h1>
        <Text>
          <StyledForm>
            <fieldset aria-disabled={status === 'sending' ? true : false}>
              <StyledLabel htmlFor="email" className="email">
                Your E-mail: <br />
                <StyledInput
                  type="email"
                  id="email"
                  name="email"
                  type="email"
                  value={inputs.email}
                  onChange={handleChange}
                />
              </StyledLabel>
              <StyledLabel htmlFor="name" className="name">
                Your Name: <br />
                <StyledInput
                  type="text"
                  id="name"
                  name="name"
                  type="name"
                  value={inputs.name}
                  onChange={handleChange}
                />
              </StyledLabel>
              <StyledLabel htmlFor="message" className="message">
                Your message: <br />
                <StyledTextarea
                  id="message"
                  name="message"
                  value={inputs.message}
                  onChange={handleChange}
                />
              </StyledLabel>
              <StyledButton type="submit" onClick={sendMail}>
                {buttonText}
              </StyledButton>
            </fieldset>
          </StyledForm>
          {status === 'error'
            ? 'There was an error. Please try again later.'
            : status === 'sent'
            ? 'Thank you for your message. We will be in contact with you shortly.'
            : ''}
        </Text>
      </Wrapper>
    </>
  );
};

export default Contact;
