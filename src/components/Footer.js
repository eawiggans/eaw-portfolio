import React from 'react';
import './Footer.css'


export default function Footer() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="footer">
      <h3>Find Me Elsewhere</h3>
      <ul className="parent">
        <li><a href="https://github.com/eawiggans">Github Profile</a></li>
        <li>Linked In Profile</li>
      </ul>
    </div>
  );
}