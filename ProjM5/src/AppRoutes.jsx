import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from './components/Home/home'
import Login from "./pages/LoginPage/Login"
import { AuthProvider, AuthContext } from "./context/Auth";
import React, {useContext } from "react";
import Cadastro from './components/Cadastro/cadastro'
import UsuarioPage from './pages/Registro/UsuarioPage'
import Produtos from './pages/Usuario/Produtos';
import Sobre from './components/Sobre/sobre'
import Header from "./components/Header/header";

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
                <Route path="/Cadastro" element={<Cadastro/>}/>
                <Route path="/Usuario" element={<UsuarioPage/>}/>
                <Route path="/Produtos" element={<Produtos/>}/>
                <Route path="/Sobre" element={<Sobre/>}/>
            </Routes> 
            </AuthProvider>
            
        </BrowserRouter>
    )
}

export default AppRoutes;