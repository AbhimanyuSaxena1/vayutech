import React, { useState, useEffect } from 'react';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Loader from './Component/loader';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000); // Corresponds to the animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loader /> :""}
      <Routes>
        <Route path="/" element={ <Home />}></Route>
        <Route path="/services" element={ <Services />}></Route>
      </Routes>
    </>
  );
}

export default App;
