
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../movieapi/movieFetching';
import { useAppContext } from '../context/AppContext';


function MovieDetails() {
    const { id } = useParams();
    const { favorites, addFavorite, removeFavorite } = useAppContext();
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
        if (isFavorite) {
            removeFavorite(movie.id);
        } else {
            addFavorite(movie);
        }

        setIsFavorite(!isFavorite)
    };

    if (!movie) return <div>Loading....</div>


    return (

     <main>
        <section className="flex justify-around py-4">
        <div className="max-w-sm">
            <img className="rounded mb-4" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="max-w-2xl text-gray-400 ">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">{movie.title}</h1>
          <p className="my-4">{movie.overview}</p>
            { movie.genres ? (
              <p className="my-7 flex flex-wrap gap-2">
              { movie.genres.map((genre) => (
                <span className="mr-2 border border-gray-200 rounded " key={genre.id}>{genre.name}</span>
              )) }
            </p>
            ) : "" }
          
          <div className="flex items-center">
              <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <p className="ml-2 text-gray-900 ">{movie.vote_average}</p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full "></span>
              <span className="text-gray-900 dark:text-white">{movie.vote_count} reviews</span>
          </div>

          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{movie.runtime} min.</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{movie.budget}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{movie.revenue}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{movie.release_date}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer">{movie.imdb_id}</a>
          </p>

            <button onClick={toggleFavorite} className={`mt-4 ${isFavorite ? 'bg-red-500' : 'bg-green-500'} text-white px-4 py-2 rounded`}>
                {isFavorite ? 'Remove from Favorites ' : 'Add To Favorites'}
            </button>
         </div>
        </section>
     </main>

    );
}

export default MovieDetails;

