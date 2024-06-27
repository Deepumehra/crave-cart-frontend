import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminNavbar = ({handleOpenSideBar,nav}) => {
  const navigate = useNavigate();
  const { auth, cart } = useSelector((store) => store);
  const dispatch = useDispatch();

  return (
    <div className="lg:hidden px-5 z-50 py-[.8rem] bg-[#242B2F]  lg:px-20 flex justify-between sticky top-0">
      <div className="flex items-center space-x-4">
        <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
          <IconButton onClick={handleOpenSideBar}><MenuIcon/></IconButton>
          <li className=" text-center logo font-semibold text-gray-300 text-2xl">
            
          </li>
        </div>
        {/* <li className="font font-semibold">Home</li> */}
      </div>
    </div>
  );
};

export default AdminNavbar;
