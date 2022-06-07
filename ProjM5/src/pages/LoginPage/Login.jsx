import { useState, useContext } from 'react'
import Header from '../../components/Header/header'
import api from "../../utils/axios"
import './style.css'
import { AuthContext } from '../../context/Auth'

function LoginPage() {
  // useEffect(() => {
  //   return () => {
  //     effect
  //   };
  // }, [input]);
  const {login} = useContext(AuthContext);
  
  
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log('submit', {email, senha})
   // console.log(( await api.get(`clientes/email/${email}`)).data)
    
   await login(email, senha);//Integracao com o contexto e api
  }

  return (
    <main>
    <Header />
    <div id="login">

      <h1 className="title"> Login</h1>

       

        <form className="form" onSubmit={handleSubmit}>
            <div className="field">
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

        </form>
    </div>

    </main>
  )
}

export default LoginPage;
