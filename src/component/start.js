import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
const Start = () => {
  return (
    <div className="App">
      <h1>Welcome to our NGO-Volunteer Connection Platform</h1>
      <Link to="/volunteer-signup">
        <button className="signup-btn">
          Sign Up as Volunteer
        </button>
      </Link>
      <Link to="/ngo-signup">
      <button className="signup-btn">
        Sign Up as NGO
      </button>
      </Link>
    </div>
  );
};

export default Start;
