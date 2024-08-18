import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const BigSlider = () => {
    return (
        <div className="slider">
            <Carousel fade>
            <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src="https://images7.alphacoders.com/617/617964.jpg" 
                        alt="Breaking Bad"
                    />
                    <Carousel.Caption>
                        <h3>"An unforgettable performance that shines through every scene."</h3>
                        <p>-Michael Jordan</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src="https://wallpaper.forfun.com/fetch/74/74e0cf575a3d7b35f8f8e3d4e90de58b.jpeg" 
                        alt="GOT"
                    />
                    <Carousel.Caption>
                        <h3>"A masterclass in storytelling with every episode."</h3>
                        <p>The Hindu</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src="https://wallpapercat.com/w/full/c/f/2/117652-1920x1080-desktop-full-hd-friends-tv-series-wallpaper-photo.jpg" 
                        alt="Friends"
                    />
                    <Carousel.Caption>
                        <h3>"An exhilarating ride that keeps you guessing until the very end."</h3>
                        <p>NonStop Reviews</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default BigSlider;
