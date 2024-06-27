import {
  Avatar,
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
  
  import React, { useEffect } from "react";
  
  import { grey } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../../State/SuperAdmin/superAdmin.action";
  
  const SuperAdminCustomerTable = ({ isDashboard, name }) => {
    const dispatch = useDispatch();
    const { superAdmin } = useSelector((store) => store);
    console.log("Super Admin :",superAdmin);
    useEffect(() => {
      dispatch(getCustomers())
    }, []);
  
    const handleDeleteProduct = (productId) => {
      console.log("delete product ", productId);
    };
  
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
            <Table  aria-label="table in dashboard">
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Full Name</TableCell>
                  <TableCell >User Id</TableCell>
                  <TableCell >Email</TableCell>
                  <TableCell >User Role</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {superAdmin.customers.slice(0,isDashboard?7:superAdmin.customers.length).map((item) => (
                  <TableRow
                    hover
                    key={item.name}
                    sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                  >
                    <TableCell>
                      {" "}
                      <Avatar sx={{ bgcolor: "white",color:grey}} className="bg-white">
                        {item.fullName[0].toUpperCase()}
                      </Avatar>
                    </TableCell>
  
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
                          {item.fullName}
                        </Typography>
                        <Typography variant="caption">{item.brand}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell >
                      {item._id}
                    </TableCell>
                    <TableCell >
                      {item.email}
                    </TableCell>
                    <TableCell >
                      {item.role}
                    </TableCell>
  
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
  
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={superAdmin.loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    );
  };
  
  export default SuperAdminCustomerTable;
  