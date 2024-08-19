import logo from "../assets/images/logo1.png";
import Button from '@mui/material/Button';
import { MdAccountCircle } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            
            <div className="imgWrapper logo ml-3">
            <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            
            <div className="navi">
                <Button className="custom-button">Movies</Button>
                <Button className="custom-button">TV Shows</Button>
                <Button className="custom-button">My List</Button>
            </div>

            <div className="account">
                <Button className="account-logo search mr-3" startIcon={<FaSearch />}></Button>
                <Link to="/login"> <Button className="account-logo" startIcon={<MdAccountCircle />}></Button></Link>
            </div>
        </div>
    );
}

export default Navbar;
