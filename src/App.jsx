import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services/Services';
import About from './Pages/AboutUs';
import Loader from './Component/loader';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './Pages/ContactUs';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import ServiceDetails from './Pages/Services/serviceDetails';
function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && <Navbar />}
      {!loading && (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
