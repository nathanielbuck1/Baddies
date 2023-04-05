import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Podcasts from './Podcasts';
import Mains from './main';
import MovieList from './Movie/movieList';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Podcasts</Link>
          </li>
          <li>
            <Link to="/about">Movies</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Mains />} />
          <Route path="/about" element={<MovieList />} />
          <Route path="/contact" element={<Podcasts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
