import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Customer } from "../pages/CustomerTable";
import { DashBoard } from "../pages/dashboard";
import { LoginPage } from "../pages/loginpage";
import { Product } from "../pages/product";
import { Products } from "../pages/ProductTable";
import { RegisterPage } from "../pages/Registerpage";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/customer-table" element={<Customer />} />
          <Route path="/product-table" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
