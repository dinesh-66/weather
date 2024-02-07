import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const navigate = useNavigate(); // Hook from react-router-dom for navigation

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the submission of the forgot password form here
    // You can add logic to send a reset password email or perform other actions
    // After handling the submission, navigate back to the login page
    navigate('/login');
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
