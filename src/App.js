import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieGallery from './components/MovieGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <MovieGallery />
      <Footer />
    </div>
  );
}

export default App;
