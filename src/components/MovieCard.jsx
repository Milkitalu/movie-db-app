

import { Link } from 'react-router-dom';

function MovieCard({ movie, addFavorite }) {

    return (
        <Link to={`/movie/${movie.id}`}>
            <div className='bg-white shadow-md rounded-lg overflow-hidden '>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-full h-64 object-cover" />
                <div className="p-4">
                    <h2 className="text-gray-500 font-semibold">{movie.title}</h2>
                    <p className="text-gray-500">{movie.release_date}</p>
                    <button onClick={(e) => {
                        e.stopPropagation(); // prevent triggering the link
                        addFavorite(movie);
                    }}
                        className="bg-blie-500 text-white px-2 py-1 rounded"
                    >
                        Add to Favorite
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;

