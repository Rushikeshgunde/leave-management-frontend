
import React from 'react';
import '../../styles/Myleavehistory.css';
export default function MyLeavehistory() {
  // ============================================
  // API INTEGRATION POINT - EMPLOYEE LEAVE HISTORY
  // ============================================
  // TODO: Replace with API call to fetch employee's leave history
  // Example: fetch('YOUR_API_URL/employee/leave-history')
  
  const leaveHistory = [
    { id: 1, type: 'Annual Leave', from: '2026-01-15', to: '2026-01-20', days: 5, status: 'Approved', reason: 'Family vacation', appliedOn: '2026-01-05', approvedBy: 'Manager Name' },
    { id: 2, type: 'Sick Leave', from: '2026-01-10', to: '2026-01-12', days: 3, status: 'Pending', reason: 'Medical checkup', appliedOn: '2026-01-08', approvedBy: '-' },
    { id: 3, type: 'Casual Leave', from: '2025-12-20', to: '2025-12-21', days: 2, status: 'Approved', reason: 'Personal work', appliedOn: '2025-12-10', approvedBy: 'Manager Name' },
    { id: 4, type: 'Sick Leave', from: '2025-12-05', to: '2025-12-06', days: 2, status: 'Rejected', reason: 'Fever', appliedOn: '2025-12-03', approvedBy: 'Manager Name' },
    { id: 5, type: 'Annual Leave', from: '2025-11-15', to: '2025-11-18', days: 4, status: 'Approved', reason: 'Wedding ceremony', appliedOn: '2025-11-01', approvedBy: 'Manager Name' },
    { id: 6, type: 'Casual Leave', from: '2025-10-10', to: '2025-10-10', days: 1, status: 'Approved', reason: 'Festival', appliedOn: '2025-10-05', approvedBy: 'Manager Name' },
    { id: 7, type: 'Sick Leave', from: '2025-09-20', to: '2025-09-22', days: 3, status: 'Approved', reason: 'Health issues', appliedOn: '2025-09-19', approvedBy: 'Manager Name' }
  ];

  const filterOptions = ['All', 'Pending', 'Approved', 'Rejected'];
  const typeOptions = ['All Types', 'Annual Leave', 'Sick Leave', 'Casual Leave'];

  return (
    <div className="my-leaves-container">
      

      <div className="my-leaves-content">
        <div className="my-leaves-card">
          <div className="my-leaves-filters">
            <div className="filter-group">
              <label className="filter-label">Status:</label>
              <select className="filter-select">
                {filterOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <label className="filter-label">Leave Type:</label>
              <select className="filter-select">
                {typeOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <label className="filter-label">Search:</label>
              <input 
                type="text" 
                className="filter-search" 
                placeholder="Search by reason..." 
              />
            </div>
          </div>

          <div className="my-leaves-table-container">
            <table className="my-leaves-table">
              <thead>
                <tr>
                  <th>Leave Type</th>
                  <th>From Date</th>
                  <th>To Date</th>
                  <th>Days</th>
                  <th>Reason</th>
                  <th>Applied On</th>
                  <th>Status</th>
                  <th>Approved By</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {leaveHistory.map((leave) => (
                  <tr key={leave.id}>
                    <td>
                      <span className="leave-type-badge">{leave.type}</span>
                    </td>
                    <td>{leave.from}</td>
                    <td>{leave.to}</td>
                    <td>
                      <span className="days-badge">{leave.days} days</span>
                    </td>
                    <td>
                      <span className="reason-text">{leave.reason}</span>
                    </td>
                    <td>{leave.appliedOn}</td>
                    <td>
                      <span className={`my-status-badge my-status-${leave.status.toLowerCase()}`}>
                        {leave.status}
                      </span>
                    </td>
                    <td>{leave.approvedBy}</td>
                    <td>
                      <button className="my-view-btn">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="my-leaves-pagination">
            <button className="pagination-btn">← Previous</button>
            <div className="pagination-numbers">
              <button className="pagination-number active">1</button>
              <button className="pagination-number">2</button>
              <button className="pagination-number">3</button>
            </div>
            <button className="pagination-btn">Next →</button>
          </div>
        </div>
      </div>
    </div>
  );
}