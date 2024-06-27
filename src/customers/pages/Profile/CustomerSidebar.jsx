import Event from '@mui/icons-material/Event';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Home from "@mui/icons-material/Home";
import Logout from '@mui/icons-material/Logout';
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useMediaQuery } from '@mui/material';
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from "../../../State/Authentication/Action";
const menu = [
    { title: "Orders", icon: <ShoppingBagIcon /> },
    { title: "Favorites", icon: <FavoriteIcon /> },
    { title: "Address", icon: <Home /> },
    { title: "Events", icon: <Event /> },
    { title: "Logout", icon: <Logout/> },
  ];
  
  export default function CustomerSidebar({handleClose,open}){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    const handleNavigate = (item) => {
        navigate(`/my-profile/${item.title.toLowerCase()}`);
        if (item.title === "Logout") {
        handleLogout();
        }
    };
    const isSmallScreen = useMediaQuery("(max-width:1080px)");
    return (
        <div className=" ">
            <React.Fragment>
                <Drawer
                sx={{ zIndex: 1 }}
                anchor={"left"}
                open={open}
                style={{ marginTop: 30, marginLeft: 20 }}
                onClose={handleClose}
                variant={isSmallScreen ? "temporary" : "permanent"}
                // variant="persistent"
                >
                <div className="w-[70vw] lg:w-[20vw] group h-[100vh] flex flex-col justify-center text-xl space-y-[1.65rem] mt-12">
                    
                    {menu.map((item, i) => (
                    <>
                        <div
                        onClick={() => handleNavigate(item)}
                        className="px-5 flex items-center space-x-5 cursor-pointer lg:text-xl sm:text-lg"
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
    )

  }