import React from 'react'
import style from "./estilo.module.css"
import Esquerdo from "../img/ladoesquerdo.png" 
import Direito from "../img/ladodireito.png"
import Loading from "../img/loading.png"
const Animacao = () => {
    
  return(
    <main className={style.main}>
    <div className={style.pz}>
      <img src={Esquerdo} className={style.esquerdo}/>
      <img src={Direito} className={style.direito}/>
    </div>
    <div className={style.loading}>
       <img src={Loading}/>
       <span className={style.bola}></span>
       <span className={style.bola}></span>
       <span className={style.bola}></span>
    </div>
  </main>
  )
} 

export default Animacao;