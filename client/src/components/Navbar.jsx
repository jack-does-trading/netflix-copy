import logo from "../assets/images/logo1.png";
import Button from '@mui/material/Button';
import { MdAccountCircle } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="imgWrapper logo ml-3">
                <img src={logo} alt="logo" />
            </div>

            <div className="navi">
                <Button className="custom-button">Movies</Button>
                <Button className="custom-button">TV Shows</Button>
                <Button className="custom-button">My List</Button>
            </div>

            <div className="account">
                <Button className="account-logo search mr-3" startIcon={<FaSearch />}></Button>
                <Button className="account-logo" startIcon={<MdAccountCircle />}></Button>
            </div>
        </div>
    );
}

export default Navbar;
