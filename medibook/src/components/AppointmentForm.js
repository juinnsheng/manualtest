import React, { useState } from 'react';
import  '/Users/juinnshengna/Desktop/website/medibook-qa/src/App.css';
export default function AppointmentForm({ onAdd }) {
  const [date, setDate] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !desc) return;
    onAdd({ date, desc });
    setDate('');
    setDesc('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Appointment</h2>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      <input placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}
