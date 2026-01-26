import { useState, useEffect } from "react";
import "../../styles/LeaveReports.css";
import { useOutletContext } from "react-router-dom";

function LeaveReports() {
  const { setHeaderConfig } = useOutletContext();

  const [reports, setReports] = useState([]);
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    setHeaderConfig({
      title: "Leave Report Management",
      subtitle: "Overview of employee leave statistics",
    });

    return () => setHeaderConfig({});
  }, []);

  // Summary stats
  const leaveStats = [
    {
      title: 'Pending',
      count: leaves.filter(l => l.status === 'Pending').length,
      icon: '⏳',
      color: '#f59e0b'
    },
    {
      title: 'Approved',
      count: leaves.filter(l => l.status === 'Approved').length,
      icon: '✅',
      color: '#10b981'
    },
    {
      title: 'Rejected',
      count: leaves.filter(l => l.status === 'Rejected').length,
      icon: '❌',
      color: '#ef4444'
    }
  ];

  // Fetch reports from backend
  
    const fetchReports = async () => {
      try {
        const res = await fetch("http://localhost:8000/admin/leave-report");
        const data = await res.json();
        const safeData = Array.isArray(data) ? data : [];
        setReports(safeData);
        setLeaves(safeData);
      } catch (err) {
        console.error("Report fetch error:", err);
        setReports([]);
        setLeaves([]);
      }
    };
