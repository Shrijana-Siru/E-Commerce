import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export default function AddCustomer() {
    
    const [first_Name, setFirstName] = useState()
    const [last_Name, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState()

    const data = {
        firstName:first_Name,
        lastName:last_Name,
        email:email,
        phone:phone,
        address:{
            city:address
        }
    }

    const handleSubmit=() => {
        axios.post('http://localhost:3002/users',data)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    console.log("The data to be submitted", data)
    
    return (
        <form>
            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label='First Name'                
                value={first_Name}
                variant="outlined"
                onChange={(e) => setFirstName(e.target.value)}
            />
            <br />
            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label='Last Name'  
                value={last_Name}
                onChange={(e) => setLastName(e.target.value)}
                variant="outlined"
            />
            <br />
            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label='Email'  
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                value={email}
            />
            <br />
            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                variant="outlined"
                label='Address'  
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <br />
            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label='Phone'  
                variant="outlined"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <Button onClick={handleSubmit} variant="contained" color="primary">
                Add
            </Button>
        </form>

    );
}