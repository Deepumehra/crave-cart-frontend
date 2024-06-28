import {
  Backdrop,
  Box,
  Card,
  CardHeader,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../../config/api";

// Fetch orders from the API
async function getAllOrders() {
  try {
    const response = await api.get("/api/order/getAllOrders");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch orders:", error);
    return [];
  }
}


const RestaurantRequestTable = ({ isDashboard, name }) => {
  const dispatch = useDispatch();
  const { menu} = useSelector((store) => store)
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const orders = await getAllOrders();
      setOrderData(orders);
      setLoading(false);
    }
    fetchData();
  }, []);
  console.log(orderData);

  return (
    <Box width={"100%"}>
      <Card className="mt-1">
        <CardHeader
          title={name}
          sx={{
            pt: 2,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
        />
        <TableContainer>
          <Table aria-label="table in dashboard">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Name</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Email</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Restaurant</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Order Status</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderData.slice(0, isDashboard ? 7 : orderData.length).map((item,id) => (
                <TableRow
                  hover
                  key={id}
                  sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                >
                  <TableCell
                    sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: "0.875rem !important",
                        }}
                      >
                        {item._id}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.customer.fullName}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.customer.email}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.restaurant.name}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.orderStatus || 10}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};

export default RestaurantRequestTable;
