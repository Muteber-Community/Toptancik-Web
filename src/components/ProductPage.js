import React from 'react';
import Products from './Products';
import Footer from './Footer';
import HeroProduct from './HeroProduct';
import { GlobalStyle } from '../globalStyles';
import { useState, useEffect } from 'react';
import db from './firebase.config';

let post = [];

function ProductPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = db.collection('posts');
    const data = await response.get();
    if (post.length === 0) {
      data.docs.forEach((item) => {
        post.push(item.data());
      });
    }
    setPosts(post);
  };

  return (
    <>
      <GlobalStyle />
      <HeroProduct />
      <Products heading='Ürünlerimiz' data={posts} />
      <Footer />
    </>
  );
}

export default ProductPage;
