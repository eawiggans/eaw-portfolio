import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [email, setEmail] = useState('');
  const [conText, setConText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'conText') {
      setConText(inputValue);
  }}

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !conText) {
      setErrorMessage('Must have a valid email and text content in the message');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.

    setConText('');
    setEmail('');
  };

  return (
    <div>
      <h3>Contact me through this form:</h3>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={conText}
          name="conText"
          onChange={handleInputChange}
          type="text"
          placeholder="Your message here"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
} 

export default Contact;