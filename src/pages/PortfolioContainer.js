import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import About from '../components/About';
import WorkExamples from '../components/WorkExamples';
import Contact from '../components/Contact';
import Footer from '../components/Footer'
import Resume from '../components/Resume'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'WorkExamples') {
      return <WorkExamples />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}