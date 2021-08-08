import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

import { FeatureContainer } from './FeatureElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FeatureContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </FeatureContainer>
  );
};

export default Hero;
