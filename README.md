# Hospital Management System

**Project Started On:** July 17, 2025

## Overview

This is a simplified yet robust Hospital & Appointment Management System designed to handle hospital registrations, doctor and patient registrations, appointment booking, and revenue tracking.

## Features

- **Hospital Admin**
  - Register new hospitals with name and location.
  - Define and manage departments within hospitals.

- **Doctor**
  - Register with personal details, qualifications, and specializations.
  - Associate with hospitals matching their specializations.
  - Register availability time slots per hospital.
  - Set consultation fees per hospital.
  - View total earnings and consultations.

- **Patient**
  - Register personal information with unique ID.
  - Search and filter doctors by specialization, hospital, and availability.
  - Book appointments by selecting available time slots.
  - View complete appointment history.

- **Appointment Management**
  - Prevent overlapping appointment time slots.
  - Store appointment data locally.
  - Revenue sharing between doctors and hospitals (60%/40%).

## Technologies Used

- React.js for frontend
- LocalStorage for data persistence (demo purposes)
- CSS for styling

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Ganesh7509/hospital-management-system.git
hospital-management-system/
├── client/                # React app source code
│   ├── Components/        # All React components (DoctorRegistration, SearchDoctor, AppointmentHistory, etc.)
│   ├── App.jsx            # Main React app entry
│   ├── index.js           # React DOM rendering
│   └── styles/            # CSS files
├── README.md              # Project documentation
└── .gitignore             # Git ignore file
Ganesh Kunde

GitHub: https://github.com/Ganesh7509

LinkedIn: https://www.linkedin.com/in/ganesh-kunde-73b534229
