import React, { useState } from "react";
import "./SearchDoctor.css";

const SearchDoctor = () => {
  const [filters, setFilters] = useState({
    specialization: "",
    hospital: "",
    date: "",
  });

  const [bookingDoctor, setBookingDoctor] = useState(null);
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const allDoctors = JSON.parse(localStorage.getItem("doctors")) || [];

    const filtered = allDoctors.filter((doc) => {
      return (
        doc.specializations.includes(filters.specialization) &&
        doc.hospital === filters.hospital &&
        doc.availableDates.includes(filters.date)
      );
    });

    const finalResults = filtered.map((doc) => ({
      name: doc.name,
      specialization: filters.specialization,
      hospital: doc.hospital,
      date: filters.date,
      time: doc.availableTime,
    }));

    setResults(finalResults);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const patientName = e.target.elements.patientName.value;

    const newAppointment = {
      patientName,
      doctor: bookingDoctor.name,
      specialization: bookingDoctor.specialization,
      hospital: bookingDoctor.hospital,
      date: bookingDoctor.date,
      time: bookingDoctor.time,
    };

    const existing = JSON.parse(localStorage.getItem("appointments")) || [];
    localStorage.setItem("appointments", JSON.stringify([...existing, newAppointment]));

    alert("Appointment booked successfully!");
    setBookingDoctor(null);
  };

  return (
    <div className="search-container">
      <h2>Find a Doctor</h2>
      <form className="search-form" onSubmit={handleSearch}>
        <label>
          Specialization:
          <select
            name="specialization"
            value={filters.specialization}
            onChange={handleChange}
            required
          >
            <option value="">--Select--</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Neurology">Neurology</option>
          </select>
        </label>

        <label>
          Hospital:
          <select
            name="hospital"
            value={filters.hospital}
            onChange={handleChange}
            required
          >
            <option value="">--Select--</option>
            <option value="Apollo Hyderabad">Apollo Hyderabad</option>
            <option value="Yashoda">Yashoda</option>
            <option value="KIMS">KIMS</option>
          </select>
        </label>

        <label>
          Preferred Date:
          <input
            type="date"
            name="date"
            value={filters.date}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Search</button>
      </form>

      <div className="results">
        {results.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <h3>{doctor.name}</h3>
            <p><strong>Specialization:</strong> {doctor.specialization}</p>
            <p><strong>Hospital:</strong> {doctor.hospital}</p>
            <p><strong>Date:</strong> {doctor.date}</p>
            <p><strong>Time Slot:</strong> {doctor.time}</p>
            <button onClick={() => setBookingDoctor(doctor)}>Book Appointment</button>
          </div>
        ))}
      </div>

      {bookingDoctor && (
        <div className="booking-form">
          <h3>Booking for {bookingDoctor.name}</h3>
          <form onSubmit={handleBookingSubmit}>
            <label>
              Patient Name:
              <input type="text" name="patientName" required />
            </label>
            <label>
              Date:
              <input type="date" value={bookingDoctor.date} readOnly />
            </label>
            <label>
              Time Slot:
              <input type="text" value={bookingDoctor.time} readOnly />
            </label>
            <button type="submit">Confirm Booking</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SearchDoctor;

                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                // import React, { useState } from "react";
// import "./SearchDoctor.css";

// const SearchDoctor = () => {
//   const [filters, setFilters] = useState({
//     specialization: "",
//     hospital: "",
//     date: "",
//   });
// //   This keeps track of what the user selects:
// // Which doctor specialization?
// // Which hospital?
// // What date?

//   const [bookingDoctor, setBookingDoctor] = useState(null);
//   const [results, setResults] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Simulated search results
//     setResults([
//       {
//         name: "Dr. Priya Sharma",
//         specialization: "Cardiology",
//         hospital: "Apollo Hyderabad",
//         date: filters.date,
//         time: "10:00 AM - 11:00 AM",
//       },
//       {
//         name: "Dr. Ramesh Verma",
//         specialization: "Cardiology",
//         hospital: "Yashoda",
//         date: filters.date,
//         time: "12:00 PM - 1:00 PM",
//       },
//     ]);
//   };

//   const handleBookingSubmit = (e) => {
//     e.preventDefault();
//     const patientName = e.target.elements.patientName.value;

//     const newAppointment = {
//       patientName,
//       doctor: bookingDoctor.name,
//       specialization: bookingDoctor.specialization,
//       hospital: bookingDoctor.hospital,
//       date: bookingDoctor.date,
//       time: bookingDoctor.time,
//     };

//     const existing = JSON.parse(localStorage.getItem("appointments")) || [];
//     localStorage.setItem("appointments", JSON.stringify([...existing, newAppointment]));

//     alert("Appointment booked successfully!");
//     setBookingDoctor(null);
//   };

//   return (
//     <div className="search-container">
//       <h2>Find a Doctor</h2>
//       <form className="search-form" onSubmit={handleSearch}>
//         <label>
//           Specialization:
//           <select
//             name="specialization"
//             value={filters.specialization}
//             onChange={handleChange}
//             required
//           >
//             <option value="">--Select--</option>
//             <option value="Cardiology">Cardiology</option>
//             <option value="Orthopedics">Orthopedics</option>
//             <option value="Pediatrics">Pediatrics</option>
//           </select>
//         </label>

//         <label>
//           Hospital:
//           <select
//             name="hospital"
//             value={filters.hospital}
//             onChange={handleChange}
//             required
//           >
//             <option value="">--Select--</option>
//             <option value="Apollo Hyderabad">Apollo Hyderabad</option>
//             <option value="Yashoda">Yashoda</option>
//             <option value="KIMS">KIMS</option>
//           </select>
//         </label>

//         <label>
//           Preferred Date:
//           <input
//             type="date"
//             name="date"
//             value={filters.date}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <button type="submit">Search</button>
//       </form>

//       <div className="results">
//         {results.map((doctor, index) => (
//           <div key={index} className="doctor-card">
//             <h3>{doctor.name}</h3>
//             <p>
//               <strong>Specialization:</strong> {doctor.specialization}
//             </p>
//             <p>
//               <strong>Hospital:</strong> {doctor.hospital}
//             </p>
//             <p>
//               <strong>Date:</strong> {doctor.date}
//             </p>
//             <p>
//               <strong>Time Slot:</strong> {doctor.time}
//             </p>
//             <button onClick={() => setBookingDoctor(doctor)}>Book Appointment</button>
//           </div>
//         ))}
//       </div>

//       {bookingDoctor && (
//         <div className="booking-form">
//           <h3>Booking for {bookingDoctor.name}</h3>
//           <form onSubmit={handleBookingSubmit}>
//             <label>
//               Patient Name:
//               <input type="text" name="patientName" required />
//             </label>
//             <label>
//               Date:
//               <input type="date" value={bookingDoctor.date} readOnly />
//             </label>
//             <label>
//               Time Slot:
//               <input type="text" value={bookingDoctor.time} readOnly />
//             </label>
//             <button type="submit">Confirm Booking</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchDoctor;
