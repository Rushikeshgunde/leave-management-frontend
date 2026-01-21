// ------------------------------------------------------------------------------------------

import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import  AdminHeader from "../../component/AdminHeader";
import AdminSidebar from '../../component/AdminSidebar';

function AdminDashboard() {

const  [headerConfig, setHeaderConfig]= useState({
  title: "",
    subtitle: "",
    buttonText: "",
    showButton: false,
    onButtonClick: null
})


  return (
    <div className="admin-layout">
      <AdminHeader {...headerConfig} />
      <div className="admin-body">
        <AdminSidebar />  
        <main className="admin-content">
          <Outlet context={{setHeaderConfig}} />
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
