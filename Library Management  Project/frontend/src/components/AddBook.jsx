import React, { useState } from "react";
import axios from "axios";

export default function AddBook() {
  const [name, setName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const eventData = {
      book_name: name,
      author: authorName,
      book_description: desc,
    };
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/books", eventData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Book Added:", res.data);
      alert("📚 Book added successfully!");
      setName("");
      setAuthorName("");
      setDesc("");
    } catch (error) {
      console.error("Error adding book!", error);
      alert("❌ Failed to add book!");
    }
  };

  return (
    <div className="container mt-5">
      <div className="form-container shadow-lg p-4 rounded">
        <center>
          <h2 className="mb-4 fw-bold text-gradient">📖 Add a New Book</h2>
        </center>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="bookTitle" className="form-label">
              <strong>Book Title</strong>
            </label>
            <input
              type="text"
              className="form-control input-custom"
              id="bookTitle"
              placeholder="Enter book title"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              <strong>Author</strong>
            </label>
            <input
              type="text"
              className="form-control input-custom"
              id="author"
              placeholder="Enter author's name"
              required
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              <strong>Description</strong>
            </label>
            <textarea
              className="form-control input-custom"
              id="description"
              rows="4"
              placeholder="Enter book description"
              required
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-lg fw-bold submit-btn">
              ➕ Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

