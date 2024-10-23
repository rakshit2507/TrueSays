import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaMobile } from "react-icons/fa";

function Navbar() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand mx-3" to="/" href="/">True Says</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mx-3">
                            <li className="nav-item">
                                <Link to="/" href="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/About" href="/" className="nav-link">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/WhyUs" href="/" className="nav-link">Why Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact" href="/" className="nav-link">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Team" href="/" className="nav-link">Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Mission" href="/" className="nav-link">Mission</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}
export default Navbar