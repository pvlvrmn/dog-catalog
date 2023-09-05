import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Basic/Header';
import DogSearch from './Components/DogSearch';
import About from './About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        { /* Page routing */ }
        <Routes>
          <Route path="/dogApp/" element={<DogSearch />} />
          <Route path="/dogApp/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
