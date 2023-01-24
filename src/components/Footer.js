import React from 'react';

export default function Footer() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="footer">
      <h3>Find out more:</h3>
      <ul className="parent">
        <li>Github Profile</li>
        <li>Linked In Profile</li>
      </ul>
    </div>
  );
}