import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_KEY = '8265bd1679663a7ea12ac168da84d2e8';

const fetchMovieDetails = async (movieId) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    return await response.json();
};

const Thumbnail = ({ movieId }) => {
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        fetchMovieDetails(movieId).then(setMovieDetails);
    }, [movieId]);

    if (!movieDetails || !movieDetails.poster_path || movieDetails.poster_path.includes('placeholder-image-url.jpg')) {
        return null; // Don't render anything if there's no movie details or no valid poster
    }

    const posterUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;

    return (
        <Link to={`/title/${movieId}`} className="thumb">
            <div className="thumb__image">
                <img src={posterUrl} alt={movieDetails.title} />
                <div className="thumb-info">
                    <h5 className="mb-4 mt-0">{movieDetails.title}</h5>
                    <p>{movieDetails.overview}</p>
                </div>
            </div>
        </Link>
    );
}

export default Thumbnail;
