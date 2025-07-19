import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo" style={{ color: "pink" }}>HospitalApp</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register-patient">Register</Link></li>
        <li><Link to="/register-doctor">Doctor Registration</Link></li> {/* ✅ NEW LINE */}
        <li><Link to="/register-hospital">Register Hospital</Link></li>
          <li><Link to="/doctor-dashboard">Doctor Dashboard</Link></li>

        <li><Link to="/search-doctor">Find Doctors</Link></li>
        <li><Link to="/history">Appointments</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
