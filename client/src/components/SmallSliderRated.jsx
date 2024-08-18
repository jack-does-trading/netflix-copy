import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import Thumbnail from './Thumbnail';
import { Link } from 'react-router-dom';

const SmallSliderRated = () => {
  useEffect(() => {
    // Initialize Swiper after component mounts
    const swiper = new Swiper('.swiper', {
      // Swiper configuration options
      slidesPerView: 4,  // Number of slides visible at once
      spaceBetween: 10, // Space between slides
      freeMode: true,   // Enable free mode
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

    // Cleanup function to destroy Swiper instance
    return () => swiper.destroy();
  }, []);

  return (
    <div className="swiper mt-5">
        <h3 className='mb-3 mt-3'>Top Rated Shows</h3>
      <div className="swiper-wrapper">
        <div className="swiper-slide"><Link to="/title"><Thumbnail /></Link></div>
        <div className="swiper-slide"><Link to="/title"><Thumbnail /></Link></div>
        <div className="swiper-slide"><Link to="/title"><Thumbnail /></Link></div>
        <div className="swiper-slide"><Link to="/title"><Thumbnail /></Link></div>
        <div className="swiper-slide"><Link to="/title"><Thumbnail /></Link></div>
        <div className="swiper-slide"><Link to="/title"><Thumbnail /></Link></div>
        <div className="swiper-slide"><Link to="/title"><Thumbnail /></Link></div>
        <div className="swiper-slide"><Link to="/title"><Thumbnail /></Link></div>
        <div className="swiper-slide"><Link to="/title"><Thumbnail /></Link></div>
        {/* Add more slides as needed */}
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
}

export default SmallSliderRated;
