import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
} from './HeroElements';

import './hero.css';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1 className='slogan'>Özel Tasarım EL İŞÇİLİĞİ</HeroH1>
          <HeroP> KİŞİYE ÖZEL ÜRÜNLER </HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
