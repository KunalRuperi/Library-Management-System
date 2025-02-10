import React from 'react';
import { Link } from 'react-router-dom';
// import Home from './Home';


export default function Footer() {
    return (
        <footer className="bg-dark text-light pt-5 pb-4 mt-5">
            <div className="container">
                <div className="row">
                    {/* About Us Section */}
                    <div className="col-md-4">
                        <h5 className="text-uppercase fw-bold text-primary">About Us</h5>
                        <p className="text-muted">
                            Our Library Management System provides a robust platform for managing and accessing a vast collection of books and resources. 
                            We aim to foster a community of knowledge and learning.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="col-md-4">
                        <h5 className="text-uppercase fw-bold text-primary">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link className="footer-link" to="/">Home</Link></li>
                            <li><Link className="footer-link" to="/addbook">Add Book</Link></li>
                            <li><Link className="footer-link" to="/rented">Rented Books</Link></li>
                            <li><Link className="footer-link" to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div className="col-md-4">
    <h5 className="text-uppercase fw-bold text-primary">Contact Us</h5>

    {/* Address */}
    <div className="d-flex align-items-center gap-2">
        <i className="bi bi-geo-alt-fill text-warning fs-5"></i> 
        <p className="text-black mb-0">123 Library Lane, Knowledge City</p>
    </div>

    {/* Phone */}
    <div className="d-flex align-items-center gap-2">
        <i className="bi bi-telephone-fill text-warning fs-5"></i> 
        <p className="text-black mb-0">+1 234 567 890</p>
    </div>

    {/* Email */}
    <div className="d-flex align-items-center gap-2">
        <i className="bi bi-envelope-fill text-warning fs-5"></i> 
        <p className="text-black mb-0">library@management.com</p>
    </div>


                        {/* Social Media Icons */}
                        <div className="mt-3">
                            <Link to="/" className="social-icon"><i className="bi bi-facebook"></i></Link>
                            <Link to="/" className="social-icon"><i className="bi bi-twitter"></i></Link>
                            <Link to="/" className="social-icon"><i className="bi bi-instagram"></i></Link>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="row mt-4">
                    <div className="col text-center">
                        <p className="text-muted mb-0">&copy; 2024 Library Management System. All rights reserved.</p>
                    </div>
                </div>
            </div>

           

            {/* Custom CSS for Styling */}
            <style>
                {`
                .footer-link {
                    color: #bbb;
                    text-decoration: none;
                    transition: color 0.3s ease-in-out;
                }

                .footer-link:hover {
                    color: #0d6efd; /* Bootstrap Primary Blue */
                }

                .social-icon {
                    color: #bbb;
                    font-size: 1.5rem;
                    margin-right: 15px;
                    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
                }

                .social-icon:hover {
                    color: #0d6efd;
                    transform: scale(1.2);
                }
                `}
            </style>
        </footer>
    );
}

