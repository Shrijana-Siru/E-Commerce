import { Box } from "@mui/system";
import NavBar from "../Component/navbar";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DashBoard = () => {
  const [user, setUser] = useState([]);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3002/users`)
      .then(function (response) {
        setUser(response.data);
        console.log("The user's data is :", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3002/products`)
      .then(function (response) {
        setProduct(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  let female = [];
  for (let i = 0; i < user.length; i++) {
    if (user[i].gender === "female") {
      female.push(user[i]);
    }
  }
  console.log("The females are",female);

  let male = [];
  for (let i = 0; i < user.length; i++) {
    if (user[i].gender === "male") {
      male.push(user[i]);
    }
  }
  console.log("The males are",male);

  let other = [];
  for (let i = 0; i < user.length; i++) {
    if (user[i].gender === "others") {
      other.push(user[i]);
    }
  }
  console.log("The other are",other);


  const Number = user.length;
  console.log("number data", Number);
  const ProductNumber = product.length;
  console.log("p.number", ProductNumber);

  const data = {
    labels: ["Male", "Female", "Bisexual"],
    datasets: [
      {
        labels: "genders",
        data: [male.length,female.length, other.length ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(221,160,221, 0.18)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(221,160,221,  1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Box sx={{ display: "flex", width: "100wv" }}>
        <Box>
          <NavBar />
        </Box>

        <Box sx={{ top: "100px", position: "relative", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ maxWidth: 345 }}>
              {" "}
              <Pie data={data} />{" "}
            </Box>

            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Total Number Of Products
                </Typography>
                <Typography variant="h3" color="text.secondary">
                  {ProductNumber}
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Total Number Of Customers
                </Typography>
                <Typography variant="h3" color="text.secondary">
                  {Number}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
};