useEffect(() => {
    fetchReports();
  }, []);

  return (
    <div className="leave-reports-container">
      {/* Summary Cards */}
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
            {reports.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No leave records found
                </td>
              </tr>
            ) : (
              reports.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.department}</td>
                  <td>{item.leaveType}</td>
                  <td>{item.days}</td>
                  <td>
                    <span className={`report-status ${item.status.toLowerCase()}`}>
                      {item.status}
                    </span>
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

export default LeaveReports;




// import { useState, useEffect } from "react";
// import "../../styles/LeaveReports.css";
// import { useOutletContext } from "react-router-dom";

// function LeaveReports() {

//   const { setHeaderConfig } = useOutletContext();

//   // Stores report rows coming from backend API
//   const [reports, setReports] = useState([]);

//   // Same data used for summary stats (Approved / Pending / Rejected)
//   const [leaves, setLeaves] = useState([]);



//   useEffect(() => {
//     setHeaderConfig({
//       title: "Leave Report Management",
//       subtitle: "Overview of employee leave statistics",
//       // showButton: true
//     })
//   }, [])

//   const leaveStats = [
//     // {
//     //   title: 'Total Leaves',
//     //   count: leaves.filter(l => l.status === 'pending').length,
//     //   icon: '📊',
//     //   color: '#667eea'
//     // },
//     {
//       title: 'Pending',
//       count: leaves.filter(l => l.status === 'Pending').length,
//       icon: '⏳',
//       color: '#f59e0b'
//     },

//     {
//       title: 'Approved',
//       count: leaves.filter(l => l.status === 'Approved').length,
//       icon: '✅',
//       color: '#10b981'
//     },

//     {
//       title: 'Rejected',
//       count: leaves.filter(l => l.status === 'Rejected').length,
//       icon: '❌',
//       color: '#ef4444'
//     }
//   ];
//   // ====================================================================================
//   // Fetch leave report
//  useEffect(() => {
//   const fetchReports = async () => {
//     try {
//       const res = await fetch("http://localhost:8000/admin/leave-report");
//       const data = await res.json();

//       // ✅ Ensure the response is an array
//       const safeData = Array.isArray(data) ? data : [];

//       setReports(safeData); // table rows
//       setLeaves(safeData);  // stats calculation
//     } catch (err) {
//       console.error("Report fetch error:", err);
//       setReports([]);
//       setLeaves([]);
//     }
//   };

//   fetchReports();
// }, []);


//   // ====================================================================================


//   // const [reports] = useState([
//   //   {
//   //     id: 1,
//   //     name: "Rahul Sharma",
//   //     department: "Engineering",
//   //     leaveType: "Casual Leave",
//   //     days: 3,
//   //     status: "Approved",
//   //   },
//   //   {
//   //     id: 2,
//   //     name: "Priya Patil",
//   //     department: "HR",
//   //     leaveType: "Sick Leave",
//   //     days: 1,
//   //     status: "Rejected",
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Amit Verma",
//   //     department: "Sales",
//   //     leaveType: "Paid Leave",
//   //     days: 5,
//   //     status: "Approved",
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Amit Verma",
//   //     department: "Sales",
//   //     leaveType: "Paid Leave",
//   //     days: 5,
//   //     status: "Approved",
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Amit Verma",
//   //     department: "Sales",
//   //     leaveType: "Paid Leave",
//   //     days: 5,
//   //     status: "Approved",
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Amit Verma",
//   //     department: "Sales",
//   //     leaveType: "Paid Leave",
//   //     days: 5,
//   //     status: "Approved",
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Amit Verma",
//   //     department: "Sales",
//   //     leaveType: "Paid Leave",
//   //     days: 5,
//   //     status: "Approved",
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Amit Verma",
//   //     department: "Sales",
//   //     leaveType: "Paid Leave",
//   //     days: 5,
//   //     status: "Approved",
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Amit Verma",
//   //     department: "Sales",
//   //     leaveType: "Paid Leave",
//   //     days: 5,
//   //     status: "Approved",
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Amit Verma",
//   //     department: "Sales",
//   //     leaveType: "Paid Leave",
//   //     days: 5,
//   //     status: "Approved",
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Amit Verma",
//   //     department: "Sales",
//   //     leaveType: "Paid Leave",
//   //     days: 5,
//   //     status: "Approved",
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Amit Verma",
//   //     department: "Sales",
//   //     leaveType: "Paid Leave",
//   //     days: 5,
//   //     status: "Approved",
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Amit Verma",
//   //     department: "Sales",
//   //     leaveType: "Paid Leave",
//   //     days: 5,
//   //     status: "Approved",
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Amit Verma",
//   //     department: "Sales",
//   //     leaveType: "Paid Leave",
//   //     days: 5,
//   //     status: "Approved",
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Amit Verma",
//   //     department: "Sales",
//   //     leaveType: "Paid Leave",
//   //     days: 5,
//   //     status: "Approved",
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Amit Verma",
//   //     department: "Sales",
//   //     leaveType: "Paid Leave",
//   //     days: 5,
//   //     status: "Approved",
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Amit Verma",
//   //     department: "Sales",
//   //     leaveType: "Paid Leave",
//   //     days: 5,
//   //     status: "Approved",
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Amit Verma",
//   //     department: "Sales",
//   //     leaveType: "Paid Leave",
//   //     days: 5,
//   //     status: "Approved",
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Amit Verma",
//   //     department: "Sales",
//   //     leaveType: "Paid Leave",
//   //     days: 5,
//   //     status: "Approved",
//   //   },
//   // ]);

//   return (
//     <div className="leave-reports-container">
//       {/* Header */}
//       {/* <div className="leave-reports-header">
//         <h1 className="leave-reports-title">Leave Reports</h1>
//         <p className="leave-reports-subtitle">
//           Overview of employee leave statistics
//         </p>
//       </div> */}

//       {/* Summary Cards */}
//       {/* <div className="leave-summary-grid"> */}
//       {/* <div className="summary-card approved">
//           <div className="stat-icon" style={{ backgroundColor: `${stat.color}20` }}>
//                     <span style={{ fontSize: '32px' }}>{stat.icon}</span>
//                   </div>
//           <h3>Approved Leaves</h3>
//           <p>18</p>
//         </div> */}
//       {/* <div className="summary-card pending">
//           <h3>Pending Leaves</h3>
//           <p>6</p>
//         </div> */}
//       {/* <div className="summary-card rejected">
//           <h3>Rejected Leaves</h3>
//           <p>4</p>
//         </div> */}

//       <div className="stats-grid">
//         {leaveStats.map((stat, index) => (
//           <div key={index} className="stat-card">
//             <div className="stat-icon" style={{ backgroundColor: `${stat.color}20` }}>
//               <span style={{ fontSize: '32px' }}>{stat.icon}</span>
//             </div>
//             <div className="stat-info">
//               <p className="stat-title">{stat.title}</p>
//               <h2 className="stat-count" style={{ color: stat.color }}>{stat.count}</h2>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* </div> */}

//       {/* Table */}
//       <div className="leave-reports-table-wrapper">
//         <table className="leave-reports-table">
//           <thead>
//             <tr>
//               <th>Employee</th>
//               <th>Department</th>
//               <th>Leave Type</th>
//               <th>Days</th>
//               <th>Status</th>
//             </tr>
//           </thead>

//           <tbody>
//             {reports.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.name}</td>
//                 <td>{item.department}</td>
//                 <td>{item.leaveType}</td>
//                 <td>{item.days}</td>
//                 <td>
//                   <span
//                     className={`report-status ${item.status.toLowerCase()}`}
//                   >
//                     {item.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default LeaveReports;
