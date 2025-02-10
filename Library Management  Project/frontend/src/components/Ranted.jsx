import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../assets/css/ranted.css"; // Add this CSS file for styling
export default function Ranted() {
  const [Students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/student/studentapi/Students")
      .then((res) => {
        setStudents(res.data);
      })
      .catch(() => console.error("Ranted component error"));
  }, []);

  return (
    <div className="container mt-5">
      <div className="rented-books-container shadow-lg p-4 rounded">
        <center>
          <h2 className="fw-bold text-gradient">📚 RENTED BOOKS</h2>
        </center>
        <div className="table-responsive">
          <table className="table table-hover table-bordered">
            <thead className="table-dark text-center">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">STUDENT NAME</th>
                <th scope="col">BOOK NAME</th>
                <th scope="col">EMAIL</th>
                <th scope="col">PHONE</th>
                <th scope="col">ISSUED DATE</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {Students.map((value) => (
                <tr key={value.id} className="text-center">
                  <td>{value.id}</td>
                  <td>{value.student_name}</td>
                  <td>{value.book_name}</td>
                  <td>{value.student_email}</td>
                  <td>{value.student_phone}</td>
                  <td>{value.rent_date}</td>
                  <td>
                    <Link
                      to={`/detailstudent/${value.id}`}
                      className="btn btn-sm view-btn"
                    >
                      VIEW
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

