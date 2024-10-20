import MovieCard from './MovieCard';
import { useAppContext } from '../context/AppContext';

function Favorites() {
    const { favorites, removeFavorite } = useAppContext();


    return (
        <div className="p-4">
            <h1 className="mb-4 text-2xl ">Favorit Movies </h1>
            <div className="grid grid-col-1 md:grid-cols-3 gap-4">
                {favorites.length > 0 ? (
                    favorites.map((movie) => (
                        <div key={movie.id}>
                            <MovieCard movie={movie} />
                            <button onClick={() => removeFavorite(movie.id)} className="text-white py-1 px-2 rounded mt-2 bg-red-500 ">
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