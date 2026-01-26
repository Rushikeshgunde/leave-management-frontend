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

  // const updateStatus = (id, newStatus) => {
  //   setLeaveRequests((prev) =>
  //     prev.map((leave) =>
  //       leave.id === id ? { ...leave, status: newStatus } : leave
  //     )
  //   );
  // };

  useEffect(()=>{
    fetchLeaveRequests();
  },[])
  // ----------------------------------------------------------------------------------
  const fetchLeaveRequests = async () => {
  try {
    const res = await fetch("http://localhost:8000/admin/leave-requests");
    const data = await res.json();
    if (Array.isArray(data)) setLeaveRequests(data);
    else setLeaveRequests([]);
  } catch (err) {
    console.error(err);
    setLeaveRequests([]);
  }
};


 const updateStatus = async (id, status) => {
  await fetch(`http://localhost:8000/admin/leave/${id}/status`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  fetchLeaveRequests(); // refresh after update
};

  // ----------------------------------------------------------------------------------

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
                  <td>{leave.employee_name}</td>
                  <td>{leave.leave_type}</td>
                  <td>{leave.from_date.split('T')[0]}</td>
                  <td>{leave.to_date.split('T')[0]}</td>
                  <td>{leave.number_of_days} </td>
                  <td>{leave.leave_reason}</td>
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
