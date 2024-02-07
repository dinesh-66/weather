import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignUp.css';
import email_icon from '../Assets/email.png';
import user_icon from '../Assets/user.png';
import pass_icon from '../Assets/password.png';

const LoginSignUp = () => {
  const navigate = useNavigate(); // Hook from react-router-dom for navigation
  const [action, setAction] = React.useState("Login");

  const handleLogin = () => {
    // Assuming authentication logic is handled here
    // Redirect to weather app
    navigate('/weather'); // Navigate to the weather app route
  };

  const handleForgotPassword = () => {
    // Navigate to the forgot password page
    navigate('/forgot-password'); // Navigate to the forgot password page route
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <img src={user_icon} alt=""/>
            <input type="text" placeholder="Enter your Name"/>
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt=""/>
          <input type="email" placeholder="Enter your Email_Id"/>
        </div>
        <div className="input">
          <img src={pass_icon} alt=""/>
          <input type="password" placeholder="Enter your Password"/>
        </div>
        {action === "Login" ? (
          <div className="forgot-password" onClick={handleForgotPassword}>
            Forgot Password? <span>Click here!</span>
          </div>
        ) : null}
      </div>
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}}>SignUp</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={handleLogin}>Login</div>
      </div>
    </div>
  );
};

export default LoginSignUp;
