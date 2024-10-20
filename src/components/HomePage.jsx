
// used to fectch movies data and display it inside well organized
// MovieCard component

import { useEffect, useState } from "react";
import { fetchMovies } from '../movieapi/movieFetching';
import { useAppContext } from '../context/AppContext';
import MovieCard from './MovieCard';

function HomePage() {

    const { favorites, addFavorite } = useAppContext();  // used to pass favorite movie info and functionality
    const [movies, setMovies] = useState([]);
    const [category, setCategory] = useState('popular');
    const [page, setPage] = useState(1);                 //  used to capture state change related to page of movies
    const [totalpages, setTotalPages] = useState(0);     

    const categories = ['popular', 'top_rated', 'now_playing'];

    useEffect(() => {              // used to fetch movie info objects.
        const getMovies = async () => {
            const data = await fetchMovies(category, page);
            setMovies(data.results);
            setTotalPages(data.total_pages);
        };

        getMovies();
    }, [category, page]);

    return (
        <div className="p-4">
            <div className="flex mb-4 space-x-4">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => { setCategory(cat); setPage(1); }}
                        className={`bg-blue-500 text-white px-4 py-2 rounded ${category === cat ? 'font-bold' : ''} `}
                    >
                        {cat.replace('_', '')}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {movies.map((movie) => (                              // used to loop data of movies over defined MovieCard.
                    <MovieCard key={movie.id} movie={movie} addFavorite={addFavorite} favorites={favorites} />
                ))}
            </div>

            <div>
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === totalpages}
                    className="text-white px-4 py-2 rounded bg-gray-500 disabled:opacity-50"
                >
                    Previous
                </button>
                <button
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalpages))}
                    disabled={page === totalpages}
                    className="text-white px-4 py-2 rounded bg-gray-500 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );

};

export default HomePage;
