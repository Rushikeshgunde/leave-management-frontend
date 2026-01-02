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

  const handeChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value 
    }); 
  };

  const habdleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Leave date" , formData)

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

        <form onSubmit={habdleSubmit} className="leave-form-content">
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
              onChange={handeChange}
              className="leave-form-input"
              placeholder="Enter your full name"
            />
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
              
              onChange={handeChange}
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
                onChange={handeChange}
                className="leave-form-input"
              />
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
                onChange={handeChange}
                className="leave-form-input"
              />
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
              onChange={handeChange}
              rows="4"
              className="leave-form-textarea"
              placeholder="Please provide reason for leave"
            />
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

export default LeaveForm