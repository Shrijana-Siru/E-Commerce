import { TextField, Button } from "@mui/material";
import axios from "axios";

import { useState } from "react";

export default function EditProduct(props) {
  const [Product_Name, setProductName] = useState(props.edit.title);
  const [Product_description, setProductDescription] = useState(
    props.edit.description
  );
  const [Product_price, setProductprice] = useState(props.edit.price);
  console.log("data", props);

  const submitChange = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3002/products/${props.edit.id}`, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log(props.edit);
  };

  const data = {
    title: Product_Name,
    description: Product_description,
    price: Product_price,
  };

  return (
    <form>
      <TextField
        style={{ width: "100%", margin: "5px" }}
        type="text"
        value={Product_Name}
        variant="outlined"
        onChange={(e) => setProductName(e.target.value)}
      />
      <br />
      <TextField
        multiline
        style={{ width: "100%", margin: "5px" }}
        rows={4}
        value={Product_description}
        onChange={(e) => setProductDescription(e.target.value)}
        variant="outlined"
      />
      
      <br />
      <TextField
        style={{ width: "100%", margin: "5px" }}
        type="text"
        value={Product_price}
        onChange={(e) => setProductprice(e.target.value)}
        variant="outlined"
      />
      <br />

      <Button onClick={submitChange} variant="contained" color="primary">
        Save
      </Button>
    </form>
  );
}
