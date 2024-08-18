import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const TitlePage = () => {
    return (
        <div className="title-page">
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-3 title-img">
                        <div className="imgWrapper">
                            <Carousel fade>
                                <Carousel.Item interval={4000}>
                                    <img
                                        className="d-block w-100"
                                        src="https://assets.vogue.in/photos/5fb498ce49cee77f06f7e19f/2:3/w_2560%2Cc_limit/The-Queens-Gambit-vogue-171120-courtesy-Netflix-4.jpg"
                                        alt="The Queens Gambit"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                    <img
                                        className="d-block w-100"
                                        src="https://ourculturemag.com/wp-content/uploads/2021/06/queensgambit.jpg"
                                        alt="The Queens Gambit"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                    <img
                                        className="d-block w-100"
                                        src="https://i0.wp.com/pilebythebed.com/wp-content/uploads/2020/12/The-Queens-Gambit-Poster.jpg?fit=426%2C597&ssl=1"
                                        alt="The Queens Gambit"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <div className='col-md-9 title-info pb-5'>
                        <h1 className="title mb-2">The Queen's Gambit</h1>
                        <span className='small-info opa mt-2'>2020 | Maturity Rating: A | 1 Season | Drama</span>
                        <h5 className="description my-5">
                            In a 1950s orphanage, a young girl reveals an astonishing
                            talent for chess and begins an unlikely journey to stardom while grappling with addiction.
                        </h5>
                        <span className='opa'>Starring: </span><span>Anya Taylor-Joy, Bill Camp, Marielle Heller</span>
                        <br />
                        <span className='opa'>Creators: </span><span>Scott Frank, Allan Scott</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TitlePage;
