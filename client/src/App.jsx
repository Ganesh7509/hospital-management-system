import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import RegisterPatient from "./Components/RegisterPatient/RegisterPatient";
import SearchDoctor from "./Components/SearchDoctor/SearchDoctor";
import AppointmentHistory from "./Components/AppointmentHistory/AppointmentHistory";
import Welcome from "./Components/Welcome/welcome";
import RegisterDoctor from "./Components/Doctorregistation/RegisterDoctor";
import RegisterHospital from "./Components/Registerhospital/RegisterHospital";
// import DoctorDashboard from "./Components/DoctorDashboard/DoctorDashboard";
import DoctorDashboard from "./Components/DoctorDashboard/DoctorDashboard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome></Welcome>} />
         <Route path="/register-patient" element={<RegisterPatient />} />
        <Route path="/search-doctor" element={<SearchDoctor/>} />
        <Route path="/history" element={<AppointmentHistory></AppointmentHistory>} />
       <Route path="/register-doctor" element={<RegisterDoctor />} />
<Route path="/register-hospital" element={<RegisterHospital></RegisterHospital>} />
{/* <Route path="/doctor-dashboard" element={DoctorDashboard}></Route> */}
{/* Route path="/doctor-dashboard" element={<DoctorDashboard />} /> */}
<Route path="/doctor-dashboard" element={<DoctorDashboard></DoctorDashboard>}></Route>
      </Routes>
    </>
  );
}

export default App;
