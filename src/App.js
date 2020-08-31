import React from 'react';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import './App.css';
import SearchMovie from './components/MovieGallery';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SearchMovie />
    </div>
  );
}

export default App;
