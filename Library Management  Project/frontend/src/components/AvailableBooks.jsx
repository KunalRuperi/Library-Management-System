import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/css/main.css';

export default function AvailableBooks() {
    const [Books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/books")
            .then((res) => {
                setBooks(res.data);
            })
            .catch((error) => console.error("Error fetching data from books API", error));
    }, []);

    return (
        <div className="container mt-5">
            <center>
                <h3 className="fs-1 fw-bolder text-primary text-shadow">📚 Available Books</h3>
            </center>
            <div className="row">
                {Books.map((value) => (
                    <div key={value.id} className="col-lg-3 col-md-4 col-sm-6 mt-3">
                        <div className="card border-0 shadow-lg p-3 mb-5 bg-light rounded" style={{ transition: "0.3s", cursor: "pointer" }}>
                            <div className="card-body text-center">
                                <h5 className="card-title text-success fw-bold">{value.book_name}</h5>
                                <p className="card-text text-muted">{value.book_description}</p>
                                <p className="text-primary fw-medium">
                                    Author: <em className="text-dark fw-bold">{value.author}</em>
                                </p>
                                <Link to="/studentform" className="btn btn-outline-primary fw-bold mx-2">📖 RENT</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
