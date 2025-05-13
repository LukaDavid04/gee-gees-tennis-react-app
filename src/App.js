import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Carousel />
      <Content />
      <Footer />
    </div>
  );
}

export default App;