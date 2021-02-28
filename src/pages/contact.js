import React from 'react';
import axios from 'axios';

import SEO from '../components/seo';

axios.defaults.baseURL = '/';

const Contact = () => {
  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [buttonText, setButtonText] = React.useState('Send!');

  const handleChange = event => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const sendMail = async event => {
    event.preventDefault();
    console.log(inputs);
    setButtonText('Sending...');
    console.log(axios.defaults);
    const response = await axios.post(
      '/.netlify/functions/send-contact-email',
      {
        contactName: inputs.name,
        contactEmail: inputs.email,
        message: inputs.message,
      }
    );
    setInputs({
      name: '',
      email: '',
      message: '',
    });
    setButtonText('Send!');
    console.log(response);
  };

  return (
    <>
      <SEO
        title="Contact"
        keywords={[`rowing`, `olympics`, `sieber`, `paul`]}
      />
      <h1>CONTACT</h1>
      <form action="">
        <input type="email" id="email" name="email" onChange={handleChange} />
        <input type="text" id="name" name="name" onChange={handleChange} />
        <textarea id="message" name="message" onChange={handleChange} />
        <button type="submit" onClick={sendMail}>
          {buttonText}
        </button>
      </form>
    </>
  );
};

export default Contact;
