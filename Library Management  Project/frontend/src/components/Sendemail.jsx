import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../assets/css/sendemail.css"; // Add a new CSS file for styling

export default function Sendemail() {
    const { id } = useParams();
    const [studentData, setStudentData] = useState([]);
    const [Recipients, setRecipients] = useState("");
    const [Subject, setSubject] = useState("");
    const [Message, setMessage] = useState("");

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/student/studentapi/Students/${id}`)
            .then((res) => setStudentData(res.data))
            .catch((error) => console.error("Error fetching student data", error));
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Fixed issue with preventDefault

        const EmailData = {
            recipient: Recipients,
            subject: Subject,
            message: Message
        };

        try {
            await axios.post("http://127.0.0.1:8000/sendemail/send/", EmailData, {
                headers: { 'Content-Type': 'application/json' },
            });
            alert("📧 Email sent successfully!");
            setRecipients("");
            setSubject("");
            setMessage("");
        } catch (error) {
            console.error("Error sending email", error);
        }
    };

    return (
        <div className="email-page">
            <div className="email-form-container shadow-lg p-4 rounded">
                <center><h3 className="form-title">📧 Send Email</h3></center>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="recipientEmail" className="form-label">Recipient’s Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="recipientEmail"
                            placeholder="name@example.com"
                            required
                            value={Recipients}
                            onChange={(e) => setRecipients(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emailSubject" className="form-label">Subject</label>
                        <input
                            type="text"
                            className="form-control"
                            id="emailSubject"
                            placeholder="Enter Subject"
                            required
                            value={Subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emailMessage" className="form-label">Message</label>
                        <textarea
                            className="form-control"
                            id="emailMessage"
                            rows="4"
                            placeholder="Type your message here..."
                            required
                            value={Message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn submit-btn">📨 Send Email</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

