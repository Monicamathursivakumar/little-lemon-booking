import React from 'react';
import './ContactCard.css';

const ContactCard = () => {
  return (
    <div className="contact-card-section">
      <div className="contact-card">
        <div className="contact-card-content">
          <h2>Get in Touch</h2>
          <p>Have questions or need assistance with a reservation?</p>
          <p>We're here to help you with anything related to Little Lemon.</p>

          <div className="contact-details">
            <p><strong>📞 Phone:</strong> +91 98476 10234</p>
  <p><strong>📧 Email:</strong> hello@lemontwist.in</p>
  <p><strong>📍 Address:</strong> 88 Zesty Lane, Citrus Park, Indore, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
