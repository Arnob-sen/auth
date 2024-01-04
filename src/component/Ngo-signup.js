import React from 'react'
import './NGOSignUp.css';
function Ngosignup() {
  return (
    <div className="signup-form">
    <h2>NGO Sign Up</h2>
    <form>
      <label>
        NGO Name:
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
        Country:
        <input type="text" name="country" required />
      </label>
      <label>
        Field of Work:
        <input type="text" name="field" required />
      </label>
      <label>
        Description:
        <textarea name="description" required />
      </label>
      <input type="submit" value="Sign Up" />
    </form>
  </div>
  )
}

export default Ngosignup
