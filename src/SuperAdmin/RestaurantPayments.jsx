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
import { api } from "../config/api";

// Fetch orders from the API
async function getAllPayments() {
  try {
    const response = await api.get("/api/order/getAllPayments");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch orders:", error);
    return [];
  }
}
const RestaurantPayments = ({name}) => {
  const [paymentData, setPaymentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const payments = await getAllPayments();
      setPaymentData(payments);
      setLoading(false);
    }
    fetchData();
  }, []);
  console.log("Payment Data : ",paymentData);
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
                <TableCell sx={{ textAlign: "center" }}>Payment Id</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Customer Id</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Payment Method</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Payment Status</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Order Id</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paymentData.slice(0, paymentData.length>=10 ? 7 : paymentData.length).map((item,id) => (
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
                    {item.customerId}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.paymentMethod}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.paymentStatus}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.orderId}
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
}

export default RestaurantPayments;
