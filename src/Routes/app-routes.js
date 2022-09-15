import {BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from "../Component/navbar";
import { Customer } from "../pages/CustomerTable";
import { DashBoard } from "../pages/dashboard";
import { LoginPage } from "../pages/loginpage";
import { Product } from "../pages/product";
import { Products } from "../pages/ProductTable";
import { RegisterPage } from "../pages/Registerpage";


export const AppRoutes =() => {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/dashboard" element={<DashBoard/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/CustomerTable" element={<Customer/>}/>
            <Route path="/productTable" element={<Products/>}/>
        </Routes>
        </BrowserRouter>

        </>
    )
}