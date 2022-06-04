import React from "react";
import style from "../Home/home.module.css";
import ImgCard1 from "../../assents/img/imagem1.png"
import ImgCard2 from "../../assents/img/salsa.png"

export default () => {
    return (
        <body className={style.body}>
            <div className={style.containerCard1}>
                    <div className={style.backgroundCard1}>
                    <img className={style.marginImg} src={ImgCard1}/>
                        <h3 className={style.corTextoAzul}>Lorem Ipsum</h3>
                        <p className={style.corTexto}> "Neque porro quisquam est qui dolorem ipsum quia</p>
                        <p className={style.corTextoAzul}>dolor sit amet, consectetur, adipisci velit ..."</p>
                        <button className={style.corButtonCard1}>
                            Loren
                        </button>
                        <img className={style.marginImg} src={ImgCard2}/>
                    </div>
            </div>
        </body>
    );
};