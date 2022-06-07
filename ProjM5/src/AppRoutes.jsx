import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import App from "./pages/App"
import Login from "./pages/LoginPage/Login"
import { AuthProvider, AuthContext } from "./context/Auth";
import React, { Children, useContext } from "react";
import Home from "./components/Home/home"
 

const AppRoutes = () =>{
   
    const Private = ({children})=>{
        const {authenticate, loading} = useContext(AuthContext);

        if(loading){
            return <div className="loading">Carregando...</div>
        }

        if(!authenticate){
            return <Navigate to="/Login"/>;
        }

        return children;
    }


    return(
        <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Private><Home/></Private>}/>
                <Route path="/Login" element={<Login/>}/>
            </Routes> 
            </AuthProvider>
            
        </BrowserRouter>
    )
}

export default AppRoutes;