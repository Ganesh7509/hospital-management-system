import React, { useEffect, useState } from "react";
import "./DoctorDashboard.css";

const DoctorDashboard = () => {
  const [doctorStats, setDoctorStats] = useState({});

  useEffect(() => {
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    const earningsPerDoctor = {};

    appointments.forEach((appt) => {
      const doctor = appt.doctor;
      const hospital = appt.hospital;
      const fee = appt.consultationFee || 500; // default to ₹500 if not present
      const doctorShare = (fee * 60) / 100;

      if (!earningsPerDoctor[doctor]) {
        earningsPerDoctor[doctor] = {
          totalEarnings: 0,
          totalAppointments: 0,
          hospitals: {},
        };
      }

      earningsPerDoctor[doctor].totalEarnings += doctorShare;
      earningsPerDoctor[doctor].totalAppointments += 1;

      if (!earningsPerDoctor[doctor].hospitals[hospital]) {
        earningsPerDoctor[doctor].hospitals[hospital] = 0;
      }

      earningsPerDoctor[doctor].hospitals[hospital] += doctorShare;
    });

    setDoctorStats(earningsPerDoctor);
  }, []);

  return (
    <div className="doctor-dashboard">
      <h2>Doctor Dashboard</h2>
      {Object.keys(doctorStats).length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        Object.entries(doctorStats).map(([doctor, data]) => (
          <div key={doctor} className="doctor-card">
            <h3>{doctor}</h3>
            <p><strong>Total Consultations:</strong> {data.totalAppointments}</p>
            <p><strong>Total Earnings:</strong> ₹{data.totalEarnings}</p>
            <div className="hospital-earnings">
              <strong>Earnings per Hospital:</strong>
              <ul>
                {Object.entries(data.hospitals).map(([hosp, amt], i) => (
                  <li key={i}>{hosp}: ₹{amt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DoctorDashboard;
