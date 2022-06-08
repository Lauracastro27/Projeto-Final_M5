import React from "react";
import Logo from "../../assents/img/logo.png";
import style from "../Footer/footer.module.css";

export default () => {
  return (
    <footer className={style.footer}>
  <img src={Logo} className={style.logo}/>
  <div className={style.colorText} >
  <span>Inicio</span>
  <span>Fale Conosco</span>
  <span>Redes Sociais</span>
  <span>Sobre</span>
  </div>
  <img src={Logo} className={style.logo}/>
    </footer>
  );
};
