import { api } from "../../../config/api";
import { createOrderFailure, createOrderRequest, createOrderSuccess, getUsersOrdersFailure, getUsersOrdersRequest, getUsersOrdersSuccess } from "./ActionCreators";

export const createOrder = (reqData) => {
  
  return async (dispatch) => {
    dispatch(createOrderRequest());
    try {
      console.log("req data :",reqData);
      // Make the API call to create the order
      const response = await api.post('/api/order', reqData.order, {
        headers: {
          Authorization: `Bearer ${reqData.jwt}`,
        },
      });
      console.log(response.data.paymentLink);
      if (response.data.paymentLink) {
        // Redirect to the payment URL
        window.location.href = response.data.paymentLink.short_url;
      }
      
      dispatch(createOrderSuccess(response.data));
    } catch (error) {
      // Handle errors
      console.error("Error creating order:", error);
      dispatch(createOrderFailure(error));
    }
  };
};



export const getUsersOrders = (jwt) => {
  return async (dispatch) => {
    dispatch(getUsersOrdersRequest());
    try {
      const {data} = await api.get(`/api/order/user`,{
        headers: {
            Authorization: `Bearer ${jwt}`,
          },
      });
      console.log("users order ",data)
      dispatch(getUsersOrdersSuccess(data));
    } catch (error) {
      dispatch(getUsersOrdersFailure(error));
    }
  };
};
