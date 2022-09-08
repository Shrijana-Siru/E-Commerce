import * as React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const Product = () => {
  const [data, setData] = useState([]);

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3002/products`)

      .then((res) => {
        setData(res.data);
      })

      .catch((err) => {
        console.log("Err", err);
      });
  }, []);

  console.log("data", data);
  return (
    <>
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", boxShadow: 3 }}
      >
        <Typography variant="h6" noWrap component="div">
          E-commerce
        </Typography>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircleIcon fontSize="large" onClick={handleMenu} />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem component={Link} to="/login">Sign In</MenuItem>
        </Menu>
      </Toolbar>
      <h1 style={{ textAlign: "center", fontSize: "50px" }}> Our Products </h1>
      <Box
        sx={{
          gap: "20px",
          display: "grid",
          width: "100vw",
          justifyContent: "space-around",
          marginTop: "100px",
          gridTemplateColumns: "auto auto auto",
        }}
      >
        {data.map((carditem) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={carditem.images ? carditem.images[0] : "no image found"}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {carditem.title}
              </Typography>
              <Typography
                sx={{ display: "flex", justifyContent: "space-between" }}
                variant="body2"
                color="text.secondary"
              >
                <h4>${carditem.price}</h4>
                <AddShoppingCartIcon />
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};
