import React from "react";
import { Link } from "react-router-dom"
import './navbar.css';

const Navbar = () => {
    return (
        <div className="nav heading_style">
            <Link to="/">
                <div className="navInnerDiv">
                    HomePage
                </div>
            </Link>
            <div className="navInnerDiv">
                Users Database
            </div>
            <Link to="/favData">
                <div className="navInnerDiv">
                    Favourite list
                </div>
            </Link>
        </div>
    )
}

export default Navbar;