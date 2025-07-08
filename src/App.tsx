import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import PriceList from './components/PriceList';
import About from './components/About';
import Locations from './components/Locations';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header onBookingClick={openBookingModal} />
      <div id="home">
        <Hero onBookingClick={openBookingModal} />
      </div>
      <div id="services">
        <Services onBookingClick={openBookingModal} />
      </div>
      <div id="gallery">
        <Gallery onBookingClick={openBookingModal} />
      </div>
      <div id="pricing">
        <PriceList />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="locations">
        <Locations />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <FloatingWhatsApp />
      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
    </div>
  );
}

export default App;