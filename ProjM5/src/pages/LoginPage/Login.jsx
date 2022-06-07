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
        <div classNameNameName="container">
        <div class="brand-title">Login</div>
        <div className="inputs">

               <label htmlFor="email">
                  Email
               </label>
               <input type="email" 
                name="email"
                id="email" 
                onChange={(e)=> setEmail(e.target.value)}/>
            

         
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
              <button className='bt1' type="submit">Entrar</button>
            </div>
            </div>
        </form>
    </div>

    </main>
  )
}

export default LoginPage;
