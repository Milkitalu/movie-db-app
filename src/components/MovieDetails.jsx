
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import {fetchMovieDetails} from '../movieapi/movieFetching';
import {useAppContext} from '../context/AppContext';


function MovieDetails() {
    const {id} = useParams();
    const{favorites, addFavorite, removeFavorite} = useAppContext();
    const [movie, setMovie] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
            const getMovieDetail = async () => {
            const data = await fetchMovieDetails(id);
            setMovie(data);
            setIsFavorite(favorites.seome((fav) => fav.id === data.id));
        };

        getMovieDetail();
    }, [id, favorites]);

    const toggleFavorite = () => {
        if(isFavorite){
            removeFavorite(movie.id);
        } else {
            addFavorite(movie);
        }

        setIsFavorite(!isFavorite)
    };

    if(!movie) return <div>Loading....</div>


    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="mb-4"/>
            <p>{movie.overview}</p>
            <button onClick={toggleFavorite} className={`mt-4 ${isFavorite ? 'bg-red-500' : 'bg-green-500'} text-white px-4 py-2 rounded`}>
                {isFavorite ? 'Remove from Favorites ' : 'Add To Favorites'}
            </button>
        </div>
    );
}

export default MovieDetails;

