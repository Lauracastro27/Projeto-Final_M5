<<<<<<< Updated upstream
import React from "react";
import Logo from "../assents/img/logo.png";
=======
import React, { useContext } from "react";
import Logo from "../../assents/img/logo.png";
>>>>>>> Stashed changes
import style from "../Header/header.module.css";

export default () => {
  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        <div className={style.logo}>
          <img src={Logo} className={style.logoimg} />
        </div>
<<<<<<< Updated upstream
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
=======
        <div className={style.menus}>
          <a>Cadastre-se</a>
          <div>
            <select className={style.inputCelect}>
              <option disabled>Cadastre-se</option>
              <option>Pedido</option>
              <option>Estabelecimento</option>
              <option>Entregador</option>
              <option>Cliente</option>
              <option>Produto</option>
            </select>
          </div>
          <a>Contate-nos</a>
          <a>Sobre</a>
        </div>
>>>>>>> Stashed changes
      </nav>
    </header>
  );
};
<<<<<<< Updated upstream

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
=======
>>>>>>> Stashed changes
