import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../component/adminsidebar.css';

export default function AdminSidebar() {

  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (
    <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2 className="sidebar-logo">🏢 HR Portal</h2>
        <button
          className="sidebar-close-btn"
          onClick={() => setSidebarOpen(false)}
        >
          ✕
        </button>
      </div>

      <nav className="sidebar-nav">

        <div className="nav-item active" onClick={() => navigate("/admin")}>
          <span className="nav-icon">📊</span>
          <span className="nav-text">Dashboard</span>
        </div>

        <div className="nav-item" onClick={() => navigate("/admin/employees")}>
          <span className="nav-icon">👥</span>
          <span className="nav-text">Employees</span>
        </div>

        <div className="nav-item" onClick={() => navigate("/admin/leave-requests")}>
          <span className="nav-icon">📋</span>
          <span className="nav-text">Leave Requests</span>
        </div>

        <div className="nav-item" onClick={() => navigate("/admin/reports")}>
          <span className="nav-icon">📈</span>
          <span className="nav-text">Reports</span>
        </div>

        {/* <div className="nav-item" onClick={() => navigate("/admin/settings")}>
          <span className="nav-icon">⚙️</span>
          <span className="nav-text">Settings</span>
        </div> */}
      </nav >

      <div className="sidebar-footer">
        <button className="logout-sidebar-btn">
          <span className="nav-icon">🚪</span>
          <span className="nav-text">Logout</span>
        </button>
      </div>
    </aside>

  );
}
