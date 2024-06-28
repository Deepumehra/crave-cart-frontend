import AddCircleIcon from '@mui/icons-material/AddCircle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from "@mui/icons-material/Logout";
import ShopTwoIcon from "@mui/icons-material/ShopTwo";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useMediaQuery } from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { logout } from "../State/Authentication/Action";
const menu = [

  {title:"Home", icon:<HomeIcon/>,path:'/home'},
  { title: "Restaurants", icon: <ShoppingBagIcon />, path: "/restaurants"},
  { title: "Customers", icon: <ShopTwoIcon />, path: "/customers"},
  { title: "Orders", icon: <AddCircleIcon />, path: "/restaurant-request"},
  { title:"Payments ",icon:<AttachMoneyIcon/> , path:"/payment"},
  { title: "Logout", icon: <LogoutIcon />, path: "/"},
];
export default function SuperAdminSidebar({ handleClose, open }) {
  const [openSideBar, setOpenSideBar] = useState(false);
  const handleOpenSideBar = () => setOpenSideBar(true);
  const isSmallScreen = useMediaQuery("(max-width:1080px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams()
  // console.log("restaurantId ",id)

  const handleNavigate = (item) => {
    navigate(`/super-admin${item.path}`);
    if (item.title === "Logout") {
      navigate("/");
      dispatch(logout());
    }
    if(item.title==="Home"){
      navigate('/');
    }
  };

  return (
    <div className=" ">
      <React.Fragment>
        <Drawer
          sx={{ zIndex: 1 }}
          anchor={"left"}
          open={open}
          onClose={handleClose}
          variant={isSmallScreen ? "temporary" : "permanent"}
          // variant="persistent"
        >
          <div className="w-[50vw] lg:w-[20vw] group h-[100vh] flex flex-col justify-center text-xl space-y-8">
            <Divider verticle />
            {menu.map((item, i) => (
              <>
                <div
                  onClick={() => handleNavigate(item)}
                  className="px-5 flex items-center space-x-5 cursor-pointer"
                  key={i}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                <Divider />
              </>
            ))}
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
