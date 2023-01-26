import React from 'react';
import './Navigation.css'
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange }) {
  return (
    <div className='header'> <div>
        <h1>Emma Wiggans Web Portfolio</h1>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#workExamples"
          onClick={() => handlePageChange('WorkExamples')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'WorkExamples' ? 'nav-link active' : 'nav-link'}
        >
          Examples of Work
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
    </div>

    </div>
  );
}

export default Navigation;