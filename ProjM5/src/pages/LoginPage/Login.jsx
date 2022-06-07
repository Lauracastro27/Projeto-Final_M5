import { useState, useContext } from 'react'
import Header from '../../components/Header/header'
import api from "../../utils/axios"
import './style.css'
import { AuthContext } from '../../context/Auth'

function LoginPage() {
  const {login} = useContext(AuthContext);
  
  
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log('submit', {email, senha})
   
    
   await login(email, senha);//Integracao com o contexto e api
  }

  return (
    <main>
    <Header />
    <div id="login">


      <form className="form" onSubmit={handleSubmit}>
        <div className="container">
        <div className="brand-title">Login</div>
        <div className="inputs">


               <label htmlFor="email">
                  Email
               </label>
               <input type="email" 
                name="email"
                id="email" 
                onChange={(e)=> setEmail(e.target.value)}/>
             </div>

          <div className="field">
               <label htmlFor="password">
                 Senha
               </label>
            <input 
            type="password" 
            name="password" 
            id="password"
            onChange={(e)=> setSenha(e.target.value)}/>
          </div> 

            <div className="actions">
              <button type="submit">Entrar</button>
            </div>
    </div>
        </form>
    </div>

    </main>
  )
}

export default LoginPage;
