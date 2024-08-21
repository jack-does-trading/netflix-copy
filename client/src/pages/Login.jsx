import logo from "../assets/images/logo1.png";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Narcos from "../assets/images/narcos.jpg"

const Login = () => {
    return (
        <div className="login">

            <div className="loginWrapper">
                <div className="form col-md-4">
                    <div className="imgWrapper logo ml-3 w-100">
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                    </div>
                    <form className="mt-5">
                        <h2 style={{textAlign: "center"}}>Login</h2>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" className="form-control w-90" placeholder="Enter email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" className="form-control" placeholder="Enter password" required />
                        </div>
                        <button type="submit" className="btn btn-danger btn-block">Login</button>
                        <p className="mt-3">
                            Don't have an account? <Link to="/signup">Sign up</Link>
                        </p>
                    </form>
                </div>
                <div className="login-slider col-md-8">
                    <Carousel fade>
                        <Carousel.Item interval={4000}>
                            <img
                                className="d-block w-100"
                                src="https://wallpaper.forfun.com/fetch/a2/a2d5aa167aed65ba6e6a735aaa4971a3.jpeg"
                                alt="Better Call Saul"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <img
                                className="d-block w-100"
                                src="https://wallpapercave.com/wp/wp11908305.jpg"
                                alt="Suits"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <img
                                className="d-block w-100"
                                src={Narcos}
                                alt="Narcos"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <img
                                className="d-block w-100"
                                src="https://4kwallpapers.com/images/wallpapers/the-boys-season-4-1920x1080-17287.jpg"
                                alt="The Boys"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Login;