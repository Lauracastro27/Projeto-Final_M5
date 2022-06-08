import React,{useContext} from "react";
import Logo from "../../assents/img/logo.png";
import style from "../Header/header.module.css"
import { AuthContext } from "../../context/Auth";
import { Link } from "react-router-dom";

export default () => { 
  const {logout, user} = useContext(AuthContext);
  const handleLogout = ()=>{
    logout();
  }

export default () => { 

  return (
    
    <header className={style.header}>
      <nav className={style.navbar}>
        <div className={style.logo}>
       <Link to='/'> <img src={Logo} className={style.logoimg} /></Link>
        </div>
        <div className={style.menus}>
        <Link to='/Cadastro'>Cadastre-se</Link>
            <div>
              <select className={style.inputCelect}>
                <option>-----</option>
                <option>Pedido</option>
                <option>Estabelicimento</option>
                <option>Entragadores</option>
                <option>Cliente</option>
                <option>Produto</option>
              </select>
            </div>
           
        <Link to='/Sobre'>Sobre </Link>
        {user &&  <button onClick={handleLogout}>Sair</button>}

          <a>Cadastre-se</a>
<<<<<<< Updated upstream
          <div>
            <select className={style.inputSelect}>
              <option disabled>Cadastre-se</option>
              <option>Pedido</option>
              <option>Estabelecimento</option>
              <option>Entregador</option>
              <option>Cliente</option>
              <option>Produto</option>
            </select>
          </div>
=======
>>>>>>> Stashed changes
          <a>Contate-nos</a>
          <a>Sobre</a>
          <a>Login</a>
        </div>
      </nav>
    </header>
  );
};