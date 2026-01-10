import { useState } from "react";
import "../../styles/LeaveReports.css";

function LeaveReports() {
  const [reports] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      department: "Engineering",
      leaveType: "Casual Leave",
      days: 3,
      status: "Approved",
    },
    {
      id: 2,
      name: "Priya Patil",
      department: "HR",
      leaveType: "Sick Leave",
      days: 1,
      status: "Rejected",
    },
    {
      id: 3,
      name: "Amit Verma",
      department: "Sales",
      leaveType: "Paid Leave",
      days: 5,
      status: "Approved",
    },
    {
      id: 3,
      name: "Amit Verma",
      department: "Sales",
      leaveType: "Paid Leave",
      days: 5,
      status: "Approved",
    },
    {
      id: 3,
      name: "Amit Verma",
      department: "Sales",
      leaveType: "Paid Leave",
      days: 5,
      status: "Approved",
    },
    {
      id: 3,
      name: "Amit Verma",
      department: "Sales",
      leaveType: "Paid Leave",
      days: 5,
      status: "Approved",
    },
    {
      id: 3,
      name: "Amit Verma",
      department: "Sales",
      leaveType: "Paid Leave",
      days: 5,
      status: "Approved",
    },
    {
      id: 3,
      name: "Amit Verma",
      department: "Sales",
      leaveType: "Paid Leave",
      days: 5,
      status: "Approved",
    },
    {
      id: 3,
      name: "Amit Verma",
      department: "Sales",
      leaveType: "Paid Leave",
      days: 5,
      status: "Approved",
    },
    {
      id: 3,
      name: "Amit Verma",
      department: "Sales",
      leaveType: "Paid Leave",
      days: 5,
      status: "Approved",
    },
    {
      id: 3,
      name: "Amit Verma",
      department: "Sales",
      leaveType: "Paid Leave",
      days: 5,
      status: "Approved",
    },
    {
      id: 3,
      name: "Amit Verma",
      department: "Sales",
      leaveType: "Paid Leave",
      days: 5,
      status: "Approved",
    },
    {
      id: 3,
      name: "Amit Verma",
      department: "Sales",
      leaveType: "Paid Leave",
      days: 5,
      status: "Approved",
    },
    {
      id: 3,
      name: "Amit Verma",
      department: "Sales",
      leaveType: "Paid Leave",
      days: 5,
      status: "Approved",
    },
    {
      id: 3,
      name: "Amit Verma",
      department: "Sales",
      leaveType: "Paid Leave",
      days: 5,
      status: "Approved",
    },
    {
      id: 3,
      name: "Amit Verma",
      department: "Sales",
      leaveType: "Paid Leave",
      days: 5,
      status: "Approved",
    },
    {
      id: 3,
      name: "Amit Verma",
      department: "Sales",
      leaveType: "Paid Leave",
      days: 5,
      status: "Approved",
    },
    {
      id: 3,
      name: "Amit Verma",
      department: "Sales",
      leaveType: "Paid Leave",
      days: 5,
      status: "Approved",
    },
    {
      id: 3,
      name: "Amit Verma",
      department: "Sales",
      leaveType: "Paid Leave",
      days: 5,
      status: "Approved",
    },
  ]);

  return (
    <div className="leave-reports-container">
      {/* Header */}
      <div className="leave-reports-header">
        <h1 className="leave-reports-title">Leave Reports</h1>
        <p className="leave-reports-subtitle">
          Overview of employee leave statistics
        </p>
      </div>

      {/* Summary Cards */}
      <div className="leave-summary-grid">
        <div className="summary-card approved">
          <h3>Approved Leaves</h3>
          <p>18</p>
        </div>
        <div className="summary-card pending">
          <h3>Pending Leaves</h3>
          <p>6</p>
        </div>
        <div className="summary-card rejected">
          <h3>Rejected Leaves</h3>
          <p>4</p>
        </div>
      </div>

      {/* Table */}
      <div className="leave-reports-table-wrapper">
        <table className="leave-reports-table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Department</th>
              <th>Leave Type</th>
              <th>Days</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.department}</td>
                <td>{item.leaveType}</td>
                <td>{item.days}</td>
                <td>
                  <span
                    className={`report-status ${item.status.toLowerCase()}`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaveReports;
