  import { useState, useEffect } from 'react';
import React from 'react';
import LeaveForm from './LeaveForm';
import '../../styles/Adminhome.css';
import { useOutletContext } from "react-router-dom";

export default function AdminDashboard() {
  // ============================================
  // STATE MANAGEMENT
  // const {setHeadingConfig}=useOutletContext();

   const { setHeaderConfig } = useOutletContext();
  const [showLeaveForm, setShowLeaveForm] = useState(false);

  useEffect(()=>{
    setHeaderConfig({
       title: "Admin Dashboard",
      subtitle: "Overview of leave and employee activity",
      // buttonText: "Apply Leave",
      // showButton: true,
      onButtonClick: () => setShowLeaveForm(true)
    });
      return () => {
      setHeaderConfig({ showButton: false });
    };
  }, []);
  
  // ============================================
  const [leaves, setLeaves] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeForm = () => setShowForm(false);

  // ============================================
  // API INTEGRATION POINT - FETCH LEAVES
  // ============================================
  const fetchleave = async () => {
    try {
      const response = await fetch("http://localhost:8000/leaves");
      const data = await response.json();
      setLeaves(data);
    } catch (error) {
      console.error("Error fetching leaves:", error);
    }
  };

  useEffect(() => {
    fetchleave();
  }, []);

  // ============================================
  // STATIC DATA
  // ============================================
  const leaveStats = [
    { title: 'Total Leaves', count: leaves.length || 25, icon: '📊', color: '#667eea' },
    { title: 'Pending', count: leaves.filter(l => l.status === 'Pending').length || 5, icon: '⏳', color: '#f59e0b' },
    { title: 'Approved', count: leaves.filter(l => l.status === 'Approved').length || 18, icon: '✅', color: '#10b981' },
    { title: 'Rejected', count: leaves.filter(l => l.status === 'Rejected').length || 2, icon: '❌', color: '#ef4444' }
  ];

  const upcomingLeaves = [
    { name: 'Emma Davis', date: '2026-01-20', type: 'Annual Leave' },
    { name: 'Alex Turner', date: '2026-01-22', type: 'Casual Leave' },
    { name: 'Lisa White', date: '2026-01-25', type: 'Sick Leave' }
  ];

  return (
    <div className="admin-dashboard-wrapper">
    

      {/* ================= MAIN CONTENT ================= */}
      <div className="admin-main-content">
        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>

        <div className="dashboard-container">
          

          {/* ✅ LEAVE FORM MODAL */}
          {showLeaveForm && (
             <LeaveForm 
             onClose={()=>setShowLeaveForm(false)} 
             refreshData={()=>console.log("refresh")}
              />
            )}

          <div className="dashboard-content">
            {/* Stats Cards */}
            <div className="stats-grid">
              {leaveStats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon" style={{ backgroundColor: `${stat.color}20` }}>
                    <span style={{ fontSize: '32px' }}>{stat.icon}</span>
                  </div>
                  <div className="stat-info">
                    <p className="stat-title">{stat.title}</p>
                    <h2 className="stat-count" style={{ color: stat.color }}>{stat.count}</h2>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Grid */}
            <div className="dashboard-grid">
              {/* Recent Leave Requests Table */}
              <div className="dashboard-section">
                <div className="section-header">
                  <h2 className="section-title">Recent Leave Requests</h2>
                  <button className="view-all-btn">View All →</button>
                </div>
                <div className="table-container">
                  <table className="leave-table">
                    <thead>
                      <tr>
                        <th>Employee</th>
                        <th>Leave Type</th>
                        <th>From Date</th>
                        <th>To Date</th>
                        <th>Reason</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaves.map((leave) => (
                        <tr key={leave.id}>
                          <td>
                            <div className="employee-cell">
                              <div className="employee-avatar">
                                {leave.name.split(' ')[0][0] +
                                  (leave.name.split(' ').length > 1
                                    ? leave.name.split(' ').slice(-1)[0][0]
                                    : "")}
                              </div>
                              <span>{leave.name}</span>
                            </div>
                          </td>
                          <td>{leave.type}</td>
                          <td>{leave.fromDate.split('T')[0]}</td>
                          <td>{leave.toDate.split('T')[0]}</td>
                          <td>{leave.reason}</td>
                          <td>
                            <span className={`status-badge status-${leave?.status?.toLowerCase()}`}>
                              {leave.status}
                            </span>
                          </td>
                          <td>
                            <button className="action-btn">View</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sidebar Section */}
              <div className="sidebar-section">
                {/* Upcoming Leaves */}
                <div className="upcoming-card">
                  <h3 className="upcoming-title">📅 Upcoming Leaves</h3>
                  <div className="upcoming-list">
                    {upcomingLeaves.map((leave, index) => (
                      <div key={index} className="upcoming-item">
                        <div className="upcoming-avatar">
                          {leave.name.charAt(0) +
                            (leave.name.split(' ').length > 1
                              ? leave.name.split(' ').slice(-1)[0][0]
                              : "")}
                        </div>
                        <div className="upcoming-info">
                          <p className="upcoming-name">{leave.name}</p>
                          <p className="upcoming-date">{leave.date}</p>
                          <p className="upcoming-type">{leave.type}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Calendar */}
                <div className="calendar-card">
                  <h3 className="calendar-title">🗓️ Leave Calendar</h3>
                  <div className="calendar-placeholder">
                    <div className="calendar-month">January 2026</div>
                    <div className="calendar-grid">
                      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                        <div key={i} className="calendar-day-header">{day}</div>
                      ))}
                      {[...Array(31)].map((_, i) => (
                        <div key={i} className={`calendar-day ${[9, 10, 11, 14, 15].includes(i + 1) ? 'has-leave' : ''}`}>
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}

