import React from "react";
import { Link } from "react-router-dom"
import './navbar.css';

const Navbar = () => {
    return (
        <div className="nav heading_style">
            {/* <h1> */}
                <Link to="/">
                    HomePage
                </Link>

                Users Database

                <Link to="/favData">
                    Favourite list
                </Link>
            {/* </h1> */}
        </div>
    )
}

export default Navbar;