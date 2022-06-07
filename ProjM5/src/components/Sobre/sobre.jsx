import React from "react";
import style from "../Sobre/sobre.module.css";

export default () => {
    return (
        <body className={style.fundo}>
        <div className={style.container}>
        <br /><h1>
                <u className={style.corTitulo}>Sobre</u> 
            </h1>
            <br />
            <p className={style.Txt}>
            Tô com fome é uma empresa que aproxima clientes, 
            restaurantes e entregadores de forma simples e prática. <br /> 
            Entre seus valores estão a facilidade, privacidade e 
            respeito com os usuários e parceiros. <br />
            E para proporcionar uma experiência incrível a cada um deles, nossa entrega 
            vai muito além do delivery.<br />
            A missão do Tô com Fome é ser a melhor plataforma
            de delivery da América Latina, dando ao consumidor <br />
            mais  opções e agilidade na hora de pedir comida. <br />
            </p><br />
            <br />
            <br />
        </div>
    </body>
);
};