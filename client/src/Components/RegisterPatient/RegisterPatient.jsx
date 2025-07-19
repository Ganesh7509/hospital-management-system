import React, { useState } from "react";
import "./RegisterPatient.css";

const RegisterPatient = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 console.log("Patient Registered:", formData);
    // Get existing patients from localStorage
    const existingPatients = JSON.parse(localStorage.getItem("patients")) || [];
      console.log(existingPatients)
    // Add new patient
    const updatedPatients = [...existingPatients, formData];
   console.log(updatedPatients)
    // Store back to localStorage
    localStorage.setItem("patients", JSON.stringify(updatedPatients));

    alert("Registration successful!");

    // Optionally clear form
    setFormData({
      name: "",
      gender: "",
      dob: "",
      id: "",
    });
  };

  return (
    <div className="register-container">
      <h2>Register Patient</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <label>
          Full Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">--Select--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          Date of Birth:
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </label>

        <label>
          Unique ID (Aadhar/Passport):
          <input type="text" name="id" value={formData.id} onChange={handleChange} required />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPatient;
