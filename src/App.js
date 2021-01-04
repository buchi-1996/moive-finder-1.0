import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import './App.css';
import MovieGallery from './components/MovieGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MovieGallery />
      <Footer />
    </div>
  );
}

export default App;
