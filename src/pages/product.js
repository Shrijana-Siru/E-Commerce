import {
  AppBar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Toolbar,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const Product = () => {
  const [data, setData] = useState([]);

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
      
        <Toolbar sx={{display:"flex", justifyContent: "space-between", boxShadow:3}}>
          <Typography variant="h6" noWrap component="div">
            E-commerce
          </Typography>
          <AccountCircleIcon fontSize="large"/>
        </Toolbar>

        <h1 style={{textAlign:"center", fontSize: "50px"}}> Our Products </h1>
        <Button variant="contained"> Add Product </Button>
      <Box
        sx={{
          gap: "20px",
          display: "grid",
          width: "100vw",
          justifyContent: "space-around",
          marginTop: "100px",
          gridTemplateColumns: "auto auto auto",
        }}>

        {data.map((carditem) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={carditem.images?carditem.images[0]:"no image found"}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {carditem.title}
              </Typography>
              <Typography sx={{display:"flex", justifyContent: "space-between"}} variant="body2" color="text.secondary">
                <h4>${carditem.price}</h4>
                <AddShoppingCartIcon/>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};
