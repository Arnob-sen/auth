import React from 'react'
import './VolunteerSignUp.css'
function Volunteersignup() {
    return (
        <div className="signup-form">
          <h2>Volunteer Sign Up</h2>
          <form>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Password:
              <input type="password" name="password" required />
            </label>
            <label>
              City:
              <input type="text" name="city" required />
            </label>
            <label>
              Age:
              <input type="number" name="age" required />
            </label>
            <label>
              Country:
              <input type="text" name="country" required />
            </label>
            <label>
              Area of Expertise:
              <input type="text" name="expertise" required />
            </label>
            <input type="submit" value="Sign Up" />
          </form>
        </div>
      );
}

export default Volunteersignup
