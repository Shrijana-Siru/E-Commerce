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
import EditProduct from "../Component/ProductEditForm";
import AddProduct from "../Component/ProductAddForm";
import Layout from "../Layout/adminDashboard";


export const Products = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [add, setAdd] = React.useState(false);
  const [user, setUser] = React.useState();
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
      .get(`http://localhost:3002/products`)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(data);

  function handleEdit(row) {
    console.log("The data of the Product: ", row);
    setOpen(true);
    setUser(row);
  }

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3002/products/${id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  console.log("product detail", data);
  return (
    <Layout>      
      <Box
        sx={{
          position: "relative",
          top: "50px",
          Width: "100%",
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
            Product Table
          </h1>
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <Button
              onClick={() => setAdd(true)}
              variant="contained"
              sx={add ? { display: "none" } : { display: "block" }}
            >
              Add Product
            </Button>
          </div>
          <ArrowBackIcon
            onClick={() => setAdd(false)}
            sx={
              add
                ? { display: "block", cursor: "pointer", marginBottom: "20px" }
                : { display: "none" }
            }
          />
          {add ? <AddProduct /> : console.log("nothing to show")}
          <TableContainer
            component={Paper}
            sx={{ maxWidth: '90%', maxHeight: "400px", marginTop: "20px" }}
          >
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#adadad" }}>
                <TableRow>
                  <TableCell align="center">Product id</TableCell>
                  <TableCell align="center">Product Name</TableCell>
                  <TableCell align="center">Product description</TableCell>
                  <TableCell align="center">price</TableCell>
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
                    <TableCell align="center">{row.title} </TableCell>
                    <TableCell align="left">{row.description}</TableCell>
                    <TableCell align="center">${row.price}</TableCell>
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
              <EditProduct edit={user} />
            </Box>
          </Modal>
        </Box>
      </Box>
    </Layout>
  );
};
