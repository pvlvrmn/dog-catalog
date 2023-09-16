import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Components/Basic/Header';
import DogPage from './Components/DogPage/DogPage';
import About from './Components/About/About';
import './App.css';

function App() {
  return (
    <Router basename={import.meta.env.DEV ? '/' : '/dog-catalog/'}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DogPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
