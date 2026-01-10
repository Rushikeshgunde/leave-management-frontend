import React, { useState, useEffect } from 'react';
import '../../styles/EmployeeManagement.css';
import AddEmployeeModal from "./AddEmployeeModal";


// ============================================
// EMPLOYEE MANAGEMENT COMPONENT
// ============================================


export default function EmployeeManagement() {
  // ============================================
  // STATE MANAGEMENT
  // ============================================
  const [employees, setEmployees] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  const [showAddModal, setShowAddModal] = useState(false);

  // ============================================
  // API INTEGRATION POINT - FETCH EMPLOYEES
  // ============================================
  // TODO: Replace with actual API call
  // const fetchEmployees = async () => {
  //   try {
  //     const response = await fetch('YOUR_API_URL/employees');
  //     const data = await response.json();
  //     setEmployees(data);
  //   } catch (error) {
  //     console.error('Error fetching employees:', error);
  //   }
  // };

  const fetchEmployees = () => {
    // Demo data
    const demoEmployees = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@company.com',
        department: 'Engineering',
        position: 'Senior Developer',
        phone: '+1 234-567-8900',
        joinDate: '2023-01-15',
        status: 'Active',
        leaves: { total: 20, used: 8, available: 12 }
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@company.com',
        department: 'Marketing',
        position: 'Marketing Manager',
        phone: '+1 234-567-8901',
        joinDate: '2022-06-20',
        status: 'Active',
        leaves: { total: 20, used: 12, available: 8 }
      },
      {
        id: 3,
        name: 'Mike Johnson',
        email: 'mike.johnson@company.com',
        department: 'Sales',
        position: 'Sales Executive',
        phone: '+1 234-567-8902',
        joinDate: '2023-03-10',
        status: 'Active',
        leaves: { total: 20, used: 5, available: 15 }
      },
      {
        id: 4,
        name: 'Sarah Williams',
        email: 'sarah.williams@company.com',
        department: 'HR',
        position: 'HR Specialist',
        phone: '+1 234-567-8903',
        joinDate: '2021-09-05',
        status: 'Active',
        leaves: { total: 20, used: 15, available: 5 }
      },
      {
        id: 5,
        name: 'David Brown',
        email: 'david.brown@company.com',
        department: 'Engineering',
        position: 'Junior Developer',
        phone: '+1 234-567-8904',
        joinDate: '2023-08-01',
        status: 'Inactive',
        leaves: { total: 20, used: 3, available: 17 }
      }
    ];
    setEmployees(demoEmployees);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // ============================================
  // FILTER AND SEARCH
  // ============================================
  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         emp.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = filterDepartment === 'All' || emp.department === filterDepartment;
    const matchesStatus = filterStatus === 'All' || emp.status === filterStatus;
    
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  // ============================================
  // HANDLERS
  // ============================================
  const handleAddEmployee = () => {
    setShowAddForm(true);
  };

  const handleEditEmployee = (employee) => {
    setSelectedEmployee(employee);
    setShowEditForm(true);
  };

  const handleDeleteEmployee = (employeeId) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      // TODO: API call to delete employee
      setEmployees(employees.filter(emp => emp.id !== employeeId));
      alert('Employee deleted successfully!');
    }
  };

  const handleViewDetails = (employee) => {
    setSelectedEmployee(employee);
    // You can show a details modal here
    alert(`Viewing details for ${employee.name}`);
  };

  return (
    <div className="employee-management-container">
      {/* Header */}
      {/* <div className="employee-header">
        <div className="employee-header-content">
          <div>
            <h1 className="employee-title">Employee Management</h1>
            <p className="employee-subtitle">Manage employee records and information</p>
          </div>
          <button className="add-employee-btn" onClick={handleAddEmployee}>
            ➕ Add Employee
          </button>
        </div>
      </div> */}
      <div className="employee-header">

       <button className="add-employee-btn" onClick={() => setShowAddModal(true)}>
            ➕ Add Employee
          </button>
      </div>

      {/* Stats Cards */}
      <div className="employee-stats-grid">
        <div className="employee-stat-card">
          <div className="stat-card-icon" style={{ backgroundColor: '#667eea20' }}>
            <span style={{ fontSize: '32px' }}>👥</span>
          </div>
          <div className="stat-card-info">
            <p className="stat-card-title">Total Employees</p>
            <h2 className="stat-card-count" style={{ color: '#667eea' }}>{employees.length}</h2>
          </div>
        </div>

        <div className="employee-stat-card">
          <div className="stat-card-icon" style={{ backgroundColor: '#10b98120' }}>
            <span style={{ fontSize: '32px' }}>✅</span>
          </div>
          <div className="stat-card-info">
            <p className="stat-card-title">Active</p>
            <h2 className="stat-card-count" style={{ color: '#10b981' }}>
              {employees.filter(e => e.status === 'Active').length}
            </h2>
          </div>
        </div>

        <div className="employee-stat-card">
          <div className="stat-card-icon" style={{ backgroundColor: '#f59e0b20' }}>
            <span style={{ fontSize: '32px' }}>⏸️</span>
          </div>
          <div className="stat-card-info">
            <p className="stat-card-title">Inactive</p>
            <h2 className="stat-card-count" style={{ color: '#f59e0b' }}>
              {employees.filter(e => e.status === 'Inactive').length}
            </h2>
          </div>
        </div>

        <div className="employee-stat-card">
          <div className="stat-card-icon" style={{ backgroundColor: '#ec489920' }}>
            <span style={{ fontSize: '32px' }}>🏢</span>
          </div>
          <div className="stat-card-info">
            <p className="stat-card-title">Departments</p>
            <h2 className="stat-card-count" style={{ color: '#ec4899' }}>
              {[...new Set(employees.map(e => e.department))].length}
            </h2>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="employee-filters-section">
        <div className="employee-filters">
          <div className="filter-group">
            <input
              type="text"
              className="search-input"
              placeholder="🔍 Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <select 
              className="filter-select"
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
            >
              <option value="All">All Departments</option>
              <option value="Engineering">Engineering</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
            </select>
          </div>

          <div className="filter-group">
            <select 
              className="filter-select"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="results-count">
          Showing {filteredEmployees.length} of {employees.length} employees
        </div>
      </div>

      {/* Employee Table */}
      <div className="employee-table-section">
        <div className="employee-table-container">
          <table className="employee-table">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Department</th>
                <th>Position</th>
                <th>Phone</th>
                <th>Join Date</th>
                <th>Leave Balance</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td>
                    <div className="employee-info-cell">
                      <div className="employee-avatar-cell">
                        {employee.name.split(' ')[0][0]}
                        {employee.name.split(' ').length > 1 
                          ? employee.name.split(' ').slice(-1)[0][0] 
                          : ''}
                      </div>
                      <div className="employee-details">
                        <p className="employee-name">{employee.name}</p>
                        <p className="employee-email">{employee.email}</p>
                      </div>
                    </div>
                  </td>
                  <td>{employee.department}</td>
                  <td>{employee.position}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.joinDate}</td>
                  <td>
                    <div className="leave-balance">
                      <span className="balance-text">
                        {employee.leaves.available}/{employee.leaves.total}
                      </span>
                      <div className="balance-bar">
                        <div 
                          className="balance-bar-fill"
                          style={{ 
                            width: `${(employee.leaves.available / employee.leaves.total) * 100}%`,
                            backgroundColor: employee.leaves.available < 5 ? '#ef4444' : '#10b981'
                          }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`employee-status-badge status-${employee.status.toLowerCase()}`}>
                      {employee.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="action-btn view-btn"
                        onClick={() => handleViewDetails(employee)}
                        title="View Details"
                      >
                        👁️
                      </button>
                      <button 
                        className="action-btn edit-btn"
                        onClick={() => handleEditEmployee(employee)}
                        title="Edit"
                      >
                        ✏️
                      </button>
                      <button 
                        className="action-btn delete-btn"
                        onClick={() => handleDeleteEmployee(employee.id)}
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredEmployees.length === 0 && (
            <div className="no-results">
              <p className="no-results-icon">🔍</p>
              <p className="no-results-text">No employees found</p>
              <p className="no-results-subtext">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>

      {/* Add Employee Modal */}
      {showAddModal && (
        <AddEmployeeModal 
          onClose={() => setShowAddModal(false)}
          onSuccess={fetchEmployees}
          
        />
      )}

      {/* Edit Employee Modal */}
      {showEditForm && (
        <EditEmployeeModal 
          employee={selectedEmployee}
          onClose={() => setShowEditForm(false)}
          onSuccess={fetchEmployees}
        />
      )}
    </div>
  );
}


// ============================================
// EDIT EMPLOYEE MODAL
// ============================================
function EditEmployeeModal({ employee, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    ...employee
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: API call to update employee
    console.log('Updating employee:', formData);
    alert('Employee updated successfully!');
    onSuccess();
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Edit Employee</h2>
          <button className="modal-close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email *</label>
              <input
                type="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Department *</label>
              <select
                name="department"
                className="form-select"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Position *</label>
              <input
                type="text"
                name="position"
                className="form-input"
                value={formData.position}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Phone *</label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Join Date *</label>
              <input
                type="date"
                name="joinDate"
                className="form-input"
                value={formData.joinDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Status</label>
            <select
              name="status"
              className="form-select"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="modal-footer">
          <button className="modal-cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="modal-submit-btn" onClick={handleSubmit}>
            Update Employee
          </button>
        </div>
      </div>
    </div>
  );
}