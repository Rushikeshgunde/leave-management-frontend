import React, { useState } from 'react';
import '../../styles/applyleaveForm.css';
export default function ApplyLeaveForm() {


 const [numberOfDays, setNumberOfDays] = useState(0);
  const storedUser = localStorage.getItem("user");
  // const loggedInUser = storedUser ? JSON.parse(storedUser) : null;

  // // Redirect if no user is found
  // if (!loggedInUser) {
  //   console.error("No logged-in user found!");
  //   navigate("/");
  //   return null; // stop rendering the form
  // }

const [formData, setformData]=useState({
  employee_id:'',
  employee_name:'',
  leave_type:'',
  from_date:'',
  to_date:'',
  leave_reason:'',
  numberOfDays,
  contact_number:''
})


const handleChange = (e) => {
  const { name, value } = e.target;

  setformData((prev) => {
    const updated = { ...prev, [name]: value };

    if (updated.from_date && updated.to_date) {
      const from = new Date(updated.from_date);
      const to = new Date(updated.to_date);

      const diffTime = to - from;
      const diffDays =
        Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

      setNumberOfDays(diffDays > 0 ? diffDays : 0);
    } else {
      setNumberOfDays(0);
    }

    return updated;
  });
};


// API INTEGRATION POINT - SUBMIT LEAVE REQUEST

  const handleSubmit = async(e) => {
    e.preventDefault();

    // const leavedata ={employee_id, employee_name, leave_type, from_date, to_date,  leave_reason, contact_number}

    try{
      const response= await fetch("http://localhost:8000/apply_leave",{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(formData)
      });

      const data = await response.json();

      if(response.ok){
        alert("leave applied successfully.")
        console.log(data)

        // reset form 
         setformData({
          employee_id:"",
          employee_name:"",
          leave_type:"",
          from_date:"",
          to_date:"",
          leave_reason:"",
          contact_number:"",
          numberOfDays:0
        })
        
      }else{
        alert(data.message || "Failed to apply leave")
       
      }
    }catch(error){
      console.error("error" , error);
      alert("Server error")
    }

    
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
              
              <form onSubmit={handleSubmit} className="apply-form-content">
              <div className='apply-form-group'>
                  <label className="apply-form-label" htmlFor="employeeName">
                    <span className="apply-label-icon">👤</span>
                    Employee Name
                  </label>
                  <input
                    type="text"
                    id="employeeName"
                    name="employee_name"
                    value={formData.employee_name}
                    onChange={handleChange}
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
                    name="leave_type"
                    value={formData.leave_type}
                    onChange={handleChange}
                    className="apply-form-select"
                  >
                    <option value="">Select leave type</option>
                    <option value="sick leave">🤒 Sick Leave</option>
                    <option value="casual leave">☕ Casual Leave</option>
                    <option value="annual leave">🌴 Annual Leave</option>
                    {/* <option value="unpaid leave">💼 Unpaid Leave</option> */}
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
                      name="from_date"
                      value={formData.from_date}
                      onChange={handleChange}
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
                      name="to_date"
                      value={formData.to_date}
                      onChange={handleChange}
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
                    value={numberOfDays}
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
                    name="leave_reason"
                    rows="4"
                    className="apply-form-textarea"
                    value={formData.leave_reason}
                    onChange={handleChange}
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
                    name="contact_number"
                    className="apply-form-input"
                    value={formData.contact_number}
                    onChange={handleChange}
                    placeholder="Enter contact number"
                  />
                </div>

                <div className="apply-form-actions">
                  <button type="button" className="apply-cancel-btn">
                    Cancel
                  </button>
                  <button type="submit" className="apply-submit-btn" >
                    <span>Submit Application</span>
                    <span className="apply-btn-icon">→</span>
                  </button>
                </div>
              </form>
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

            {/* <div className="apply-help-card">
              <h3 className="apply-sidebar-title">❓ Need Help?</h3>
              <p className="apply-help-text">Contact HR department for any queries regarding leave policies</p>
              <button className="apply-contact-btn">
                📧 Contact HR
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}