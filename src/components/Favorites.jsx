

import {useEffect} from 'react';
import MovieCard from './MovieCard';
import { useAppContext } from '../context/AppContext';

function Favorites() {
    const { favorites, removeFavorite } = useAppContext();


    return (
        <div>
            <h1>Favorit Movies </h1>
            <div>
                {Favorites.length > 0 ? (
                    favorites.map((movie) => (
                        <div key={movie.id}>
                            <MovieCard movie={movie} />
                            <button onClick={() => removeFavorite(movie.id)} className=''>
                                Remove
                                </button>
                        </div>
                    ))
                ) : (
                    <p>No Favorite Movies Found.</p>
                )}
            </div>
        </div>
    );
}

export default Favorites;