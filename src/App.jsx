import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Favorites from './components/Favorites';
import MovieDetails from './components/MovieDetails';
import SearchMovie from './components/SearchMovie';
import Navbar from './components/NavBar';
import ThemeToggle from './components/ThemeToggle';
import { useAppContext } from './context/AppContext';

function App() {
  const { theme } = useAppContext();

  return (
    <Router>
      <div className={theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
        <div className='flex align-super justify-end justify-items-center p-6 gap-6 '>
        
            <Navbar />
        
          <ThemeToggle />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/search" element={<SearchMovie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;