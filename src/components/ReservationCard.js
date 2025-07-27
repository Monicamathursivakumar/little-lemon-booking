import React from 'react';
import { Link } from 'react-router-dom';
import './ReservationCard.css';

const ReservationCard = () => {
  return (
    <div className="reserve-section">
      <div className="reserve-card">
        <img
          src="https://images.unsplash.com/photo-1551183053-bf91a1d81141"
          alt="Food table"
        />
        <div className="reserve-content">
          <h2>Reserve Your Spot</h2>
          <p>
            Planning a family dinner or a romantic evening? Reserve your table in advance and enjoy a warm, welcoming experience at Little Lemon.
          </p>
          <Link to="/booking" className="reserve-link">Make a Reservation →</Link>
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;
