import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Table booked successfully!');
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label>Name:</label>
      <input
        type="text"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      <label>Date:</label>
      <input
        type="date"
        required
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />

      <label>Time:</label>
      <input
        type="time"
        required
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
      />

      <label>Guests:</label>
      <input
        type="number"
        min="1"
        max="10"
        required
        value={formData.guests}
        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
      />

      <label>Occasion:</label>
      <select
        value={formData.occasion}
        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit">Book Table</button>
    </form>
  );
};

export default BookingForm;
