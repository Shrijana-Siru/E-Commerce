import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

export const CartProduct = (props) => {
  const [product, setProduct] = useState();
  let mainCart = props.product;


  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          maxHeight: "400px",
          padding: "20px",
          overflow: "auto",
        }}
      >
        <div>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              p: 2,
              color: "blue",
              px: 1,
            }}
          >
            <Typography
              sx={{
                fontWeight: "700",
                textAlign: "Left",
                fontFamily: "arial",
                fontSize: "30px",
                marginBottom: "30px",
              }}
            >
              Your Shopping Cart
            </Typography>
          </Box>

          <Box>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 700, overflow: "auto" }}
                aria-label="spanning table"
              >
                <TableHead sx={{ backgroundColor: "gray" }}>
                  <TableRow>
                    <TableCell align="center" colSpan={3}>
                      {" "}
                      Products
                    </TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Qty</TableCell>
                    <TableCell align="right" colSpan={2}>
                      Total
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mainCart.map((data) => (
                    <TableRow key={data.id}>
                      <TableCell align="center" colSpan={3}>
                        {data.title}
                      </TableCell>
                      <TableCell align="right">${data.price}</TableCell>
                      <TableCell align="right">{data.quantity}</TableCell>
                      <TableCell align="right">
                        Total: {data.price * data.quantity}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <h4 style={{ textAlign: "right" }}>Total:</h4>
          </Box>
        </div>
        <div>
          <Box>
            <Button
              sx={{
                mt: "20px",
                px: 1,
                width: "100px",
                color: "red",
                p: 1,
                background: "green",
                fontWeight: "bold",
              }}
            >
              <Link to="/CartProduct"> Checkout </Link>
            </Button>
          </Box>
        </div>
      </div>
    </>
  );
};
