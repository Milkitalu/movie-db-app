import React from 'react';
import HomePage from './components/HomePage';
import SearchMovie  from './components/SearchMovie';
import MovieDetails from './components/MovieDetails';
import Favorites from './components/Favorites'
import ThemeToggle from './components/ThemeToggle';
import { useAppContext  } from './context/AppContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  const {theme}  = useAppContext();

  return (
    <Router>
      <div className={theme === 'dark' ? 'bg-gray-900 text-white': 'bg-white text-black'}>
        <ThemeToggle />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
          <Route path='/search' element={<SearchMovie />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;