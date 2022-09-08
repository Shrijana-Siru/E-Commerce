import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import "../assets/RegisterPage.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm(); //form validation
  //state defined
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    userName:"",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
    role:"user"
  });

const data = {  
    firstName: values.firstName,
    lastName: values.lastName,
    username: values.email,
    address: values.address,
    email: values.email,
    password: values.password,    
    role:"user"  
}


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });    
  };


  const onSubmit = () => {
    console.log("The data to be submitted :", data )    
    axios
      .post(`http://localhost:4000/users/register`, data)
      .then((res) => {
        console.log("res is generated", res);
      })
      .catch((err) => {
        console.log("The error is", err)
      });
  };

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "#AC4425",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          className="responsive"
          sx={{
            width: "40%",
            display: "flex",
            flex: "wrap",
            flexDirection: "column",
            justifyContent: "center",
            padding: "30px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
            alignItems: "center",
            backgroundColor: "#F0F2B6",
            borderRadius: "20px",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              marginBottom: "30px",
              color: "#AC4425",
            }}
          >
            Sign Up to the System
          </h1>
          <FormControl
            sx={{
              display: "flex",
              flex: "wrap",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                flex: "wrap",
                justifyContent: "space-around",
              }}
            >
              <Grid
                item
                sm={12}
                md={5}
                sx={{ width: 1, display: "flex", flexDirection: "column" }}
              >
                <TextField
                  sx={{ marginTop: 3 }}
                  label="First Name: "
                  name="fName"
                  variant="outlined"
                  value={values.firstName}
                  {...register("fName", {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                  onChange={handleChange("firstName")}
                />
                {errors.fName?.type === "required" && (
                  <Typography sx={{ color: "red" }}>
                    {" "}
                    First Name is required
                  </Typography>
                )}

                <TextField
                  sx={{ marginTop: 3 }}
                  label="Last Name: "
                  name="lName"
                  variant="outlined"
                  value={values.lastName}
                  {...register("lName", {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                  onChange={handleChange("lastName")}
                />
                {errors.lName?.type === "required" && (
                  <Typography sx={{ color: "red" }}>
                    Last Name is required
                  </Typography>
                )}

                <TextField
                  sx={{ marginTop: 3 }}
                  label="Address: "
                  name="ad"
                  variant="outlined"
                  value={values.address}
                  {...register("ad", { required: true, maxLength: 10 })}
                  onChange={handleChange("address")}
                />
                {errors.ad?.type === "required" && (
                  <Typography sx={{ color: "red" }}>
                    Address is required
                  </Typography>
                )}
              </Grid>

              <Grid
                item
                sm={12}
                md={5}
                sx={{ width: 1, display: "flex", flexDirection: "column" }}
              >
                <TextField
                  sx={{ marginTop: 3 }}
                  type="email"
                  name="email"
                  label="Email: "
                  variant="outlined"
                  value={values.email}
                  {...register("email", {
                    required: true,
                    pattern: /\S+@\S+\.\S+/,
                  })}
                  onChange={handleChange("email")}
                />
                {errors.email?.type === "required" && (
                  <Typography sx={{ color: "red" }}>
                    Email is required{" "}
                  </Typography>
                )}
                {errors.email?.type === "pattern" && (
                  <Typography sx={{ color: "red" }}>
                    Invalid Email eg:- happy@gmail.com
                  </Typography>
                )}

                <TextField
                  sx={{ marginTop: 3 }}
                  type="password"
                  name="pw"
                  label="Password: "
                  variant="outlined"
                  value={values.password}
                  {...register("pw", { required: true, minLength: 8 })}
                  onChange={handleChange("password")}
                />
                {errors.pw?.type === "required" && (
                  <Typography sx={{ color: "red" }}>
                    Password is required{" "}
                  </Typography>
                )}
                {errors.pw?.type === "minLength" && (
                  <Typography sx={{ color: "red" }}>
                    Password must be of 8 characters
                  </Typography>
                )}

                <TextField
                  sx={{ marginTop: 3 }}
                  type="password"
                  name="cpw"
                  label="Confirm Password: "
                  variant="outlined"
                  value={values.confirmPassword}
                  {...register("cpw", { required: true, minLength: 8 })}
                  onChange={handleChange("confirmPassword")}
                />
                {errors.cpw?.type === "required" && (
                  <Typography sx={{ color: "red" }}>
                    Password is required{" "}
                  </Typography>
                )}
                {values.password !== values.confirmPassword && (
                  <Typography sx={{ color: "red" }}>
                    Password doenot match{" "}
                  </Typography>
                )}
              </Grid>
            </Grid>

            <Button
              onClick={handleSubmit(onSubmit)}
              variant="contained"
              sx={{
                marginTop: 3,
                backgroundColor: "#224B0C",
                minWidth: "100px",
                maxWidth: "200px",
              }}
              type="submit"
            >
              Sign Up
            </Button>
          </FormControl>

          <a
            href="/"
            style={{
              textDecoration: "none",
              color: "#AC4425",
              marginTop: "20px",
            }}
          >
            Do you already have an account?
          </a>
        </Box>
      </Box>
    </>
  );
};
