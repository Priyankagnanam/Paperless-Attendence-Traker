🎓 Professional Student Attendance System
A modern, GPS-verified, and automated attendance management system built using Google Apps Script, HTML/CSS, and Google Sheets.

🚀 Overview
This project simplifies the daily attendance process for educational institutions. It features a professional user interface where students can register their attendance with real-time location tracking, ensuring integrity and accuracy.

✨ Key Features
📍 GPS Verification: Automatically captures Latitude and Longitude to ensure students are physically present on campus.

📊 Multi-Sheet Integration: * Sheet 1 (Raw Data): Stores detailed logs including Timestamp, Name, Roll No, Department, and GPS coordinates.

Sheet 2 (Status Tracker): Automatically marks students as "PRESENT" against a pre-defined roll list.

🔢 Live Counter: Features a real-time "Today Present" badge on the frontend dashboard.

🚫 Duplicate Prevention: Restricts students from submitting multiple entries on the same day.

📈 Auto-Analytics: Uses COUNTIF formulas for instant total presence/absence calculations.

🛠️ Tech Stack
Frontend: HTML5, CSS3 (Tailwind-inspired UI), JavaScript.

Backend: Google Apps Script (JavaScript).

Database: Google Sheets.

Deployment: Web App.

📂 Project Structure
Plaintext

├── Code.gs          # Backend logic (Form processing & Sheet updates)
├── Index.html       # Professional UI with Geolocation script
└── README.md        # Project documentation
⚙️ Setup & Installation
Google Sheet: Create a sheet with two tabs: Sheet1 (Headers: Timestamp, Name, Roll No, Dept, Lat, Lng) and Sheet2 (Headers: Roll Number, Status).

Apps Script: Go to Extensions > Apps Script, paste the Code.gs and Index.html code.

Deployment: Click Deploy > New Deployment, choose Web App, and set access to Anyone.

Formula: In Sheet2, add =COUNTIF(B2:B, "PRESENT") in cell C2 to track live totals.
