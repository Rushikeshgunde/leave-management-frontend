import React from 'react';
import './AdminHeader.css';

export default function AdminHeader() {
  return (
     <div className="dashboard-header">
            <div className="dashboard-header-content">
              <div>
                <h1 className="dashboard-title">Leave Management Dashboard</h1>
                <p className="dashboard-subtitle">Manage and track employee leave requests</p>
              </div>
              <button 
                className="dashboard-apply-btn"
                onClick={() => setShowForm(true)}
              >
                <span>➕</span> Apply for Leave
              </button>
            </div>
          </div>

  );
}
