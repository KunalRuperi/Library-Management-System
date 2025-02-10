import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/studentinfo.css"; // New CSS for better styling

export default function StudentInfo() {
  const [FullName, setFullName] = useState("");
  const [BookName, setBookName] = useState("");
  const [Prn, setPrn] = useState("");
  const [Division, setDivision] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Adress, setAdress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentData = {
      student_name: FullName,
      book_name: BookName,
      student_prn: Prn,
      student_class: Division,
      student_phone: Phone,
      student_email: Email,
      student_address: Adress,
    };

    try {
      await axios.post("http://127.0.0.1:8000/student/studentapi/Students", studentData, {
        headers: { "Content-Type": "application/json" },
      });
      alert("🎉 Student registered successfully!");
      setFullName("");
      setBookName("");
      setPrn("");
      setDivision("");
      setPhone("");
      setEmail("");
      setAdress("");
    } catch (error) {
      console.error("Error saving student data", error);
    }
  };

  return (
    <div className="student-page">
      <div className="student-form-container shadow-lg p-4 rounded">
        <center>
          <h2 className="form-title">📘 Student Registration</h2>
        </center>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="fullName" required value={FullName} onChange={(e) => setFullName(e.target.value)} />
          </div>

          <div className="mb-3">
            <label htmlFor="Bookname" className="form-label">Book Name</label>
            <input type="text" className="form-control" id="Bookname" required value={BookName} onChange={(e) => setBookName(e.target.value)} />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="studentId" className="form-label">Student PRN</label>
              <input type="text" className="form-control" id="studentId" required value={Prn} onChange={(e) => setPrn(e.target.value)} />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="gradeLevel" className="form-label">Class</label>
              <input type="text" className="form-control" id="gradeLevel" required value={Division} onChange={(e) => setDivision(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <input type="tel" className="form-control" id="phoneNumber" required value={Phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" required value={Email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">Home Address</label>
            <input type="text" className="form-control" id="address" required value={Adress} onChange={(e) => setAdress(e.target.value)} />
          </div>

          <div className="text-center">
            <button type="submit" className="btn submit-btn">📥 Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

