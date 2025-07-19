import React, { useState } from "react";
import "./RegisterHospital.css";

const RegisterHospital = () => {
  const [hospital, setHospital] = useState({
    name: "",
    location: "",
    departments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHospital((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHospital = {
      name: hospital.name,
      location: hospital.location,
      departments: hospital.departments.split(",").map(dep => dep.trim()),
    };

    const existing = JSON.parse(localStorage.getItem("hospitals")) || [];
    localStorage.setItem("hospitals", JSON.stringify([...existing, newHospital]));

    alert("Hospital Registered Successfully!");
    setHospital({ name: "", location: "", departments: "" });
  };

  return (
    <div className="hospital-register-container">
      <h2>Register New Hospital</h2>
      <form className="hospital-form" onSubmit={handleSubmit}>
        <label>
          Hospital Name:
          <input type="text" name="name" value={hospital.name} onChange={handleChange} required />
        </label>

        <label>
          Location:
          <input type="text" name="location" value={hospital.location} onChange={handleChange} required />
        </label>

        <label>
          Departments (comma-separated):
          <input type="text" name="departments" value={hospital.departments} onChange={handleChange} required />
        </label>

        <button type="submit">Register Hospital</button>
      </form>
    </div>
  );
};

export default RegisterHospital;
