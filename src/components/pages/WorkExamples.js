import React from 'react';
import Project from './Project';
import './WorkExamples.css';

export default function WorkExamples() {
  return (
    <div>
      <h2>Work Examples</h2>
      <div className='container work-container'>
        <Project /><Project /></div>
        <div className='container work-container'>
        <Project /><Project /></div>
        <div className='container work-container'>
        <Project /><Project /></div>
    </div>
  );
}