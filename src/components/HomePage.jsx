

import { useEffect, useState } from "react";
import { fetchMovies } from '../movieapi/movieFetching';
import { useAppContext } from '../context/AppContext';
import MovieCard from './MovieCard';

const categories = ['popular', 'top_rated', 'now_playing' ];

function HomePage() {
    const { favorites, addFavorite } = useAppContext();
    const [ movies, setMovies] = useState([]);
    const [category, setCategory] = useState('popular');
    const [page, setPage] = useState(1);
    const [totalpages, setTotalPages] = useState(0);

    useEffect(() => {
        const getMovies = async () => {
            const data = await fetchMovies(category, page);
            setMovies(data.results);
            setTotalPages(data.total_pages);
        };

        getMovies();
    }, [category, page]);

return (
    <div>
        <h1>Movies</h1>
        <div>
            {categories.map((cat) => (
                <button 
                     key={cat}
                     onClick={() => {setCategory(cat); setPage(1);}}
                     className=""
                >
                    {cat.replace('_', '')}
                </button>
            ))}
        </div>

        <div>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} addFavorite={addFavorite} />
            ))}
        </div>

        <div>
            <button 
                onClick={()=>setPage((prev) => Math.max(prev-1, 1))}
                disabled={page === totalpages}
                className=""
            >
             Previous    
            </button>
            <button 
                onClick={()=>setPage((prev) => Math.min(prev+1, totalpages))}
                disabled={page === totalpages}
                className=""
            >
             Next    
            </button>
        </div>
    </div>
);

};

export default HomePage ;
