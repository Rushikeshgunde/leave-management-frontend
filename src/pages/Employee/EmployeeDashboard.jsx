

import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import '../../styles/employeDashboard.css';

export default function EmployeeDashboard() {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef(null);

  // ============================================
  // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  // ============================================
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    if (showProfileMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProfileMenu]);

  // ============================================
  // API INTEGRATION POINT - LOGOUT
  // ============================================
  // TODO: Add logout API call here
  // Example:
  // const handleLogout = async () => {
  //   try {
  //     await fetch('YOUR_API_URL/logout', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       credentials: 'include'
  //     });
  //     // Clear local storage/session
  //     localStorage.removeItem('authToken');
  //     // Navigate to login
  //     navigate('/');
  //   } catch (error) {
  //     console.error('Logout failed:', error);
  //   }
  // };

  const handleLogout = () => {
    // Close the profile menu first
    setShowProfileMenu(false);
    
    // Show logout confirmation
    alert('Logout successful!');
    
    // Clear any stored authentication data
    // localStorage.removeItem('authToken');
    // sessionStorage.clear();
    
    // Navigate to login page
    navigate('/');
  };

  return (
    <div className="emp-dashboard-container">

      {/* ================= HEADER ================= */}
      <div className="emp-dashboard-header">
        <div className="emp-header-content">
          <div>
            <h1 className="emp-dashboard-title">
              Welcome Back, Rushikesh 👋
            </h1>
            <p className="emp-dashboard-subtitle">
              Here's your leave overview
            </p>
          </div>

          {/* ================= NAVIGATION ================= */}
          <div className="nav-tabs">
            <button className="nav-tab" onClick={() => navigate('/employee')}>
              🏠 Dashboard
            </button>

            <button
              className="nav-tab"
              onClick={() => navigate('/employee/my-leave-history')}
            >
              📋 My Leaves
            </button>

            <button
              className="nav-tab"
              onClick={() => navigate('/employee/leave-calendar')}
            >
              📅 Calendar
            </button>

            <button
              className="nav-tab"
              onClick={() => navigate('/employee/apply-leave')}
            >
              ➕ Apply Leave
            </button>

            {/* ================= PROFILE ================= */}
            <div className="profile-section" ref={profileRef}>
              <button 
                className="profile-icon-btn" 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              >
                <span className="profile-icon">👤</span>
                {/* <span className="profile-name">Rushikesh</span> */}
              </button>

              {showProfileMenu && (
                <div className="profile-dropdown">
                  <div className="profile-dropdown-header">
                    <div className="profile-avatar">RG</div>
                    <div className="profile-info">
                      <p className="profile-dropdown-name">Rushikesh Gunde</p>
                      <p className="profile-dropdown-email">rushi@company.com</p>
                    </div>
                  </div>
                  <div className="profile-dropdown-divider"></div>
                  
                  <button 
                    className="profile-dropdown-item"
                    onClick={() => {
                      navigate('/employee');
                      setShowProfileMenu(false);
                    }}
                  >
                    <span className="dropdown-item-icon">🏠</span>
                    <span>Dashboard</span>
                  </button>

                 

                  <button 
                    className="profile-dropdown-item"
                    onClick={() => {
                      navigate('/employee/profile');
                      setShowProfileMenu(false);
                    }}
                  >
                    <span className="dropdown-item-icon">👤</span>
                    <span>My Profile</span>
                  </button>

                  <div className="profile-dropdown-divider"></div>
                  
                  <button 
                    className="profile-dropdown-item logout-item"
                    onClick={handleLogout}
                  >
                    <span className="dropdown-item-icon">🚪</span>
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div> 
          </div>
        </div>
      </div>

      {/* ================= PAGE CONTENT ================= */}
      <div className="emp-dashboard-content">
        <Outlet />
      </div>

    </div>
  );
}