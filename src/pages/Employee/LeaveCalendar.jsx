

import React from 'react';
import '../../styles/LeaveCalendar.css';

export default function LeaveCalendar() {
  // ============================================
  // API INTEGRATION POINT - EMPLOYEE LEAVE CALENDAR DATA
  // ============================================
  // TODO: Fetch employee's leave calendar data
  // Example: fetch('YOUR_API_URL/employee/leave-calendar')
  
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const currentMonth = 0; // January (0-indexed)
  const currentYear = 2026;

  // Sample leave data - marks which dates have leaves
  const leaveData = {
    '2026-01-10': { type: 'Sick Leave', status: 'Pending' },
    '2026-01-11': { type: 'Sick Leave', status: 'Pending' },
    '2026-01-12': { type: 'Sick Leave', status: 'Pending' },
    '2026-01-15': { type: 'Annual Leave', status: 'Approved' },
    '2026-01-16': { type: 'Annual Leave', status: 'Approved' },
    '2026-01-17': { type: 'Annual Leave', status: 'Approved' },
    '2026-01-18': { type: 'Annual Leave', status: 'Approved' },
    '2026-01-19': { type: 'Annual Leave', status: 'Approved' },
    '2026-01-20': { type: 'Annual Leave', status: 'Approved' },
    '2026-01-26': { type: 'Holiday', status: 'Holiday', name: 'Republic Day' }
  };

  const upcomingLeaves = [
    { date: '2026-01-10', type: 'Sick Leave', days: 3, status: 'Pending' },
    { date: '2026-01-15', type: 'Annual Leave', days: 6, status: 'Approved' },
    { date: '2026-02-10', type: 'Casual Leave', days: 2, status: 'Approved' }
  ];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const leaveInfo = leaveData[dateStr];
      const isToday = day === 6; // Assuming today is 6th
      
      let dayClass = 'calendar-day';
      if (isToday) dayClass += ' today';
      if (leaveInfo) {
        if (leaveInfo.status === 'Approved') dayClass += ' approved-leave';
        else if (leaveInfo.status === 'Pending') dayClass += ' pending-leave';
        else if (leaveInfo.status === 'Holiday') dayClass += ' holiday';
      }

      days.push(
        <div key={day} className={dayClass} title={leaveInfo ? `${leaveInfo.type}${leaveInfo.name ? ' - ' + leaveInfo.name : ''}` : ''}>
          <span className="calendar-day-number">{day}</span>
          {leaveInfo && <span className="calendar-day-dot"></span>}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar-container">
      

      <div className="calendar-content">
        <div className="calendar-main-grid">
          <div className="calendar-view-section">
            <div className="calendar-controls">
              <button className="calendar-nav-btn">← Previous</button>
              <h2 className="calendar-month-title">{months[currentMonth]} {currentYear}</h2>
              <button className="calendar-nav-btn">Next →</button>
            </div>

            <div className="calendar-card">
              <div className="calendar-weekdays">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                  <div key={index} className="calendar-weekday">{day}</div>
                ))}
              </div>
              <div className="calendar-days-grid">
                {renderCalendar()}
              </div>
            </div>

            <div className="calendar-legend">
              <h3 className="legend-title">Legend</h3>
              <div className="legend-items">
                <div className="legend-item">
                  <span className="legend-dot approved"></span>
                  <span>Approved Leave</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot pending"></span>
                  <span>Pending Leave</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot holiday"></span>
                  <span>Public Holiday</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot today"></span>
                  <span>Today</span>
                </div>
              </div>
            </div>
          </div>

          <div className="calendar-sidebar">
            <div className="upcoming-leaves-card">
              <h3 className="sidebar-title">📅 Upcoming Leaves</h3>
              <div className="upcoming-leaves-list">
                {upcomingLeaves.map((leave, index) => (
                  <div key={index} className="upcoming-leave-item">
                    <div className="upcoming-leave-date">
                      <div className="leave-date-day">{new Date(leave.date).getDate()}</div>
                      <div className="leave-date-month">{months[new Date(leave.date).getMonth()].substring(0, 3)}</div>
                    </div>
                    <div className="upcoming-leave-info">
                      <p className="upcoming-leave-type">{leave.type}</p>
                      <p className="upcoming-leave-days">{leave.days} days</p>
                      <span className={`upcoming-status-badge status-${leave.status.toLowerCase()}`}>
                        {leave.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="calendar-stats-card">
              <h3 className="sidebar-title">📊 This Month Summary</h3>
              <div className="stats-list">
                <div className="stat-item">
                  <span className="stat-label">Total Leaves</span>
                  <span className="stat-value">9 days</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Approved</span>
                  <span className="stat-value approved-text">6 days</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Pending</span>
                  <span className="stat-value pending-text">3 days</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Holidays</span>
                  <span className="stat-value holiday-text">1 day</span>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}