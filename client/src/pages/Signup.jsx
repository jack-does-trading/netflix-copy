import React from 'react';
import logo from "../assets/images/logo1.png";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
    return (
        <div className="signup">
            <div className="signupWrapper">
                <div className="form-container">
                    <div className="imgWrapper logo">
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                    </div>
                    <form className="mt-3">
                        <h2 style={{ textAlign: "center" }}>Sign Up</h2>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" className="form-control" placeholder="Enter username" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" className="form-control" placeholder="Enter email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" className="form-control" placeholder="Enter password" required />
                        </div>
                        <button type="submit" className="btn btn-danger btn-block">Sign Up</button>
                        <p className="mt-3">
                            Already have an account? <Link to="/login">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
