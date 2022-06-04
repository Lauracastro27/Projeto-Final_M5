import React from "react";
import style from "../Home/home.module.css";
import ImgCard1 from "../../assents/img/imagem1.png"
import ImgCard2 from "../../assents/img/salsa.png"
import ImgCard3 from "../../assents/img/churros.png"
import ImgCard4 from "../../assents/img/burguer.png"
import ImgCard5 from "../../assents/img/cafeteria.png"
import ImgCard6 from "../../assents/img/5estrelas.png"
import ImgCard7 from "../../assents/img/comidatop.png"
import ImgCard8 from "../../assents/img/pratoChique.png"
import ImgCard9 from "../../assents/img/Drinks.png"
import ImgCard10 from "../../assents/img/Asian_Food.jpg"
import ImgCard11 from "../../assents/img/Italian_Food.jpg"
import ImgCard12 from "../../assents/img/Mexican_Food.jpg"
import ImgCard13 from "../../assents/img/Arabian_Food.jpg"
import ImgCard14 from "../../assents/img/Thai_Food.jpg"
import ImgCard15 from "../../assents/img/Brazilian_Food.jpg"
import ImgCard16 from "../../assents/img/comida-online-como-pedir.jpg"







export default () => {
    return (
        <body className={style.body}>
            <div className={style.containerCard1}>
                <div className={style.backgroundCard1}>
                    <div className={style.Foto1}>
                        <img src={ImgCard1} />
                    </div>
                    <div className={style.txtColuna}>
                        <div>
                            <h3 className={style.corTextoAzul}>Lorem Ipsum</h3><br />
                            <p className={style.corTexto}> "Neque porro quisquam est qui dolorem ipsum</p><br />
                            <p className={style.corTextoAzul}>quia dolor sit amet, consectetur, adipisci velit ..."</p>
                            <button className={style.corButtonCard1}>
                                Loren
                            </button>
                        </div>
                    </div>
                    <div className={style.Foto2}>
                        <img class={style.maginImgSalsa} src={ImgCard2} />
                    </div>
                </div>
            </div>
            <div className={style.containerDiv2} >
                <h1 className={style.corTexto}>
                    Restaurantes 5 estrelas
                </h1>
                <div className={style.BackgroudDiv2}>
                    <card className={style.marginImg}>
                        <img src={ImgCard3} />
                        <h4>Donmie Churros Gourmet</h4>
                        <p>Churros Gourmet</p>
                        <p><img class={style.tamanhoEstrela} src={ImgCard6} />268 Avaliações</p>
                    </card>
                    <card className={style.marginImg}>
                        <img src={ImgCard4} />
                        <h4>Royale Burguer</h4>
                        <p>Hamburgueria</p>
                        <p><img class={style.tamanhoEstrela} src={ImgCard6} />1.532 Avaliações</p>
                    </card>
                    <card className={style.marginImg}>
                        <img className={style.tamanhoImg} src={ImgCard5} />
                        <h4>Sterna Café</h4>
                        <p>Cafeteria</p>
                        <p><img class={style.tamanhoEstrela} src={ImgCard6} />99 Avaliações</p>
                    </card>
                </div>
            </div>
            <div className={style.centralizaTexto} >
                <h1 className={style.corTexto}>
                    Os Melhores restaurantes para você!
                </h1>
                <div className={style.bgImgTop}>
                </div>
                <img src={ImgCard7} className={style.marginImgTop} />
            </div>
            <div class={style.bgWhite}>
                <p>Cras orci leo, placerat ac varius et,<br />
                    maximus nec ipsum. Donec eu<br />
                    vehicula massa. Curabitur nec est<br />
                    non justo rhoncus euismod.<br />
                    Maecenas nec blandit ligula, ut<br />
                    venenatis tellus. Aliquam eleifend<br />
                    viverra purus quis commodo.<br />
                    Integer sodales, eros et facilisis .</p>
                <img src={ImgCard8} className={style.marginImgTop} />
                <p>
                    Lorem ipsum dolor sit amet, <br />
                    consectetur adipiscing elit. Nulla<br />
                    viverra mi nec ligula eleifend<br />
                    hendrerit. Vestibulum pretium velit<br />
                    magna, at efficitur metus ultrices<br />
                    eu. Nulla facilisi. Aenean ut lacus<br />
                    ac lacus condimentum consequat<br />
                    vel nec nunc. In dapibus, libero<br />
                    congue lacinia pretium, urna ligula<br />
                    euismod metus, in volutpat felis<br />
                    massa id velit. Nunc et libero<br />
                    molestie, placerat neque vitae,<br />
                    sagittis metus. Quisque et turpis et<br />
                    risus maximus vestibulum.
                </p>
            </div>
            <div className={style.centralizaTexto}>
                <h1 className={style.corTexto}>
                    Drinks
                </h1>
                <div className={style.flexRow}>
                    <img src={ImgCard9} className={style.marginImgTop} />
                    <button class={style.corButtonCard1}>
                        Inpsun
                    </button>
                </div>
            </div>
            <div className={style.centralizaTexto}>
                <h1 className={style.tituloSublinhado}>
                    Escolha sua culinária favorita
                </h1>
                <div className={style.cardEscolha}>
                    <div>
                        <h1>
                            Asian Food
                        </h1>
                        <img src={ImgCard10} className={style.tamanhoPadraoImg} />
                    </div>
                    <div>
                        <h1>
                            Italian Food
                        </h1>
                        <img src={ImgCard11} className={style.tamanhoPadraoImg} />
                    </div>
                    <div>
                        <h1>
                            Mexican Food
                        </h1>
                        <img src={ImgCard12} className={style.tamanhoPadraoImg} />
                    </div>
                    <div>
                        <h1>
                            Arabian Food
                        </h1>
                        <img src={ImgCard13} className={style.tamanhoPadraoImg} />
                    </div>
                    <div>
                        <h1>
                            Thai food
                        </h1>
                        <img src={ImgCard14} className={style.tamanhoPadraoImg} />
                    </div>
                    <div>
                        <h1>
                            Brazilian Food
                        </h1>
                        <img src={ImgCard15} className={style.tamanhoPadraoImg} />
                    </div>
                </div>
                <div className={style.posicaoTxt}>
                        <h1>
                            e muitas outras...
                        </h1>
                    </div>
                <div>
                    <img src={ImgCard16} className={style.tamanhoPadraoImg} />
                </div>
            </div>
        </body>
    );
};