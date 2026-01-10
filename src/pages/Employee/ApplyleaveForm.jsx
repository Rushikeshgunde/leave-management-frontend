import React from 'react';
import '../../styles/applyleaveForm.css';
export default function ApplyLeaveForm() {
  // ============================================
  // API INTEGRATION POINT - SUBMIT LEAVE REQUEST
  // ============================================
  // TODO: Add form submission handler
  // Example:
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const response = await fetch('YOUR_API_URL/leave/apply', {
  //     method: 'POST',
  //     body: JSON.stringify(Object.fromEntries(formData)),
  //     headers: { 'Content-Type': 'application/json' }
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Leave application submitted');
  };

  // ============================================
  // API INTEGRATION POINT - EMPLOYEE LEAVE BALANCE
  // ============================================
  // TODO: Fetch employee's available leave balance
  // Example: fetch('YOUR_API_URL/employee/leave-balance')
  
  const leaveBalance = [
    { type: 'Annual Leave', available: 8 },
    { type: 'Sick Leave', available: 7 },
    { type: 'Casual Leave', available: 7 },
    { type: 'Maternity Leave', available: 90 }
  ];

  return (
    <div className="apply-leave-container">
     

      <div className="apply-leave-content">
        <div className="apply-leave-grid">
          <div className="apply-leave-form-section">
            <div className="apply-leave-form-card">
              <h2 className="apply-form-title">Leave Application Form</h2>
              
              <div className="apply-form-content">
              <div className='apply-form-group'>
                  <label className="apply-form-label" htmlFor="employeeName">
                    <span className="apply-label-icon">👤</span>
                    Employee Name
                  </label>
                  <input
                    type="text"
                    id="employeeName"
                    name="employeeName"
                    className="apply-form-input"
                    placeholder="Enter your full name"
                  />
              </div>

                <div className="apply-form-group">
                  <label className="apply-form-label" htmlFor="leaveType">
                    <span className="apply-label-icon">📋</span>
                    Leave Type
                  </label>
                  <select
                    id="leaveType"
                    name="leaveType"
                    className="apply-form-select"
                  >
                    <option value="">Select leave type</option>
                    <option value="sick">🤒 Sick Leave</option>
                    <option value="casual">☕ Casual Leave</option>
                    <option value="annual">🌴 Annual Leave</option>
                    <option value="unpaid">💼 Unpaid Leave</option>
                  </select>
                </div>

                <div className="apply-date-row">
                  <div className="apply-form-group">
                    <label className="apply-form-label" htmlFor="fromDate">
                      <span className="apply-label-icon">📅</span>
                      From Date
                    </label>
                    <input
                      type="date"
                      id="fromDate"
                      name="fromDate"
                      className="apply-form-input"
                    />
                  </div>

                  <div className="apply-form-group">
                    <label className="apply-form-label" htmlFor="toDate">
                      <span className="apply-label-icon">📅</span>
                      To Date
                    </label>
                    <input
                      type="date"
                      id="toDate"
                      name="toDate"
                      className="apply-form-input"
                    />
                  </div>
                </div>

                <div className="apply-form-group">
                  <label className="apply-form-label" htmlFor="days">
                    <span className="apply-label-icon">🗓️</span>
                    Number of Days
                  </label>
                  <input
                    type="number"
                    id="days"
                    name="days"
                    className="apply-form-input"
                    placeholder="Auto-calculated"
                    readOnly
                  />
                </div>

                <div className="apply-form-group">
                  <label className="apply-form-label" htmlFor="reason">
                    <span className="apply-label-icon">✍️</span>
                    Reason for Leave
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    rows="4"
                    className="apply-form-textarea"
                    placeholder="Please provide detailed reason for your leave request"
                  />
                </div>

                <div className="apply-form-group">
                  <label className="apply-form-label" htmlFor="contactNumber">
                    <span className="apply-label-icon">📞</span>
                    Contact Number During Leave
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    className="apply-form-input"
                    placeholder="Enter contact number"
                  />
                </div>

                
               

                <div className="apply-form-actions">
                  <button type="button" className="apply-cancel-btn">
                    Cancel
                  </button>
                  <button type="submit" className="apply-submit-btn" onClick={handleSubmit}>
                    <span>Submit Application</span>
                    <span className="apply-btn-icon">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="apply-leave-sidebar">
            <div className="apply-balance-card">
              <h3 className="apply-sidebar-title">📊 Available Leave Balance</h3>
              <div className="apply-balance-list">
                {leaveBalance.map((leave, index) => (
                  <div key={index} className="apply-balance-item">
                    <span className="apply-balance-type">{leave.type}</span>
                    <span className="apply-balance-value">{leave.available} days</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="apply-guidelines-card">
              <h3 className="apply-sidebar-title">📋 Leave Application Guidelines</h3>
              <div className="apply-guidelines-list">
                <div className="apply-guideline-item">
                  <span className="apply-guideline-icon">✓</span>
                  <p>Apply at least 3 days in advance for planned leaves</p>
                </div>
                <div className="apply-guideline-item">
                  <span className="apply-guideline-icon">✓</span>
                  <p>Provide valid reason for leave application</p>
                </div>
                <div className="apply-guideline-item">
                  <span className="apply-guideline-icon">✓</span>
                  <p>Medical certificate required for sick leave exceeding 3 days</p>
                </div>
                <div className="apply-guideline-item">
                  <span className="apply-guideline-icon">✓</span>
                  <p>Check team calendar before applying for leave</p>
                </div>
                <div className="apply-guideline-item">
                  <span className="apply-guideline-icon">✓</span>
                  <p>Inform your manager for emergency leaves</p>
                </div>
              </div>
            </div>

            <div className="apply-help-card">
              <h3 className="apply-sidebar-title">❓ Need Help?</h3>
              <p className="apply-help-text">Contact HR department for any queries regarding leave policies</p>
              <button className="apply-contact-btn">
                📧 Contact HR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}