import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

// Employee
import EmployeeDashboard from './pages/Employee/EmployeeDashboard';
import ApplyLeaveForm from './pages/Employee/ApplyleaveForm';
import MyLeavehistory from './pages/Employee/Myleavehistory';
import LeaveCalendar from './pages/Employee/LeaveCalendar';
import DashboardHome from './pages/Employee/DashboardHome';

// Admin
import AdminDashboard from './pages/Admin/AdminDashboard';
import Adminhome from './pages/Admin/Adminhome';
import EmployeeManagement from './pages/Admin/EmployeeManagement';
import LeaveApproval from './pages/Admin/LeaveApproval';
import LeaveReports from './pages/Admin/LeaveReports';

// Auth
import Login from './pages/Auth/Login';
import ProtectedRoute from './component/ProtectedRoute';

function App() {
  return (
    <Routes>

      {/* Login */}
      <Route path="/" element={<Login />} />

      {/* ================= EMPLOYEE ROUTES ================= */}
      <Route
        path="/employee"
        element={
          <ProtectedRoute allowedRole="employee">
            <EmployeeDashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="apply-leave" element={<ApplyLeaveForm />} />
        <Route path="my-leave-history" element={<MyLeavehistory />} />
        <Route path="leave-calendar" element={<LeaveCalendar />} />
      </Route>

      {/* ================= ADMIN ROUTES ================= */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<Adminhome />} />
        <Route path="employees" element={<EmployeeManagement />} />
        <Route path="leave-requests" element={<LeaveApproval />} />
        <Route path="reports" element={<LeaveReports />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default App;
