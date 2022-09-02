import {BrowserRouter,Routes,Route} from "react-router-dom";
import { LoginPage } from "../pages/loginpage";
import { RegisterPage } from "../pages/Registerpage";


export const AppRoutes =() => {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
        </BrowserRouter>

        </>
    )
}