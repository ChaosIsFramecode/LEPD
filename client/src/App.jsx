import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Quote from './components/Quote/Quote';
import Footer from './components/Footer/Footer';

import background from "./assets/background.jpg";

function App() {

  return (
    <div className="app" style={{backgroundImage: `url(${background})`}}>
      <Header/>
      <Quote/>
      <Footer/>
    </div>
  );
}

export default App
