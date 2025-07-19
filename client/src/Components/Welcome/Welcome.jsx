import React from 'react';
import './Welcome.css';

const Welcome = () => {
  const stories = [
    {
      src: "/mach.jpg",
      alt: "Heart Monitor",
      text: "Advanced Equipment Monitoring Health 24x7",
    },
    {
      src: "/wheelchair.jpg",
      alt: "Nurse with Patient",
      text: "Caring Staff Helping You Every Step",
    },
    {
      src: "/ambulance.jpg",
      alt: "Ambulance Service",
      text: "Emergency Ambulance - Always On Standby",
    },
    {
      src: "/setchs.jpg",
      alt: "Stretcher Service",
      text: "Quick & Safe Internal Transport for Patients",
    },
    {
      src: "/patientpick.jpg",
      alt: "Discharge",
      text: "Comfortable Discharge Process",
    },
    {
      src: "/doctos.jpg",
      alt: "Surgery Team",
      text: "Expert Surgeons at Work for Critical Care",
    }
  ];

  return (
    <div className="welcome-container">
      <div className="welcome-banner">
        <h1 className="welcome-title">WELCOME TO THE HOSPITAL</h1>
        <p className="welcome-tagline">
          Your health is our mission. Experience modern healthcare with compassion.
        </p>
      </div>

      <section className="image-gallery">
        {stories.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.src} alt={item.alt} />
            <p>{item.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Welcome;
