import React from "react";
import Logo from "../assents/img/logo.png";
import style from "../components/header.module.css"

export default () => {
  return (
    <header className={style.header}>
      <nav className={style.navbar}>
     <div className={style.logo}>
      <img src={Logo} className={style.logoimg} />
      </div>
        <ul className={style.menus}>
          <li>Cadastre-se</li>
          <li>Contate-nos</li>
          <li>Sobre</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
};
