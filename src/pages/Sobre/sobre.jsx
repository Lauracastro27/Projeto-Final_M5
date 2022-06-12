import React from "react";
import style from "../Sobre/sobre.module.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Breno from "../../assents/img/Breno.jpg";
import Laura from "../../assents/img/Laura.png";
import Rafa from "../../assents/img/Rafa.jpg";
import Hugo from "../../assents/img/Hugo.jpg";
import Luana from "../../assents/img/Luana.jpg";

export default () => {
  return (
    <>
      <Header />
      <body className={style.fundo}>
        <div className={style.container}>
          <br />
          <h1>
            <u className={style.corTitulo}>Sobre</u>
          </h1>
          <br />
          <p className={style.Txt}>
            Tô com fome é uma empresa que aproxima clientes, restaurantes e
            entregadores de forma simples e prática. <br />
            Entre seus valores estão a facilidade, privacidade e respeito com os
            usuários e parceiros. <br />
            E para proporcionar uma experiência incrível a cada um deles, nossa
            entrega vai muito além do delivery.
            <br />
            A missão do Tô com Fome é ser a melhor plataforma de delivery da
            América Latina, dando ao consumidor <br />
            mais opções e agilidade na hora de pedir comida. <br />
          </p>
          <br />
          <br />
          <br />
        </div>
        <h1 className={style.colabo}>Colaboradores</h1>
        <div className={style.div}>
        <img src={Breno} className={style.img} />
        <img src={Hugo} className={style.img} />
        <img src={Laura} className={style.img} />
        <img src={Luana} className={style.img} />
        <img src={Rafa} className={style.img} />
        </div>
      </body>
      <Footer />
    </>
  );
};
