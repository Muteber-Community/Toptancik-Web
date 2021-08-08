import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import AboutPage from './AboutPage';
import Footer from '../Footer';
import { AboutWrapper, AboutContainer } from './AboutWrapper';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <AboutContainer>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <AboutWrapper>
          <AboutPage />
        </AboutWrapper>
      </AboutContainer>
      <Footer />
    </div>
  );
};

export default Hero;
