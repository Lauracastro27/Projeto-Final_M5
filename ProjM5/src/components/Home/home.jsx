import React from "react";
import style from "../Home/home.module.css";
import ImgCard1 from "../../assents/img/imagem1.png"
import ImgCard2 from "../../assents/img/salsa.png"
import ImgCard3 from "../../assents/img/churros.png"
import ImgCard4 from "../../assents/img/burguer.png"
import ImgCard5 from "../../assents/img/cafeteria.png"
import ImgCard6 from "../../assents/img/5estrelas.png"



export default () => {
    return (
        <body className={style.body}>
            <div className={style.containerCard1}>
                <div className={style.backgroundCard1}>
                    <img className={style.marginImg} src={ImgCard1} />
                    <h3 className={style.corTextoAzul}>Lorem Ipsum</h3>
                    <p className={style.corTexto}> "Neque porro quisquam est qui dolorem ipsum quia</p>
                    <p className={style.corTextoAzul}>dolor sit amet, consectetur, adipisci velit ..."</p>
                    <button className={style.corButtonCard1}>
                        Loren
                    </button>
                    <img src={ImgCard2} />
                </div>
            </div>
            <div className={style.centralizaTexto} >
                    <h1 className={style.corTexto}>
                        Restaurantes 5 estrelas
                    </h1>
                <div className={style.BackgroudDiv2}>
                    <card className={style.marginImg}>
                        <img src={ImgCard3}/>
                        <h4>Donmie Churros Gourmet</h4>
                        <p>Churros Gourmet</p>
                        <p><img src={ImgCard6}/> blablabla</p>
                    </card>
                    <card className={style.marginImg}>
                        <img src={ImgCard4}/>
                        <h4>Royale Burguer</h4>
                        <p>Hamburgueria</p>
                        <p><img src={ImgCard6}/> blablabla</p>
                    </card>
                    <card className={style.marginImg}>
                        <img className={style.tamanhoImg}src={ImgCard5}/>
                        <h4>Sterna Café</h4>
                        <p>Cafeteria</p>
                        <p><img src={ImgCard6}/> blablabla</p>
                    </card>
                </div>
            </div>
        </body>
    );
};