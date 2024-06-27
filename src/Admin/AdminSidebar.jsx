import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import * as React from "react";

import { Dashboard, Home } from "@mui/icons-material";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CategoryIcon from '@mui/icons-material/Category';
import EventIcon from "@mui/icons-material/Event";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LogoutIcon from "@mui/icons-material/Logout";
import ShopTwoIcon from "@mui/icons-material/ShopTwo";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../State/Authentication/Action";

const menu = [
  {title:"Home",icon:<Home/>, path:'/*'},
  { title: "Dashboard", icon: <Dashboard />, path: "/" },
  { title: "Orders", icon: <ShoppingBagIcon />, path: "/orders" },
  { title: "Menu", icon: <ShopTwoIcon />, path: "/menu" },
  { title: "Food Category", icon: <CategoryIcon />, path: "/category" },
  { title: "Ingredients", icon: <FastfoodIcon />, path: "/ingredients" },
  { title: "Events", icon: <EventIcon />, path: "/event" },
  { title: "Details", icon: <AdminPanelSettingsIcon />, path: "/details" },
  { title: "Logout", icon: <LogoutIcon />, path: "/" },
  
];
export default function AdminSidebar({ handleClose, open }) {
  const isSmallScreen = useMediaQuery("(max-width:1080px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {restaurant}=useSelector(store=>store);


  const handleNavigate = (item) => {
    if(item.path==='/*'){
      navigate('/');
    }
    else{
      navigate(`/admin/restaurant${item.path}`);
      if (item.title === "Logout") {
        navigate("/");
        dispatch(logout());
      } else if (item.title === "Restaurants") {
        navigate("/admin");
      }
      handleClose()
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
          <div className="w-[70vw] lg:w-[20vw] group h-[100vh] flex flex-col justify-center text-xl space-y-[1.65rem]">
            
            {menu.map((item, i) => (
              <>
                <div
                  onClick={() => handleNavigate(item)}
                  className="px-5 flex items-center space-x-5 cursor-pointer"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </div>
               {i!==menu.length-1 && <Divider />}
              </>
            ))}
          </div>

        </Drawer>
      </React.Fragment>
    </div>
  );
}
