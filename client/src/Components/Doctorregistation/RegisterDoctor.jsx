import React, { useState } from "react";
import "./RegisterDoctor.css";

const RegisterDoctor = () => {
  const [formData, setFormData] = useState({
    name: "",
    qualifications: "",
    specializations: [],
    experience: "",
    hospital: "",
    availableDates: [],
    availableTime: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "select-multiple") {
      const selectedOptions = Array.from(e.target.selectedOptions).map((opt) => opt.value);
      setFormData((prev) => ({ ...prev, [name]: selectedOptions }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("doctors")) || [];
    localStorage.setItem("doctors", JSON.stringify([...existing, formData]));

    alert("Doctor registered successfully!");

    setFormData({
      name: "",
      qualifications: "",
      specializations: [],
      experience: "",
      hospital: "",
      availableDates: [],
      availableTime: "",
    });
  };

  return (
    <div className="doctor-register-container">
      <h2>Register Doctor</h2>
      <form className="doctor-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Qualifications:
          <input type="text" name="qualifications" value={formData.qualifications} onChange={handleChange} required />
        </label>

        <label>
          Specializations:
          <select name="specializations" multiple onChange={handleChange} value={formData.specializations} required>
            <option value="Cardiology">Cardiology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Neurology">Neurology</option>
          </select>
        </label>

        <label>
          Years of Experience:
          <input type="number" name="experience" value={formData.experience} onChange={handleChange} required />
        </label>

        <label>
          Hospital:
          <select name="hospital" value={formData.hospital} onChange={handleChange} required>
            <option value="">--Select--</option>
            <option value="Apollo Hyderabad">Apollo Hyderabad</option>
            <option value="Yashoda">Yashoda</option>
            <option value="KIMS">KIMS</option>
          </select>
        </label>

        <label>
          Available Dates (hold Ctrl to select multiple):
          <select name="availableDates" multiple value={formData.availableDates} onChange={handleChange} required>
            <option value="2025-07-20">2025-07-20</option>
            <option value="2025-07-21">2025-07-21</option>
            <option value="2025-07-22">2025-07-22</option>
            <option value="2025-07-23">2025-07-23</option>
            <option value="2025-07-24">2025-07-24</option>
          </select>
        </label>

        <label>
          Available Time:
          <input type="text" name="availableTime" value={formData.availableTime} onChange={handleChange} required />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterDoctor;
