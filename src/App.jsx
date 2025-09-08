import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Loader from './Component/loader';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './Pages/ContactUs';
import Navbar from './Component/Navbar';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000); // Animation duration
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      {!loading && <Navbar />}
      {!loading && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      )}
    </>
  );
}

export default App;
