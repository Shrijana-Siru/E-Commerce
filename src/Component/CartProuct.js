import { Button, Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const CartProduct = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Card
          variant="outlined"
          sx={{
            minWidth: "600px",
            height: "350px",
            p: 2,
            overflow: "visible",
            justifyContent: "space-between",
            flexDirection: "column",
            display: "flex",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            border: "none"
          }}
        >
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
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}> Products</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Qty</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <h4 style={{textAlign: "right"}}>Total:</h4>
        </Box>
          <Box sx={{display: "flex", justifyContent: "space-between"}}>
            <Button
              sx={{
                mt: "20px",
                px: 1,
                width: "100px",
                color: "red",
                p: 1,
                background: "grey",
                fontWeight: "bold",
              }}
            >
              <Link to="/CartProduct"> Close</Link>
            </Button>

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
        </Card>
      </Box>
    </>
  );
};
