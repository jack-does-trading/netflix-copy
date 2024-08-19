import logo from "../assets/images/logo1.png";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login">        
            <div className="imgWrapper logo ml-3">
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
        </div>
    )
}

export default Login;