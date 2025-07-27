import React from 'react';
import './InfoCards.css';

const InfoCards = () => {
  return (
    <div className="cards">
      <div className="card">
        <h3>New Menu</h3>
        <p>Explore our seasonal Mediterranean specials — fresh and delightful!</p>
      </div>
      <div className="card">
        <h3>Book a Table</h3>
        <p>Skip the wait and reserve your spot online anytime.</p>
      </div>
      <div className="card">
        <h3>Opening Hours</h3>
        <p>Mon – Sun: 10am to 10pm. Visit us for brunch or dinner!</p>
      </div>
    </div>
  );
};

export default InfoCards;
