import React from 'react';
import { GlobalStyle } from '../globalStyles';
import Hero from './Hero';
import Products from './Products';
import Footer from './Footer';
import Feature from './Feature';
import { useState, useEffect } from 'react';
import db from './firebase.config';

let post = [];

const Landing = () => {
  const [highlights, setHighlights] = useState([]);
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = db.collection('highlights');
    const data = await response.get();
    if (post.length === 0) {
      data.docs.forEach((item) => {
        post.push(item.data());
      });
    }
    setHighlights(post);
  };

  return (
    <>
      <GlobalStyle />
      <Hero />
      <Products heading='Öne Çıkanlar' data={highlights} />
      <Feature data={highlights} />
      <Footer />
    </>
  );
};

export default Landing;
