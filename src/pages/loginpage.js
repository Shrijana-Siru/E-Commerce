import Card from "@mui/material/Card";
import { Box } from "@mui/system";
import { Button, TextField, FormControl, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); //form validation
  let navigate = useNavigate();  
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const data = {
    username: values.email,
    password: values.password,
  };

  const onSubmit = () => {
    console.log(data);
    axios
      .post(`http://localhost:4000/users/authenticate`, data)
      .then((res) => {
        console.log("The login is successfully done with", res.data.token);
        localStorage.setItem('items', res.data.token)
        
        if (res.data.role === "user") {
          
          navigate("/",{
            state:{logged:true}
          });
        } else if (res.data.role === "admin") {
          navigate("/dashboard");
        } else {
          alert("The user doesnt exist");
          navigate("/login");
        }
      })
      .catch((err) => {
        if (err.response.status == "400") {
          toast.error("Invalid Email or Password!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        sx={{ backgroundColor: "#F2D388" }}
      >
        <Card
          variant="outlined"
          sx={{
            minWidth: "400px",
            height: "450px",
            p: 2,
            borderRadius:'10px',
            overflow: "visible",
            background: "#874C62",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              p: 2,
              color: "#F2D388",
            }}
          >
            <Typography
              sx={{
                fontWeight: "700",
                textAlign: "center",
                fontFamily: "arial",
                fontSize: "20px",
                marginBottom: "30px",
              }}
            >
              Sign In Into The System
            </Typography>
          </Box>
          <Box>
            <FormControl variant="standard" sx={{ width: 1, gap: 2 }}>
              <TextField
                label="Email"
                type="email"
                value={values.email}
                name="email"
                {...register("email", {
                  required: true,
                  pattern: /\S+@\S+\.\S+/,
                })}
                onChange={handleChange("email")}
                variant="outlined"
                InputProps={{                  
                  endAdornment: (
                    <InputAdornment position="end">
                      <EmailRoundedIcon sx={{ mr: 1 }} />
                    </InputAdornment>
                  ),
                }}
              />
              {errors.email?.type === "required" && (
                <Typography sx={{ color: "red" }}>Email is required</Typography>
              )}
              {errors.email?.type === "pattern" && (
                <Typography sx={{ color: "red" }}>Invalid Email</Typography>
              )}

              <TextField
                label="Password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                {...register("password", { required: true, minLength: 6 })}
                onChange={handleChange("password")}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {errors.password?.type === "required" && (
                <Typography sx={{ color: "red" }}>
                  Password is required
                </Typography>
              )}
              {errors.password?.type === "minLength" && (
                <Typography sx={{ color: "red" }}>
                  Password must be more than 8 characters
                </Typography>
              )}
              <Button
                type="submit"
                onClick={handleSubmit(onSubmit)}
                variant="outlined"
                sx={{ width: "30%",
                backgroundColor:'#F2D388',
                border:'none',
                color:'#874C62'
              }}
                
              >
                Sign In
              </Button>
            </FormControl>

            <div style={{width:'100%' , textAlign:'center', marginTop:'30px'}}>
              <Link style={{textDecoration:'none'}}to="/register"><p style={{color:'#F2D388', fontFamily:'arial', fontSize:'20px'}}>Don't Have an Account?</p> </Link>
            </div>
          </Box>
        </Card>
      </Box>
    </>
  );
};
