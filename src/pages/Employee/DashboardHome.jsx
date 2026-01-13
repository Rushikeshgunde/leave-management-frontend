import React from 'react';
import '../../styles/employeDashboard.css';
import { useState } from 'react';
import {Outlet, useNavigate } from 'react-router-dom';


export default function EmployeeDashboard() {
  

const navigate = useNavigate();

//  const [activeTab, setActiveTab] = useState('dashboard');
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // const [upcomingLeaves, setUpcomingLeaves] = useState([]);

  const upcomingLeaves = [
  { id: 1, name: "Rushi Gunde", date: "2026-01-20", type: "Annual Leave" },
  { id: 2, name: "Ajinkya Jondhale", date: "2026-01-22", type: "Casual Leave" },
  { id: 3, name: "Akash kadam", date: "2026-01-25", type: "Sick Leave" }
];



  const handleLogout = () => {
    // ============================================
    // API INTEGRATION POINT - LOGOUT
    // ============================================
    // TODO: Add logout API call here
    // Example: fetch('YOUR_API_URL/logout', { method: 'POST' })
    console.log('Logging out...');
    alert('Logout successful!');
    navigate('/');
  };

  // ============================================
  // API INTEGRATION POINT - EMPLOYEE LEAVE BALANCE
  // ============================================
  // TODO: Replace with API call to fetch employee leave balance
  // Example: fetch('YOUR_API_URL/employee/leave-balance')
  
  const leaveBalance = [
    { type: 'Annual Leave', total: 12, used: 3, available: 9, color: '#667eea' },
    { type: 'Sick Leave', total: 6, used: 3, available: 3, color: '#10b981' },
    { type: 'Casual Leave', total: 6, used: 5, available: 1, color: '#f59e0b' },
    { type: 'Total Leave', total: 24, used: 11, available: 13, color: '#ec4899' }
  ];

  // ============================================
  // API INTEGRATION POINT - RECENT LEAVE REQUESTS
  // ============================================
  // TODO: Replace with API call to fetch employee's recent requests
  // Example: fetch('YOUR_API_URL/employee/recent-requests')
  
  const recentRequests = [
    { id: 1, type: 'Annual Leave', from: '2026-01-15', to: '2026-01-20', days: 5, status: 'Approved', appliedOn: '2026-01-05' },
    { id: 2, type: 'Sick Leave', from: '2026-01-10', to: '2026-01-12', days: 3, status: 'Pending', appliedOn: '2026-01-08' },
    { id: 3, type: 'Casual Leave', from: '2025-12-20', to: '2025-12-21', days: 2, status: 'Approved', appliedOn: '2025-12-10' }
  ];

  // ============================================
  // API INTEGRATION POINT - UPCOMING HOLIDAYS
  // ============================================
  // TODO: Replace with API call to fetch company holidays
  // Example: fetch('YOUR_API_URL/holidays')
  
  const upcomingHolidays = [
    { name: 'Republic Day', date: '2026-01-26', day: 'Monday' },
    { name: 'Holi', date: '2026-03-14', day: 'Saturday' },
    { name: 'Good Friday', date: '2026-04-03', day: 'Friday' }
  ];

  return (

    
    <div className="emp-dashboard-container">
     

{/* ----------------------------------------------------------------------------------- */}

      <div className="emp-dashboard-content">

  {/* <Outlet/> */}

</div>

        <div className="emp-leave-balance-section">
          <h2 className="emp-section-title">Leave Balance</h2>
          <div className="emp-balance-grid">
            {leaveBalance.map((leave, index) => (
              <div key={index} className="emp-balance-card">
                <div className="emp-balance-header">
                  <h3 className="emp-balance-type">{leave.type}</h3>
                  <div className="emp-balance-icon" style={{ backgroundColor: `${leave.color}20`, color: leave.color }}>
                    📊
                  </div>
                </div>
                <div className="emp-balance-details">
                  <div className="emp-balance-row">
                    <span className="emp-balance-label">Total:</span>
                    <span className="emp-balance-value">{leave.total} days</span>
                  </div>
                  <div className="emp-balance-row">
                    <span className="emp-balance-label">Used:</span>
                    <span className="emp-balance-value">{leave.used} days</span>
                  </div>
                  <div className="emp-balance-row highlight">
                    <span className="emp-balance-label">Available:</span>
                    <span className="emp-balance-value" style={{ color: leave.color }}>{leave.available} days</span>
                  </div>
                </div>
                <div className="emp-progress-bar">
                  <div 
                    className="emp-progress-fill" 
                    style={{ 
                      width: `${(leave.used / leave.total) * 100}%`,
                      backgroundColor: leave.color 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="emp-main-grid">


          
          <div className="emp-requests-section">
            <div className="emp-section-header">
              <h2 className="emp-section-title">Recent Leave Requests</h2>
              <button className="emp-view-all-btn">View All →</button>
            </div>
            <div className="emp-requests-list">
              {recentRequests.map((request) => (
                <div key={request.id} className="emp-request-card">
                  <div className="emp-request-header">
                    <div>
                      <h4 className="emp-request-type">{request.type}</h4>
                      <p className="emp-request-date">{request.from} to {request.to}</p>
                    </div>
                    <span className={`emp-status-badge emp-status-${request.status.toLowerCase()}`}>
                      {request.status}
                    </span>
                  </div>
                  <div className="emp-request-footer">
                    <span className="emp-request-days">🗓️ {request.days} days</span>
                    <span className="emp-request-applied">Applied: {request.appliedOn}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="emp-sidebar">
{/* ------------------------------------------------------------------------------------- */}
               {/* Add Calender  */}
                 <div className="sidebar-section">
            {/* Upcoming Leaves Card */}
            <div className="upcoming-card">
              <h3 className="upcoming-title">📅 Upcoming Leaves</h3>
              <div className="upcoming-list">
                {upcomingLeaves.map((leave, index) => (
                  <div key={index} className="upcoming-item">
                    <div className="upcoming-avatar">
                       {leave.name.split(' ')[0][0]}
                        {leave.name.split(' ').length > 1 
                          ? leave.name.split(' ').slice(-1)[0][0] 
                          : ''}
                    </div>
                    <div className="upcoming-info">
                      <div className="upcoming-name">{leave.name}</div>
                      <div className="upcoming-date">{leave.date}</div>
                      <div className="upcoming-type">{leave.type}</div>
                    </div>
                  </div>
                ))}
              </div>
              </div>
     </div>
{/* ------------------------------------------------------------------------------------- */}

            {/* <div className="emp-quick-actions-card">
              <h3 className="emp-sidebar-title">⚡ Quick Actions</h3>
              <div className="emp-actions-list">
                <button className="emp-action-btn">
                  <span className="emp-action-icon">📝</span>
                  <span>Apply Leave</span>
                </button>
                <button className="emp-action-btn">
                  <span className="emp-action-icon">📋</span>
                  <span>My Leaves</span>
                </button>
                <button className="emp-action-btn">
                  <span className="emp-action-icon">📅</span>
                  <span>Leave Calendar</span>
                </button>
                <button className="emp-action-btn">
                  <span className="emp-action-icon">📊</span>
                  <span>Leave Report</span>
                </button>
              </div>
            </div> */}
          </div>
        </div>
        </div>
      
    
  );
}