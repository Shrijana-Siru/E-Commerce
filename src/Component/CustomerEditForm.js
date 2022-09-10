import { TextField, Button } from "@mui/material";
import axios from "axios";

import { useState } from "react";

export default function FormCustomer(props) {
    console.log("The data",props)
    const [first_Name, setFirstName] = useState(props.edit.firstName)
    const [last_Name, setLastName] = useState(props.edit.lastName)
    const [email, setEmail] = useState(props.edit.email)
    const [phone, setPhone] = useState(props.edit.phone)
    const [address, setAddress] = useState(props.edit.address.city)

    const submitChange = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3002/users/${props.edit.id}`, data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    console.log(props.edit)
    }

    const data = {
        firstName: first_Name,
        lastName: last_Name,
        email: email,
        phone: phone,
        address: {
            city: address
        },
        gender:"male"
    }

    console.log("The data to be submit", data)
    return (
        <form>
            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                value={first_Name}
                variant="outlined"
                onChange={(e) => setFirstName(e.target.value)}
            />
            <br />
            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                value={last_Name}
                onChange={(e) => setLastName(e.target.value)}
                variant="outlined"
            />
            <br />
            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                value={email}
            />
            <br />
            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                variant="outlined"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <br />
            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                variant="outlined"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <Button onClick={submitChange} variant="contained" color="primary">
                Save
            </Button>
        </form>

    );
}

