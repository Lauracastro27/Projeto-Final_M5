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

  return (
    
    <header className={style.header}>
      <nav className={style.navbar}>
        <div className={style.logo}>
       <Link to='/'> <img src={Logo} className={style.logoimg} /></Link>
        </div>
        <ul className={style.menus}>
        <Link to='/Cadastro' className={style.none}><li>Cadastre-se</li></Link>
        <Link to='/Produtos' className={style.none}><li>Produtos</li></Link>
        <Link to='/Registrar' className={style.none}><li>Novo Produto</li></Link>           
        <Link to='/Sobre' className={style.none}><li>Sobre</li></Link>
        <div className={style.sair}></div>
        {user &&  <button onClick={handleLogout}>Sair</button>}
        </ul>
      </nav>
    </header>
  );
};