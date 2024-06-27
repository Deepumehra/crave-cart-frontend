import CancelIcon from '@mui/icons-material/Cancel';
import { Button } from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCartAction } from "../../../State/Customers/Cart/cart.action";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const navigateToHome = () => navigate("/");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCartAction());
  }, []);

  return (
    <div className="min-h-screen  px-5">
      <div className="flex flex-col items-center justify-center h-[90vh]">
        <div className="box w-full lg:w-1/4 flex flex-col items-center rounded-md">
          <CancelIcon sx={{ fontSize: "5rem", color: red }} />
          <h1 className="py-5 text-2xl font-semibold">Order Cancel !</h1>
          <p className="py-3 text-center text-gray-400">
            Do You want to add more Items in your cart
          </p>
          <h4 className="py-3 text-center text-gray-400">
            Go Ahead
          </h4>
          <p className="py-2 text-center text-gray-200 text-lg">
            Have A Grate Day !
          </p>
          <Button
            variant="contained"
            className="my-5"
            sx={{ margin: "1rem 0rem" }}
            onClick={navigateToHome}
          >
            Go To Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
