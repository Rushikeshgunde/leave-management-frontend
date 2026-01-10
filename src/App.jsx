import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import Employee components
import EmployeeDashboard from './pages/Employee/EmployeeDashboard';
import ApplyLeaveForm from './pages/Employee/ApplyleaveForm';
import MyLeavehistory from './pages/Employee/Myleavehistory';
import LeaveCalendar from './pages/Employee/LeaveCalendar';
import DashboardHome from './pages/Employee/DashboardHome';

// Import Admin components
import AdminDashboard from './pages/Admin/AdminDashboard';
import Adminhome from './pages/Admin/Adminhome';
import EmployeeManagement from './pages/Admin/EmployeeManagement';
import LeaveApproval from './pages/Admin/LeaveApproval';
import LeaveReports from './pages/Admin/LeaveReports';


function App() {
  return (
    <Routes>
      {/* Redirect root */}
      {/* <Route path="/" element={<Navigate to="/employee" replace />} />
      <Route path="/employee" element={<EmployeeDashboard />}> */}

      {/* DashboardHome is the default route */}
      
      {/* <Route index element={<DashboardHome />} /> */}
      {/* Employee layout route */}
        {/* <Route path="apply-leave" element={<ApplyLeaveForm />} />
        <Route path="my-leave-history" element={<MyLeavehistory />} />
        <Route path="leave-calendar" element={<LeaveCalendar />} /> */}
      {/* </Route> */}
{/* ================================================================================== */}
      {/* Admin routes */}
      <Route path="/admin" element={<AdminDashboard />}>
        <Route index element={<Adminhome />} />
        <Route path="employees" element={<EmployeeManagement />} />
        <Route path="leave-requests" element={<LeaveApproval />} />
        <Route path="reports" element={<LeaveReports />} />

      </Route>

    </Routes>
  );
}

export default App;
