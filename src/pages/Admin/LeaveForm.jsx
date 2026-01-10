import React, { useState } from 'react';
import '../styles/LeaveForm.css';
import axios from "axios";

// ✅ PROPS FROM DASHBOARD: closeForm, refreshData
const LeaveForm = ({ closeForm, refreshData }) => {

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    fromDate: "",
    toDate: "",
    reason: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors({ ...errors, [name]: "" }); // Clear error on typing
  };

  // ✅ VALIDATION FUNCTION
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.type) newErrors.type = "Leave type is required";
    if (!formData.fromDate) newErrors.fromDate = "From date is required";
    if (!formData.toDate) newErrors.toDate = "To date is required";
    if (!formData.reason) newErrors.reason = "Reason is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ✅ SUBMIT HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await axios.post("http://localhost:8000/leave", formData);
      alert("Leave applied successfully!");

      setFormData({
        name: "",
        type: "",
        fromDate: "",
        toDate: "",
        reason: ""
      });

      if (refreshData) refreshData();
      if (closeForm) closeForm();

    } catch (err) {
      console.error("Error applying leave:", err);
      alert("Failed to apply leave");
    }
  };

  return (
    // ✅ OVERLAY
    <div className="modal-overlay" >
      {/* ✅ STOP CLICK PROPAGATION */}
      <div className="leave-form-wrapper" onClick={e => e.stopPropagation()}>

        {/* HEADER */}
        <div className="leave-form-header">
          <h2>Leave Application</h2>
          <button
            type="button"
            className="close-btn"
            onClick={closeForm}
          >
            ✖
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          <div className="leave-form-group">
            <label>👤 Employee Name</label>
            <input type="text"
              name="name"
              placeholder='Enter employee name'
              value={formData.name}
              onChange={handleChange} />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="leave-form-group">
            <label>📋 Leave Type</label>
            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="">Select leave type</option>
              <option value="sick Leave">Sick Leave</option>
              <option value="casual Leave">Casual Leave</option>
              <option value="annual Leave">Annual Leave</option>
              <option value="maternity Leave">Maternity Leave</option>
              <option value="paternity Leave">Paternity Leave</option>
              <option value="unpaid Leave">Unpaid Leave</option>
            </select>
            {errors.type && <span className="error">{errors.type}</span>}
          </div>

          <div className="leave-form-date-row">
            <div className="leave-form-group">
              <label>📅 From Date</label>
              <input type="date" name="fromDate" value={formData.fromDate} onChange={handleChange} />
              {errors.fromDate && <span className="error">{errors.fromDate}</span>}
            </div>

            <div className="leave-form-group">
              <label>📅 To Date</label>
              <input type="date" name="toDate" value={formData.toDate} onChange={handleChange} />
              {errors.toDate && <span className="error">{errors.toDate}</span>}
            </div>
          </div>

          <div className="leave-form-group">
            <label>✍️ Reason</label>
            <textarea name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder='Enter reason for leave'
              rows="4"
            />
            {errors.reason && <span className="error">{errors.reason}</span>}
          </div>

          <button type="submit" className="leave-form-button">Submit →</button>
        </form>
      </div>
    </div>
  );
};

export default LeaveForm;
