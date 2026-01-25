// ============================================
// ADD EMPLOYEE MODAL
// ============================================

import React, { useState } from 'react';
import '../../styles/AddEmployeeModal.css';
import axios from 'axios';


function AddEmployeeModal({ onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    position: '',
    phone: '',
    joinDate: '',
    status: 'Active'
  });

  const [error, setError] = useState({})



  // Handle Input Change
  const handleChange = (e) => {

    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    });
    setError({ ...error, [name]: "" })  // clear error on typing
  };

  // Validation Function..
  const validate = () => {
    const newError = {};
    if (!formData.name) newError.name = "name is required"
    if (!formData.email) newError.email = "email is required"
    if (!formData.department) newError.department = "department is required"
    if (!formData.position) newError.position = "position is required"
    if (!formData.phone) newError.phone = "phone is required"
    if (!formData.joinDate) newError.joinDate = "joinDate is required"
    // if(!formData.status) newError.status ="status is required"

    setError(newError);

    return Object.keys(newError).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return
    // TODO: API call to add employee

    try {
      const response = await axios.post("http://localhost:8000/addemployee", formData)

      alert(response.data.message)
      onSuccess();
      onClose();

    }
     catch (err) {
      console.error(err)
        // ✅ Show exact backend error if available
        if(err.response && err.response.data && err.response.data.error){
          alert(err.response.data.error)
        }else{
          alert("something went wrong")
        }
    }

    console.log('Adding employee:', formData);
    

  };

  return (
    <div className="modal-overlay" >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Add New Employee</h2>
          <button className="modal-close-btn" onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="modal-body">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Enter Fullname"
                value={formData.name}
                onChange={handleChange}
              // required
              />
              {error.name && <span className='error'>{error.name} </span>}
            </div>

            <div className="form-group">
              <label className="form-label">Email *</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="email@company.com"
                value={formData.email}
                onChange={handleChange}

              />
              {error.email && <span className='error'>{error.email} </span>}
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
              // required
              >
                <option value="">Select Department</option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="HR">HR</option>
                {/* <option value="Finance">Finance</option>  */}
              </select>
              {error.department && <span className='error'>{error.department} </span>}
            </div>

            <div className="form-group">
              <label className="form-label">Position *</label>
              <input
                type="text"
                name="position"
                className="form-input"
                placeholder="Senior Developer"
                value={formData.position}
                onChange={handleChange}
              // required
              />
              {error.position && <span className='error'>{error.position} </span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Phone *</label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                placeholder="+91"
                value={formData.phone}
                onChange={handleChange}
              // required
              />
              {error.phone && <span className='error'>{error.phone} </span>}
            </div>

            <div className="form-group">
              <label className="form-label">Join Date *</label>
              <input
                type="date"
                name="joinDate"
                className="form-input"
                value={formData.joinDate}
                onChange={handleChange}
              // required
              />
              {error.joinDate && <span className='error'>{error.joinDate} </span>}
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
          <div className="modal-footer">
          <button className="modal-cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="modal-submit-btn" type='submit'>
            Add Employee
          </button>
        </div>
    </form>

        
      </div>
    </div>
  );
}

export default AddEmployeeModal;