import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AdminRouters from "./AdminRouters";
import CustomerRoutes from "./CustomerRoutes";
import SuperAdminRoutes from './SuperAdminRoutes';
const Routers = () => {
  const { auth } = useSelector((store) => store);

  return (
    <>
   
    <Routes>
      
      <Route
        path="/admin/restaurant/*"
        element={<AdminRouters/>}
      />
      <Route path='/super-admin/*' element={<SuperAdminRoutes/>}/>
      <Route path="/*" element={<CustomerRoutes />} />
    </Routes>
    </>
    
  );
};

export default Routers;
