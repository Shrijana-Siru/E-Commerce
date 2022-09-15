import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export default function AddProduct() {
    
    const [Product_Name, setProductName] = useState()
    const [Product_description, setProductDescription] = useState()
    const [Product_price, setProductprice] = useState()

   const data = {
    title: Product_Name,
    description: Product_description,
    price: Product_price,
   }
   
    const handleSubmit = () =>{
        
        axios.post('http://localhost:3002/products',data)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return(
        <>
       <form>
            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label='Enter Product Name'                
                value={Product_Name}
                variant="outlined"
                onChange={(e) => setProductName(e.target.value)}
            />
            <br />
            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label='Enter Product Description'  
                value={Product_description}
                onChange={(e) => setProductDescription(e.target.value)}
                variant="outlined"
            />
            <br />
        
            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label='Enter Product Price'  
                variant="outlined"
                value={Product_price}
                onChange={(e) => setProductprice(e.target.value)}
            />
            <br />
            <Button onClick={handleSubmit} variant="contained" color="primary">
                Add
            </Button>
        </form>
        </>
    )

}

    