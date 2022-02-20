import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar navbar-expand-lg dw-navbar">
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item center-nav-item">
                        <Link to="/wrapped" className="nav-button">Wrapped</Link>
                    </li>
                    <li className="nav-item center-nav-item">
                        <Link to="/team" className="nav-button">Team</Link>
                    </li>
                    <li className="nav-item center-nav-item">
                        <Link to="/faq" className="nav-button">FAQ</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-add-button">Add to Discord</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
