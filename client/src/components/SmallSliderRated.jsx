import { useEffect, useState, useRef } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import Thumbnail from './Thumbnail';
import { Link } from 'react-router-dom';

const API_KEY = '8265bd1679663a7ea12ac168da84d2e8';

const generateRandomMovieId = () => {
  return Math.floor(Math.random() * 1000000) + 1;
};

const fetchValidMovieId = async () => {
  let isValid = false;
  let movieId;
  while (!isValid) {
    movieId = generateRandomMovieId();
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
      const data = await response.json();
      if (data.poster_path) {
        isValid = true;
      }
    } catch (error) {
      console.error('Error fetching movie:', error);
    }
  }
  return movieId;
};

const SmallSliderRated = () => {
  const [movieIds, setMovieIds] = useState([]);
  const swiperRef = useRef(null);
  const loadingMore = useRef(false);

  const fetchMoreMovies = async () => {
    if (loadingMore.current) return;
    loadingMore.current = true;
    const newIds = await Promise.all(Array(5).fill().map(() => fetchValidMovieId()));
    setMovieIds(prevIds => [...prevIds, ...newIds]);
    loadingMore.current = false;
  };

  useEffect(() => {
    fetchMoreMovies();

    // Initialize Swiper after component mounts
    swiperRef.current = new Swiper('.swiper', {
      slidesPerView: 4,
      spaceBetween: 10,
      freeMode: true,
      lazy: {
        loadPrevNext: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
    });

    swiperRef.current.on('reachEnd', fetchMoreMovies);

    // Cleanup function to destroy Swiper instance
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [movieIds]);

  return (
    <div className="swiper mt-5">
      <h3 className='mb-3 mt-3'>Top Rated Shows</h3>
      <div className="swiper-wrapper">
        {movieIds.map((movieId, index) => (
          <div className="swiper-slide" key={index}>
            <Link to={`/movie/${movieId}`}>
              <Thumbnail movieId={movieId} />
            </Link>
          </div>
        ))}
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-scrollbar"></div>
    </div>
  );
}

export default SmallSliderRated;
