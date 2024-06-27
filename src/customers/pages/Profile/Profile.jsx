import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Favorite from "../Favorite/Favorite";
import Orders from "../Orders/Orders";
import UsersAddresses from "../UsersAdresses/UsersAddresses";
import CustomerEvents from "./CustomerEvents";
import CustomerNavbar from './CustomerNavbar';
import CustomerSidebar from "./CustomerSidebar";
import UserProfile from "./UserProfile";
const Profile = (nav) => {
  const dispatch = useDispatch();
  const [openSideBar, setOpenSideBar] = useState(false);
  const handleOpenSideBar = () => setOpenSideBar(true);
  const handleCloseSideBar = () => setOpenSideBar(false);
  return (
    <div className="lg:flex justify-between">
      <CustomerNavbar nav={nav} handleOpenSideBar={handleOpenSideBar}/>
      <div className="sticky h-[20vh] lg:w-[20%]">
        <CustomerSidebar handleClose={handleCloseSideBar} open={openSideBar}/>
      </div>
      {/* <Divider orientation="vertical" flexItem /> */}
      <div className="lg:w-[80%]">
        <Routes>
        <Route path="/" element={<UserProfile/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/address" element={<UsersAddresses/>} />
          <Route path='/payments' element={<Orders/>}/>
          <Route path="/favorites" element={<Favorite/>} />
          <Route path="/events" element={<CustomerEvents/>} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
