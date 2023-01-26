import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import WorkExamples from './pages/WorkExamples';
import Contact from './pages/Contact';
import Footer from './Footer'
import Resume from './pages/Resume'

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