import React from 'react';
import Project from './Project';
import './WorkExamples.css';

export default function WorkExamples() {
  return (
    <div className='d-flex container m-3'>
      <div className='left-div container flex-row mt-3 col-3'>
        <h2>Work Examples</h2>
      </div>
      <div className='portfolio-cards d-flex flex-column mt-3 col-9'>
        
          <div className='container work-container'>
            <Project /><Project />
          </div>
        
          <div className='container work-container'>
            <Project /><Project />
          </div>
      </div>
    </div>
  );
}