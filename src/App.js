import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Categories from './components/Categories.js';
import CurrentCategory from './components/currentCategory.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Products from './components/Products.js';

export default props => {
  return (
<>
    <Header/>
    <Categories/>
    <CurrentCategory/>
    <Products/>
    <Footer/>
</>
  );
};

