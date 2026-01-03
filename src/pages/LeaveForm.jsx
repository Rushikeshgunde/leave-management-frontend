import React from 'react'
import '../styles/LeaveForm.css'
import { useState } from 'react';

const LeaveForm = () => {

 const [formData, setFormData] = useState({
    name: '',
    type: '',
    fromDate: '',
    toDate: '',
    reason: ''
  });

const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value 
    });
    
    setErrors({
      ...errors,
      [name]: '',
    })
};
    const validateForm = () => {
      let newErrors = {};

      if(!formData.name) newErrors.name = "Name is required";
      if(!formData.type) newErrors.type = "Leave type is required";
      if(!formData.fromDate) newErrors.fromDate = "From date is required";
      if(!formData.toDate) newErrors.toDate = "To date is required";
      if(!formData.reason) newErrors.reason = "Reason is required";
      setErrors(newErrors);

      return Object.keys(newErrors).length === 0;
    }

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // console.log("Leave date" , formData)
    // console.log(JSON.stringify(formData, null, 2));

    if(validateForm()) {
      console.log("leave date", formData)
      alert("Form submitted successfully!");
    }

    


    // Reset form after submission
    setFormData({
      name: '',
      type: '',
      fromDate: '',
      toDate: '',
      reason: ''
    });
  }


  return (
      <div className="leave-form-container">
      <div className="leave-form-wrapper">
        <h1 className="leave-form-title">Leave Application Form</h1>

        <form onSubmit={handleSubmit} className="leave-form-content">
          <div className="leave-form-group">
            <label className="leave-form-label" htmlFor="employeeName">
              <span className="leave-form-label-icon">👤</span>
              Employee Name
            </label>
            <input
              type="text"
              id="employeeName"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="leave-form-input"
              placeholder="Enter your full name"
            />
            {errors.name && <span className='' style={{ color: 'red' }}>{errors.name}</span>}
          </div>

          <div className="leave-form-group">
            <label className="leave-form-label" htmlFor="leaveType">
              <span className="leave-form-label-icon">📋</span>
              Leave Type
            </label>
            <select
              id="leaveType"
              name="type"
              value={formData.type}
              
              onChange={handleChange}
              className="leave-form-select"
            >
              <option value="">Select leave type</option>
              <option value="sick">Sick Leave</option>
              <option value="casual">Casual Leave</option>
              <option value="annual">Annual Leave</option>
              <option value="maternity">Maternity Leave</option>
              <option value="paternity">Paternity Leave</option>
              <option value="unpaid">Unpaid Leave</option>
            </select>
            {errors.type && <span className='' style={{ color: 'red' }}>{errors.type}</span>}
          </div>

          <div className="leave-form-date-row">
            <div className="leave-form-group">
              <label className="leave-form-label" htmlFor="fromDate">
                <span className="leave-form-label-icon">📅</span>
                From Date
              </label>
              <input
                type="date"
                id="fromDate"
                name="fromDate"
                value={formData.fromDate}
                onChange={handleChange}
                className="leave-form-input"
              />
              {errors.fromDate && <span className='' style={{ color: 'red' }}>{errors.fromDate}</span>}
            </div>

            <div className="leave-form-group">
              <label className="leave-form-label" htmlFor="toDate">
                <span className="leave-form-label-icon">📅</span>
                To Date
              </label>
              <input
                type="date"
                id="toDate"
                name="toDate"
                value={formData.toDate}
                onChange={handleChange}
                className="leave-form-input"
              />
              {errors.toDate && <span className='' style={{ color: 'red' }}>{errors.toDate}</span>}
            </div>
          </div>

          <div className="leave-form-group">
            <label className="leave-form-label" htmlFor="reason">
               <span className="leave-form-label-icon">✍️</span>
              Reason
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              rows="4"
              className="leave-form-textarea"
              placeholder="Please provide reason for leave"
            />
            {errors.reason && <span className='' style={{ color: 'red' }}>{errors.reason}</span>}
          </div>

          <button type="submit" className="leave-form-button">
            Submit Application 
            <span className="leave-form-button-icon">→</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default LeaveForm;