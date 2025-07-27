import React from 'react';
import Hero from '../components/Hero';
import InfoCards from '../components/InfoCards';
import ReservationCard from '../components/ReservationCard';
import ContactCard from '../components/ContactCard';

const Home = () => {
  return (
    <div>
      <Hero />
      <InfoCards />
      <ReservationCard />
      <ContactCard />
    </div>
  );
};

export default Home;
