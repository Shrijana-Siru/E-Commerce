import * as React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  Modal,
  Grid,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { CartProduct } from "../Component/cart";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Product = (props) => {
  console.log("The data", props)
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [shopopen, setShopOpen] = React.useState(false);
  const [product, setProduct] = useState([]);
  const [mainCart, setMainCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    maxHeight: "500px",
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    overflow: "auto",
    p: 4,
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCart = (carditem) => {
    setShopOpen(true);
    setProduct(carditem);
    
  };


  const addCard = (data) => {     
    setMainCart([...mainCart, {...data, quantity}])
    setQuantity(0)
    setShopOpen(false);
    toast.success("Item added successfully!")
  }

  console.log("The cart to be added is", mainCart)

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  const handleShopClose = () => {
    setAnchorEl(null);
    setShopOpen(false);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
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

  console.log("Data from API: ", data);
  return (
    <>
    <ToastContainer>
      
    </ToastContainer>
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", boxShadow: 3 }}
      >
        <Typography variant="h6" noWrap component="div">
          E-commerce
        </Typography>
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => {
              setOpen(true);
            }}
            color="inherit"
          >
            <LocalMallIcon fontSize="large" />
          </IconButton>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircleIcon fontSize="large" />
          </IconButton>
        </div>
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
          <MenuItem component={Link} to="/login">
            Sign In
          </MenuItem>
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
          <Card key={carditem.id} sx={{ maxWidth: 345 }}>
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
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                variant="body2"
                color="text.secondary"
              >
                ${carditem.price}
                <AddShoppingCartIcon
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleCart(carditem)}
                />
              </Typography>
            </CardContent>
          </Card>
        ))}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CartProduct product={mainCart} />
          </Box>
        </Modal>
        <Modal
          open={shopopen}
          onClose={handleShopClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {[product].map((data) => (
              <>
                <Grid sx={{ display: "flex" }}>
                  <Box>
                    <img
                      alt="Icon"
                      style={{ height: "200px" }}
                      src={data.thumbnail}
                    ></img>
                  </Box>
                  <Box>
                    <h1 style={{ coloe: "grey" }}>{data.title}</h1>
                    <p style={{ color: "#4c4d4c", fontSize: "20px" }}>
                      {data.description}
                    </p>
                    <h3>Price: {data.price}</h3>
                    <h3>Select the quantity</h3>
                    <div class="quantity">
                      <Button
                        variant="contained"
                        sx={{ background: "black", marginRight: "20px" }}
                        onClick={handleDecrease}
                      >
                        <RemoveIcon />
                      </Button>
                      <input
                        name="quantity"
                        type="text"
                        style={{
                          border: "none",
                          backgroundColor: "#dadbd7",
                          borderRadius: "10px",
                          height: "40px",
                          marginRight: "20px",
                          width: "50px",
                          textAlign: "center",
                        }}
                        class="quantity__input"
                        value={quantity}
                      />
                      <Button
                        variant="contained"
                        sx={{ background: "black", marginRight: "20px" }}
                        onClick={handleIncrease}
                      >
                        <AddIcon />
                      </Button>
                    </div>
                  </Box>
                </Grid>
                <Button
                  variant="contained"
                  sx={{ background: "black", marginRight: "20px" }}
                  onClick={()=>{addCard(data)}}
                >
                  Add to Cart
                </Button>
              </>
            ))}
          </Box>
        </Modal>
      </Box>
    </>
  );
};
