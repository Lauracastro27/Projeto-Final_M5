import React from "react";
import Logo from "../assents/img/logo.png";
import style from "../Header/header.module.css";

export default () => {
  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        <div className={style.logo}>
          <img src={Logo} className={style.logoimg} />
        </div>
        <ul className={style.menus}>
          <li>
            <div>
              <select required value="Cadastre-se">
                <option>---</option>
                <option>Pedido</option>
                <option>Estabelicimento</option>
                <option>Entragadores</option>
                <option>Cliente</option>
                <option>Produto</option>
              </select>
            </div></li>
          <li>Contate-nos</li>
          <li>Sobre</li>
        </ul>
      </nav>
    </header>
  );
};

/* <div>
<p>
    Cadastre-se
</p>
<select required>
    <option>Pedido </option>
    <option>Estabelicimento</option>
    <option>Entragadores </option>
    <option>Cliente </option>
    <option>Produtos </option>
</select>
</div> */
