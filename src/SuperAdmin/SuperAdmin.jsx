import React, { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { default as AdminNavbar } from "../Admin/AdminNavbar";
import RestaurantRequest from "./RestaurantRequest/RestaurantRequest";
import SuperAdminRestaurant from "./Restaurants/SuperAdminRestaurant";
import Customers from "./SuperAdminCustomerTable/Customers";
import SuperAdminSidebar from './SuperAdminSideBar';

const SuperAdmin = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const sidebarRef = useRef(null);

  const handleOpenSideBar = () => setOpenSideBar(true);
  const handleCloseSideBar = () => setOpenSideBar(false);

  // Function to handle clicks outside the sidebar
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      handleCloseSideBar();
    }
  };

  // Add event listeners for clicks
  useEffect(() => {
    if (openSideBar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSideBar]);

  return (
    <div>
      <AdminNavbar handleOpenSideBar={handleOpenSideBar} />
      <div className="lg:flex justify-between">
        <SuperAdminSidebar ref={sidebarRef} handleClose={handleCloseSideBar} open={openSideBar} />
        <div className="lg:w-[80vw] w-full">
          <Routes>
            <Route path="/restaurants" element={<SuperAdminRestaurant />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/restaurant-request" element={<RestaurantRequest />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default SuperAdmin;
