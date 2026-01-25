import { useState,useEffect } from "react";
import "../../styles/LeaveApproval.css";
import { useOutletContext } from "react-router-dom";

function LeaveApproval() {

const {setHeaderConfig}=useOutletContext();

  useEffect(()=>{
    setHeaderConfig({
      title:"Leave Approval Management",
      subtitle: "Review and approve employee leave requests",
      // showButton: true
    })

    return()=>{
      setHeaderConfig({showButton:false})
    }
  },[])



  const [leaveRequests, setLeaveRequests] = useState([]);

  const updateStatus = (id, newStatus) => {
    setLeaveRequests((prev) =>
      prev.map((leave) =>
        leave.id === id ? { ...leave, status: newStatus } : leave
      )
    );
  };

  return (
    <div className="leave-approval-container">
      {/* <h1 className="leave-title">Leave Approval</h1>
      <p className="leave-subtitle">
        Review and approve employee leave requests
      </p> */}

      <div className="leave-table-wrapper">
        <table className="leave-table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Leave Type</th>
              <th>From</th>
              <th>To</th>
              <th>Days</th> 
              <th>Reason</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {leaveRequests.length === 0 ? (
              <tr>
                <td colSpan="7" className="no-data">
                  No leave requests found
                </td>
              </tr>
            ) : (
              leaveRequests.map((leave) => (
                <tr key={leave.id}>
                  <td>{leave.name}</td>
                  <td>{leave.type}</td>
                  <td>{leave.from}</td>
                  <td>{leave.to}</td>
                  <td>{leave.days} </td>
                  <td>{leave.reason}</td>
                  <td>
                    <span
                      className={`status-badge ${leave.status.toLowerCase()}`}
                    >
                      {leave.status}
                    </span>
                  </td>
                  <td className="action-cell">
                    <button
                      className="approve-btn"
                      onClick={() => updateStatus(leave.id, "Approved")}
                      disabled={leave.status !== "Pending"}
                    >
                      Approve
                    </button>
                    <button
                      className="reject-btn"
                      onClick={() => updateStatus(leave.id, "Rejected")}
                      disabled={leave.status !== "Pending"}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaveApproval;
