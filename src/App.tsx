import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Basic/Header';
import DogPage from './Components/DogPage/DogPage';
import About from './Components/About/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        { /* Page routing */ }
        <Routes>
          <Route path="/dog-app/" element={<DogPage />} />
          <Route path="/dog-app/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
