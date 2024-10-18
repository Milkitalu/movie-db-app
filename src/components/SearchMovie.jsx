

import { useState } from "react";
import { searchMovies } from '../movieapi/movieFetching';
import MovieCard from './MovieCard';
import { useAppContext } from "../context/AppContext";

function SearchMovie() {
    const { addFavorite } = useAppContext();
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const data = await searchMovies(query);
        setMovies(data.results);
    };

    return (
        <div>
            <h1> Search Movies </h1>
            <form onSubmit={handleSearch} className=''>
                <input type="text"
                       value={query}
                       onChange={(e) => setQuery(e.target.value)}
                       className=""
                       placeholder="Search for Movie" 
                       />
                <button type="name"
                        className="">
                    Search
                </button>
            </form>

            <div className="">
                {movies.length > 0 ? (
                    movies.map(() => <MovieCard key={movie.id} movie={movie} addFavorite={addFavorite} />)
                ) : (
                    <p>No Results Found.</p>
                )}
            </div>
        </div>
    );
}

export default SearchMovie;