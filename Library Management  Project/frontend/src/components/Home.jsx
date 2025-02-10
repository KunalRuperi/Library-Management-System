import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/home.css"; // Custom styles

export default function Home() {
    return (
        
        <div className="home-container">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">📚 Welcome to Your Library</h1>
                    <p className="hero-text">Find, Rent, and Enjoy Books with Ease.</p>
                    <div className="hero-search">
                        <input type="text" className="form-control" placeholder="Search for books..." />
                        <button className="btn btn-primary">Search</button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="features-section mt-5">
                <h2 className="text-center mb-4">🌟 Our Library Services</h2>
                <div className="row text-center">
                    <div className="col-md-4">
                        <div className="feature-card">
                            <h3>📖 Wide Collection</h3>
                            <p>Explore thousands of books across different genres.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature-card">
                            <h3>⚡ Fast Renting</h3>
                            <p>Easy and quick book renting process with online tracking.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature-card">
                            <h3>📅 Due Date Reminders</h3>
                            <p>Get notified when your book is due for return.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
