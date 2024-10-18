

import { Link } from 'react-router-dom';

function MovieCard({ movie, addFavorite }) {

    return (
        <Link to={`/movie/${movie.id}`}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <div>
                    <h2>{movie.title}</h2>
                    <p>{movie.release_date}</p>
                    <button onClick={(e) => {
                        e.stopPropagation(); // prevent triggering the link
                        addFavorite(movie);
                    }}
                            className=''
                    >
                      Add to Favorite
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;

