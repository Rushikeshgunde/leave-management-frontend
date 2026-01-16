
import React, { useState, useEffect } from 'react';
import '../../styles/Myleavehistory.css';
export default function MyLeavehistory() {
  // ============================================
  // API INTEGRATION POINT - EMPLOYEE LEAVE HISTORY
  // ============================================
  // TODO: Replace with API call to fetch employee's leave history
  // const [leaves, setleaves] = useState([]);
  const [leavesData, setLeavesData] = useState([]);


  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // how many records per page

  const totalPages = Math.ceil(leavesData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentLeaves = leavesData.slice(startIndex, endIndex);



  const formatDate = (dateValue) => {
    if (!dateValue) return '';
    return dateValue.split('T')[0]; // removes time
  };


  useEffect(() => {
    fetch("http://localhost:8000/apply_leaves")
      .then(res => res.json())
      .then(data => setLeavesData(data))
  }, [])




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
                  <th>Id</th>
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
                {currentLeaves.map((leave) => (
                  <tr key={leave.id}>
                    <td>
                      {leave.id}
                    </td>
                    <td>
                      <span className="leave-type-badge">{leave.type}</span>
                    </td>
                    <td>{formatDate(leave.from)}</td>
                    <td>{formatDate(leave.to)}</td>
                    <td>
                      <span className="days-badge">{leave.days} days</span>
                    </td>
                    <td>
                      <span className="reason-text">{leave.reason}</span>
                    </td>
                    <td>{formatDate(leave.appliedOn)}</td>
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
            <button
              className="pagination-btn"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}


            >← Previous</button>
            <div className="pagination-numbers">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              {/* <button className="pagination-number">2</button>
              <button className="pagination-number">3</button> */}
            </div>
            <button className="pagination-btn"

              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
            >Next →</button>
          </div>
        </div>
      </div>
    </div>
  );
}