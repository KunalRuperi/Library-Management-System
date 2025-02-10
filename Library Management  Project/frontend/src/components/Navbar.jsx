import React from "react";
import { Link } from "react-router-dom";
import Home from './Home';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark shadow-sm">
            <div className="container-fluid">
                {/* Logo / Brand */}
                <Link className="navbar-brand text-light fs-3 fw-bold" to="/">
                    📚 Library <span className="text-primary">Management</span>
                </Link>

                {/* Mobile Toggle Button */}
                <button 
                    className="navbar-toggler border-0" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-3">
                            <Link className="nav-link custom-hover" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link custom-hover" to="/addbook">Add Book</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link custom-hover" to="/rented">Rented Books</Link>
                        </li>
                    </ul>
                </div>
            </div>


            {/* <Home/> */}

            {/* Custom CSS for hover effect */}
            <style>
                {`
                .custom-hover {
                    color: white;
                    font-weight: 600;
                    transition: color 0.3s ease-in-out;
                }

                .custom-hover:hover {
                    color: #0d6efd; /* Bootstrap Primary Blue */
                }
                `}
            </style>
        </nav>

        
    );
}
