import React, { useEffect, useState } from "react";
import "./AppointmentHistory.css";

const AppointmentHistory = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // ✅ Fetch from localStorage instead of hardcoded dummy data
    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);
  }, []);

  return (
    <div className="history-container">
      <h2>Your Appointment History</h2>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        appointments.map((appt, index) => (
          <div key={index} className="history-card">
            <p><strong>Patient:</strong> {appt.patientName}</p>
            <p><strong>Doctor:</strong> {appt.doctor}</p>
            <p><strong>Specialization:</strong> {appt.specialization}</p>
            <p><strong>Hospital:</strong> {appt.hospital}</p>
            <p><strong>Date:</strong> {appt.date}</p>
            <p><strong>Time:</strong> {appt.time}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AppointmentHistory;
