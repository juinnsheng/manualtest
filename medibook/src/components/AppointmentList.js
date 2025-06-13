import React from 'react';
import  '/Users/juinnshengna/Desktop/website/medibook-qa/src/App.css';
export default function AppointmentList({ appointments, onCancel }) {
  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map((appt, index) => (
          <li key={index}>
            {appt.date} - {appt.desc}
            <button onClick={() => onCancel(index)}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
