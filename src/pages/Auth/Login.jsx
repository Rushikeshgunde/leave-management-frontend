import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password validation
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user starts typing
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {
      email: '',
      password: ''
    };

    // Validate email
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // If there are errors, set them and return
    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    // If no errors, proceed with login
    // setIsLoading(true);

    // Simulate API call
    // setTimeout(() => {
    //   console.log('Login successful:', formData);
    //   alert('Login successful!');
    //   setIsLoading(false);

    // TODO: Add your API call here
    // Example:

    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password
      })
    });

    const data = await response.json();
    console.log("LOGIN RESPONSE 👉", data)


    // console.log(data)
    if (data.success) {

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", data.role.toLowerCase());

      alert("Login Successfully..")

      const role = data.role?.toLowerCase().trim();

      setTimeout(() => {
        if (role === "admin") {
          navigate("/admin");
        } else if (role === "employee") {
          navigate("/employee");
        }
      }, 200);
    };

    // })


  };

  return (
    <div className="login-page-container">
      {/* Background Shapes */}
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      <div className="bg-shape shape-3"></div>

      {/* Login Card */}
      <div className="login-card">
        {/* Left Side - Illustration */}
        <div className="login-left">
          <div className="illustration-container">
            <div className="illustration-circle"></div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/user-login-4268415-3551762.png"
              alt="Login Illustration"
              className="login-illustration"
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="login-right">
          <div className="login-form-container">
            {/* Header */}
            <div className="login-header">
              <h2 className="welcome-text">WELCOME BACK</h2>
              <h1 className="login-title">LOGIN PAGE</h1>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="login-form">

              {/* Role Input */}
              {/* <div className="input-group">
                <label className="input-label">Role</label>
                <div className={`input-wrapper ${errors.Admin ? 'error' : ''}`}>
                  <span className="input-icon">👤</span>
                  <select
                    name="Admin"
                    value={formData.Admin}
                    onChange={handleChange}
                    className="login-input"
                  >
                    <option value="">Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Employee">Employee</option>
                  </select>
                </div>
                {errors.Admin && (
                  <span className="error-message">{errors.Admin}</span>
                )}
              </div> */}
              {/* ------------------------------------------------------------------------------- */}

              {/* Email Input */}
              <div className="input-group">
                <label className="input-label">Email Address</label>
                <div className={`input-wrapper ${errors.email ? 'error' : ''}`}>
                  <span className="input-icon">📧</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="test123@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="login-input"
                  />
                </div>
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              {/* Password Input */}
              <div className="input-group">
                <label className="input-label">Password</label>
                <div className={`input-wrapper ${errors.password ? 'error' : ''}`}>
                  <span className="input-icon">🔒</span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="login-input"
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
                {errors.password && (
                  <span className="error-message">{errors.password}</span>
                )}
              </div>

              {/* Forgot Password */}
              <div className="forgot-password-container">
                <a href="#" className="forgot-link">Forgot password?</a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="signin-btn"
              // disabled={isLoading}
              >
                {/* {isLoading ? (
                  <div className="loader"></div>
                ) : (
                  'SIGN IN'
                )} */}
                Login
              </button>
            </form>

            {/* Footer */}
            <div className="login-footer">
              <p className="footer-text">
                DON'T HAVE AN ACCOUNT?
                <a href="#" className="create-account-link"> CREATE AN ACCOUNT</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}