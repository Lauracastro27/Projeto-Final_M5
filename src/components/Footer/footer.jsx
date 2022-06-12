import React from "react";
import Logo from "../../assents/img/logo.png";
import style from "../Footer/footer.module.css";

export default () => {
  return (
    <footer className={style.footer}>
  <img src={Logo} className={style.logo}/>
  <div className={style.colorText} >
  <span className={style.h}>Inicio</span>
  <span className={style.h}>Fale Conosco</span>
  <span className={style.h}>Redes Sociais</span>
  <span className={style.h}>Sobre</span>
  </div>
  <img src={Logo} className={style.logo}/>
    </footer>
  );
};
