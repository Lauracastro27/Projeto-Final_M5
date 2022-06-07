import React,{useContext} from "react";
import Logo from "../../assents/img/logo.png";
import style from "../Header/header.module.css"
import { AuthContext } from "../../context/Auth";


export default () => { 
  const {logout} = useContext(AuthContext);
  const handleLogout = ()=>{
    logout();
  }
  return (
    
    <header className={style.header}>
      <nav className={style.navbar}>
        <div className={style.logo}>
          <img src={Logo} className={style.logoimg} />
        </div>
        <div className={style.menus}>
        <a>Cadastre-se</a>
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
           
          <a>Contate-nos</a>
          <a>Sobre</a>
        </div>
      </nav>
    </header>
  );
};

