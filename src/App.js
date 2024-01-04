import React from 'react';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Start from './component/start';
import Volunteersignup from './component/volunteer-signup'; // Import your VolunteerSignUp component
import Ngosignup from './component/Ngo-signup';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
     
        
          <Route path="/" element={<Start/>} />
          <Route path="/volunteer-signup" element={<Volunteersignup/>} />
          <Route path="/ngo-signup" element={<Ngosignup/>} />
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;
