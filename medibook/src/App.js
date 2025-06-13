import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appt) => setAppointments([...appointments, appt]);
  const cancelAppointment = (index) => {
    const copy = [...appointments];
    copy.splice(index, 1);
    setAppointments(copy);
  };

  return (
    <div>
      {loggedIn ? (
        <>
          <AppointmentForm onAdd={addAppointment} />
          <AppointmentList appointments={appointments} onCancel={cancelAppointment} />
        </>
      ) : (
        <LoginForm onLogin={() => setLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
