  // import { useState, useEffect } from 'react';
  // import React from 'react';
  // // import LeaveForm from './pages/admim/LeaveForm';
  // import '../../styles/AdminDashboard.css';

  // export default function LeaveDashboard() {
  //   // ============================================
  //   // API INTEGRATION POINT - LEAVE STATISTICS
  //   const [leaves, setLeaves] = useState([]);
  //   const [showForm, setShowForm] = useState(false);


  //     const closeForm = () => setShowForm(false);

  //   // ============================================
  //   const fetchleave=async()=>{
  //     try{
  //       const response=await fetch("http://localhost:8000/leaves");
  //       const data=await response.json();
  //       setLeaves(data);
  //     }catch(error){
  //       console.error("Error fetching leaves:",error);
  //     }

  //   };

  //   useEffect(()=>{
  //     fetchleave();
  //   },[]);

  //   // ------------------------------------------------------------------------------------------

  //   // useEffect(() => {
  //   //   fetch('http://localhost:8080/leaves')
  //   //     .then(response => response.json())
  //   //     .then(data => setLeaves(data))
  //   //     .catch(error => console.error('Error fetching leave statistics:', error));
  //   // }, []);
    
  //   const leaveStats = [
  //     { title: 'Total Leaves', count: 25, icon: '📊', color: '#667eea' },
  //     { title: 'Pending', count: 5, icon: '⏳', color: '#f59e0b' },
  //     { title: 'Approved', count: 18, icon: '✅', color: '#10b981' },
  //     { title: 'Rejected', count: 2, icon: '❌', color: '#ef4444' }
  //   ];

  //   // -----------------------------------------------------------------------------------------
  // // -----------------------------------------------------------------------------------------
  //   // ============================================
  //   // API INTEGRATION POINT - RECENT LEAVE REQUESTS
  //   // ============================================

  //   useEffect(() => {
  //     fetch("http://localhost:8000/leaves")
  //       .then(res => res.json())
  //       .then(data => setLeaves(data))
  //       .catch(err => console.log(err));
  //   }, []);

  // // ------------------------------------------------------------------------------------------

  //   // useEffect(() => {
  //   //   fetch('YOUR_API_URL/recent-leaves')
  //   //     .then(response => response.json())
  //   //     .then(data => setRecentLeaves(data))
  //   //     .catch(error => console.error('Error fetching recent leaves:', error));
  //   // }, []);
    
  //   // const recentLeaves = [
  //   //   { id: 1, name: 'John Doe Smithx', type: 'Sick Leave', from: '2026-01-10', to: '2026-01-12', status: 'Pending' },
  //   //   { id: 2, name: 'Jane Smith', type: 'Annual Leave', from: '2026-01-15', to: '2026-01-20', status: 'Approved' },
  //   //   { id: 3, name: 'Mike Johnson', type: 'Casual Leave', from: '2026-01-08', to: '2026-01-09', status: 'Approved' },
    
  //   // ];

  //   // ============================================
  //   // API INTEGRATION POINT - UPCOMING LEAVES
  //   // ============================================
  //   // TODO: Replace this dummy data with API call
  //   // Example:
  //   // const [upcomingLeaves, setUpcomingLeaves] = useState([]);
  //   // useEffect(() => {
  //   //   fetch('YOUR_API_URL/upcoming-leaves')
  //   //     .then(response => response.json())
  //   //     .then(data => setUpcomingLeaves(data))
  //   //     .catch(error => console.error('Error fetching upcoming leaves:', error));
  //   // }, []);
    
  //   const upcomingLeaves = [
  //     { name: 'Emma Davis', date: '2026-01-20', type: 'Annual Leave' },
  //     { name: 'Alex Turner', date: '2026-01-22', type: 'Casual Leave' },
  //     { name: 'Lisa White', date: '2026-01-25', type: 'Sick Leave' }
  //   ];

  //   return (
  //     <div className="dashboard-container">
  //       <div className="dashboard-header">
  //         <div className="dashboard-header-content">
  //           <div>
  //             <h1 className="dashboard-title">Leave Management Dashboard</h1>
  //             <p className="dashboard-subtitle">Manage and track employee leave requests</p>
  //           </div>
  //           <button className="dashboard-apply-btn"
  //           onClick={() => setShowForm(true)}
  //           >
              
  //             <span>➕</span> Apply for Leave
  //           </button>
  //         </div>
  //       </div>

  // {/* ✅ LEAVE FORM MODAL */}

  // { showForm && <LeaveForm  closeForm={closeForm} refreshData={fetchleave} /> }
  //       <div className="dashboard-content">
  //         <div className="stats-grid">
  //           {leaveStats.map((stat, index) => (
  //             <div key={index} className="stat-card">
  //               <div className="stat-icon" style={{ backgroundColor: `${stat.color}20` }}>
  //                 <span style={{ fontSize: '32px' }}>{stat.icon}</span>
  //               </div>
  //               <div className="stat-info">
  //                 <p className="stat-title">{stat.title}</p>
  //                 <h2 className="stat-count" style={{ color: stat.color }}>{stat.count}</h2>
  //               </div>
  //             </div>
  //           ))}
  //         </div>

  //         <div className="dashboard-grid">
  //           <div className="dashboard-section">
  //             <div className="section-header">
  //               <h2 className="section-title">Recent Leave Requests</h2>
  //               <button className="view-all-btn">View All →</button>
  //             </div>
  //             <div className="table-container">
  //               <table className="leave-table">
  //                 <thead>
  //                   <tr>
  //                     <th>Employee</th>
  //                     <th>Leave Type</th>
  //                     <th>FromDate</th>
  //                     <th>ToDate</th>
  //                     <th>Reason</th>
  //                     {/* <th>Action</th> */}
  //                   </tr>
  //                 </thead>
  //                 <tbody>
  //                   {leaves.map((leave) => (
  //                     <tr  key={leave.id}>
  //                       <td>
  //                         <div className="employee-cell">
  //                           <div className="employee-avatar">
  //                             {leave.name.split(' ')[0][0]+
  //                             (leave.name.split('').length>1
  //                             ? leave.name.split(' ').slice(-1)[0][0]
  //                             :"")}
                
  //                             </div>
  //                           <span>{leave.name}</span>
  //                         </div>
  //                       </td>
  //                       <td>{leave.type}</td>
  //                       <td>{leave.fromDate.split('T')[0]}</td>
  //                       <td>{leave.toDate.split('T')[0]}</td>
  //                       <td>
  //                         <span className={`status-badge status-${leave?.status?.toLowerCase()}`}>
  //                           {leave.reason}
  //                         </span>
  //                       </td>
  //                       {/* <td>
  //                         <button className="action-btn">View</button>
  //                       </td> */}
  //                     </tr>
  //                   ))}
  //                 </tbody>
  //               </table>
  //             </div>
  //           </div>

  //           <div className="sidebar-section">
  //             <div className="upcoming-card">
  //               <h3 className="upcoming-title">📅 Upcoming Leaves</h3>
  //               <div className="upcoming-list">
  //                 {upcomingLeaves.map((leave, index) => (
  //                   <div key={index} className="upcoming-item">
  //                     <div className="upcoming-avatar">
  //                       {leave.name.charAt(0)[0][0]+
  //                       (leave.name.split('').length>1
  //                       ? leave.name.split(' ').slice(-1)[0][0]
  //                       :"")
  //                       }
  //                       </div>
  //                     <div className="upcoming-info">
  //                       <p className="upcoming-name">{leave.name}</p>
  //                       <p className="upcoming-date">{leave.date}</p>
  //                       <p className="upcoming-type">{leave.type}</p>
  //                     </div>
  //                   </div>
  //                 ))}
  //               </div>
  //             </div>

  //             <div className="calendar-card">
  //               <h3 className="calendar-title">🗓️ Leave Calendar</h3>
  //               <div className="calendar-placeholder">
  //                 <div className="calendar-month">January 2026</div>
  //                 <div className="calendar-grid">
  //                   {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
  //                     <div key={i} className="calendar-day-header">{day}</div>
  //                   ))}
  //                   {[...Array(31)].map((_, i) => (
  //                     <div key={i} className={`calendar-day ${[9, 10, 11, 14, 15].includes(i + 1) ? 'has-leave' : ''}`}>
  //                       {i + 1}
  //                     </div>
  //                   ))}
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // ------------------------------------------------------------------------------------------

import { Outlet } from 'react-router-dom';
import  AdminHeader from "../../component/AdminHeader";
;
import AdminSidebar from '../../component/AdminSidebar';

function AdminDashboard() {
  return (
    <div className="admin-layout">
      <AdminHeader />
      <div className="admin-body">
        <AdminSidebar />  
        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
