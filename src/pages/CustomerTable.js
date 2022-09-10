import { Button} from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddCustomer from "../Component/CustomerAddForm";
import FormCustomer from "../Component/CustomerEditForm";
import Layout from "../Layout/adminDashboard";

export const Customer = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState();
  const [add, setAdd] = React.useState(false);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3002/users`)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(data);

  function handleEdit(row) {    
    console.log("The data of the employee: ", row);
    setOpen(true);
    setUser(row);
  }

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3002/users/${id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Layout>
      <>        
        <Box
          sx={{
            position: "relative",
            top: "50px",
            Width: "100vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <h1 style={{ fontFamily: "Arial", textAlign: "center" }}>
              {" "}
              Customer Management
            </h1>
            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
              <Button
                onClick={() => setAdd(true)}
                variant="contained"
                sx={add ? { display: "none" } : { display: "block" }}
              >
                Add Customer
              </Button>
            </div>
            <ArrowBackIcon
              onClick={() => setAdd(false)}
              sx={
                add
                  ? {
                      display: "block",
                      cursor: "pointer",
                      marginBottom: "20px",
                    }
                  : { display: "none" }
              }
            />
            {add ? <AddCustomer /> : console.log("nothing to show")}
            <TableContainer
              component={Paper}
              sx={{ maxWidth: "100%", maxHeight: "500px", marginTop: "20px", position:"relative" }}
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#adadad" }}>
                  <TableRow>
                    <TableCell align="center">id</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">Address</TableCell>
                    <TableCell align="center">Phone</TableCell>
                    <TableCell align="center">Gender</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      key={row.id}
                    >
                      <TableCell align="center">{row.id}</TableCell>
                      <TableCell align="center">
                        {row.firstName} {row.lastName}{" "}
                      </TableCell>
                      <TableCell align="center">{row.email}</TableCell>
                      <TableCell align="center">{row.address.city}</TableCell>
                      <TableCell align="center">{row.phone}</TableCell>
                      <TableCell align="center">{row.gender}</TableCell>
                      <TableCell align="center">
                        <EditIcon
                          sx={{ cursor: "pointer", marginRight: "10px" }}
                          onClick={() => handleEdit(row)}
                        />
                        <DeleteIcon
                          sx={{ cursor: "pointer" }}
                          onClick={() => {
                            handleDelete(row.id);
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <FormCustomer edit={user} />
              </Box>
            </Modal>
          </Box>
        </Box>
      </>
    </Layout>
  );
};
