// import React, { useEffect, useState } from "react";

// const LeaveList = () => {
//   const [leaves, setLeaves] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8000/leaves")
//       .then(res => res.json())
//       .then(data => setLeaves(data))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div>
//       <h2>Leave Applications</h2>

//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Type</th>
//             <th>From</th>
//             <th>To</th>
//             <th>Reason</th>
//           </tr>
//         </thead>

//         <tbody>
//           {leaves.map((leave) => (
//             <tr key={leave.id}>
//               <td>{leave.name}</td>
//               <td>{leave.type}</td>
//               <td>{leave.fromDate}</td>
//               <td>{leave.toDate}</td>
//               <td>{leave.reason}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default LeaveList;
