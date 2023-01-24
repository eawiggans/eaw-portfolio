import React from 'react';

export default function Header() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="container">
      <h1>Emma Wiggans</h1>
      <p>This is my portfolio</p>
    </div>
  );
}