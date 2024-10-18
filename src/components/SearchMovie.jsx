

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
        <div className="p-4">
            <h1 className="text-2xl mb-4"> Search Movies </h1>
            <form onSubmit={handleSearch} className="mb-4">
                <input type="text"
                       value={query}
                       onChange={(e) => setQuery(e.target.value)}
                       className="boarder boarder-gray-300 p-2 rounded "
                       placeholder="Search for Movie..." 
                       />
                <button type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
                    Search
                </button>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {movies.length > 0 ? (
                    movies.map((movie) => <MovieCard key={movie.id} movie={movie} addFavorite={addFavorite} />)
                ) : (
                    <p>No Results Found.</p>
                )}
            </div>
        </div>
    );
}

export default SearchMovie;