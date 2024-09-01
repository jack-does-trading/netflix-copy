import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Thumbnail from './Thumbnail';
import { Link } from 'react-router-dom';

const API_KEY = '8265bd1679663a7ea12ac168da84d2e8';

const SearchResults = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const searchMovies = async () => {
            const query = new URLSearchParams(location.search).get('query');
            if (query) {
                try {
                    const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1&include_adult=false`);
                    const data = await response.json();
                    // Filter out results without poster_path or with placeholder image
                    const filteredResults = data.results.filter(item => 
                        item.poster_path && 
                        item.id && 
                        item.media_type 
                    );
                    setResults(filteredResults);
                } catch (error) {
                    console.error('Error searching movies:', error);
                }
            }
            setLoading(false);
        };

        searchMovies();
    }, [location.search]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const isValidMovie = (movie) => {
        return movie.poster_path && !movie.poster_path.includes('placeholder-image-url.jpg');
    };

    return (
        <div className="search-results">
            <h2>Search Results</h2>
            <div className="results-grid">
                {results
                    .filter(isValidMovie)
                    .map((item) => {
                        const thumbnail = <Thumbnail movieId={item.id} />;
                        if (!thumbnail) return null;
                        return (
                            <div key={item.id} className="result-item">
                                <Link to={`/${item.media_type}/${item.id}`}>
                                    {thumbnail}
                                </Link>
                            </div>
                        );
                    })
                }
            </div>
            {results.filter(isValidMovie).length === 0 && <p>No results found.</p>}
        </div>
    );
};

export default SearchResults;
