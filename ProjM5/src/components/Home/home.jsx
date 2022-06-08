import React from "react";
import style from "../Home/home.module.css";
import Header from "../Header/header";
import ImgCard1 from "../../assents/img/imagem1.png";
import ImgCard2 from "../../assents/img/salsa.png";
import ImgCard3 from "../../assents/img/churros.png";
import ImgCard4 from "../../assents/img/burguer.png";
import ImgCard5 from "../../assents/img/cafeteria.png";
import ImgCard6 from "../../assents/img/5estrelas.png";
import ImgCard7 from "../../assents/img/comidatop.png";
import ImgCard8 from "../../assents/img/pratoChique.png";
import ImgCard9 from "../../assents/img/Drinks.png";
import ImgCard10 from "../../assents/img/Asian_Food.jpg";
import ImgCard11 from "../../assents/img/Italian_Food.jpg";
import ImgCard12 from "../../assents/img/Mexican_Food.jpg";
import ImgCard13 from "../../assents/img/Arabian_Food.jpg";
import ImgCard14 from "../../assents/img/Thai_Food.jpg";
import ImgCard15 from "../../assents/img/Brazilian_Food.jpg";
import Footer from "../Footer/footer";
// import Sobre from './components/Sobre/sobre'

export default () => {

    return (
       <section>
           <Header/>
        <body className={style.body}> 
            <div className={style.containerCard1} >
                <div className={style.backgroundCard1}>
                    <div className={style.Foto1}>
                        <img src={ImgCard1} />
                    </div>
                    <div className={style.txtColuna}>
                        <div>
                            <p className={style.corTexto}> "Gastronomia é a arte de usar comida para criar felicidade."</p>
                            <p className={style.corTextoAzul}>"A cozinha é multi-sensorial..."</p>
                        </div>
                    </div>
                    <div className={style.Foto2}>
                        <img class={style.maginImgSalsa} src={ImgCard2} />
                    </div>
                </div>
            </div>
            <div className={style.txtColuna}>
                <p className={style.textw}>
                  
                  "Gastronomia é a arte de usar comida 
                  para criar felicidade."
                </p>
                <br />
                <p className={style.corTextoAzul}>
                  "A cozinha é multi-sensorial..."
                </p>
            </div>
            <div className={style.Foto2}>
              <img className={style.maginImgSalsa} src={ImgCard2} />
            </div>
        <div className={style.containerDiv2}>
          <h1 className={style.textoIta}>Restaurantes 5 estrelas</h1>
          <div className={style.BackgroudDiv2}>
            <card className={style.marginImg}>
              <img className={style.tamanhoImg} src={ImgCard3} />
              <h4 className={style.start} >Donmie Churros Gourmet</h4>
              <p className={style.start}>Churros Gourmet</p>
              <p className={style.start}>
                <img className={style.tamanhoEstrela} src={ImgCard6} />
                268 Avaliações
              </p>
            </card>
            <card className={style.marginImg}>
              <img className={style.tamanhoImg} src={ImgCard4} />
              <h4 className={style.start}>Royale Burguer</h4>
              <p className={style.start}>Hamburgueria</p>
              <p className={style.start}>
                <img className={style.tamanhoEstrela} src={ImgCard6} />
                1.532 Avaliações
              </p>
            </card>
            <card className={style.marginImg}>
              <img className={style.tamanhoImg} src={ImgCard5} />
              <h4 className={style.start}>Sterna Café</h4>
              <p className={style.start}>Cafeteria</p>
              <p className={style.start}>
                <img className={style.tamanhoEstrela} src={ImgCard6} />
                99 Avaliações
              </p>
            </card>
          </div>
        </div>
        <div className={style.centralizaTexto2}>
          <h1 className={style.textoIta}>
            Os Melhores restaurantes para você!
          </h1>
        </div>
        <div className={style.centralizaTexto}>
          <div className={style.bgImgTop}>
            <img src={ImgCard7} className={style.marginImgTop2} />
          </div>
        </div>
        <h1 className={style.titulohist}>Um pouco de história</h1>
        <div className={style.bgWhite}>
          <p>
            Theodore Zeldin não era um cozinheiro,
            <br />
            mas um historiador e filósofo inglês <br />
            que achava que, para ser feliz e ter <br />
            confiança em si mesmo, era preciso <br />
            comer bem, saborear, provar e degustar <br />
            pratos de prestígio e delicados. <br />
            Premissa essa bem interessante, <br />
            não? A culinária se direciona ao olho, à boca,
            <br />
            ao nariz, ao ouvido, a todos os sentidos <br />
            e ao espírito. Nenhuma arte tem essa complexidade."
            <br />
            Vamos continuar nas citações francesas, afinal, <br />
            o país tem uma excelente reputação para a cozinha!
            <br />
          </p>
          <img src={ImgCard8} className={style.marginImgTop} />
          <p>
            Para ilustrar o apelo às emoções que vimos anteriormente,
            <br />
            Pierre Gagnaire, grande chef francês, explica que <br />
            cozinhar é atraente para todos os sentidos de um ser humano.
            <br />
            E trata-se de uma experiência completamente sinestésica, <br />
            envolvente de todos os nossos sentidos.
            <br />
            Seja você um cozinheiro ou um consumidor, é importante <br />
            pensar em usar toda a gama que temos à nossa disposição <br />
            para produzir ou consumir uma obra-prima. Porque, como <br />
            sabemos, um prato é julgado pelo menos por sua aparência,
            <br />
            seu cheiro e seu sabor.
            <br />
          </p>
        </div>
        <div className={style.centralizaTexto}>
          <h1 className={style.textoIta}>Drinks</h1>
          <div className={style.flexRow}>
            <img src={ImgCard9} className={style.marginImgTop} />
          </div>
        </div>
        <div className={style.centralizaTexto}>
          <h1 className={style.textoIta}>
            Escolha sua culinária favorita
          </h1>
          <div className={style.cardEscolha}>
            <div>
              <h1>Asian Food</h1>
              <img src={ImgCard10} className={style.tamanhoPadraoImg} />
            </div>
            <div>
              <h1>Italian Food</h1>
              <img src={ImgCard11} className={style.tamanhoPadraoImg} />
            </div>
            <div>
              <h1>Mexican Food</h1>
              <img src={ImgCard12} className={style.tamanhoPadraoImg} />
            </div>
            <div>
              <h1>Arabian Food</h1>
              <img src={ImgCard13} className={style.tamanhoPadraoImg} />
            </div>
            <div>
              <h1>Thai Food</h1>
              <img src={ImgCard14} className={style.tamanhoPadraoImg} />
            </div>
            <div>
              <h1>Brazilian Food</h1>
              <img src={ImgCard15} className={style.tamanhoPadraoImg} />
              <p className={style.textcentral}>e muitas outras...</p>
            </div>
          </div>
        </div>
      </body>
      <Footer />
    </section>
  )
};


