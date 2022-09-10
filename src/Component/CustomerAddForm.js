import { TextField, Button, InputLabel, Select, MenuItem } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function AddCustomer() {
  const [first_Name, setFirstName] = useState();
  const [last_Name, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [gender, setGender] = useState("others");

  const data = {
    firstName: first_Name,
    lastName: last_Name,
    email: email,
    phone: phone,
    address: {
      city: address,
    },
    gender: gender,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3002/users", data)
      .then((res) => {
        console.log(res);
        
      })
      .catch((err) => {
        console.log(err);
      });
      
  };
  console.log("The data to be submitted", data);

  return (
    <>
    
   
    <form onSubmit={(e=>{e.preventDefault()})}>   

      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        label="First Name"
        value={first_Name}
        variant="outlined"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        label="Last Name"
        value={last_Name}
        onChange={(e) => setLastName(e.target.value)}
        variant="outlined"
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
        variant="outlined"
        value={email}
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        variant="outlined"
        label="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        label="Phone"
        variant="outlined"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <InputLabel id="demo-simple-select-label">gender</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={gender}
        label="gender"
        sx={{
          width: "100%",
          marginBottom: "20px",
        }}
        onChange={(e) => setGender(e.target.value)}
      >
        <MenuItem value={"male"}>Male</MenuItem>
        <MenuItem value={"female"}>Female</MenuItem>
        <MenuItem value={"others"}>Others</MenuItem>
      </Select>
      <br />
      <Button type="submit" onClick={handleSubmit} variant="contained" color="primary">
        Add
      </Button>
    </form>
    </>
  );
}
