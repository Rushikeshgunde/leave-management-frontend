import React from 'react'
import '../styles/LeaveForm.css'

const LeaveForm = () => {
  return (
      <div className="leave-form-container">
      <div className="leave-form-wrapper">
        <h1 className="leave-form-title">Leave Application Form</h1>
        
        <div className="leave-form-content">
          <div className="leave-form-group">
            <label className="leave-form-label" htmlFor="employeeName">
              <span className="leave-form-label-icon">👤</span>
              Employee Name
            </label>
            <input
              type="text"
              id="employeeName"
              name="employeeName"
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
              name="leaveType"
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
              rows="4"
              className="leave-form-textarea"
              placeholder="Please provide reason for leave"
            />
          </div>

          <button className="leave-form-button">
            Submit Application 
            <span className="leave-form-button-icon">→</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LeaveForm