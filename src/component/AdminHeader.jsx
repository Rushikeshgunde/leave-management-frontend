import React from 'react';
import './adminheader.css';

export default function AdminHeader({title,subtitle,buttonText,showButton, onButtonClick}) {
  return (
     <div className="dashboard-header">
            <div className="dashboard-header-content">
              <div className='dashboard-header-title'>
                <h1 className="dashboard-title">{title} </h1>
                <p className="dashboard-subtitle">{subtitle} </p>
              </div>

              {
                showButton && (
              <button 
                className="dashboard-apply-btn"
                onClick={onButtonClick}
              >
                <span>➕</span> {buttonText}
              </button>
                )
              }
             
            </div>
          </div>

  );
}
