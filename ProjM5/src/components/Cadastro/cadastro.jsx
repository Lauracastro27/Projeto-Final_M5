import React, {useState, useContext}from "react";
import style from "../Cadastro/cadastro.module.css";
import { AuthContext } from "../../context/Auth";
import Header from "../../components/Header/header";
import Footer from "../Footer/footer"

const CadastroPage = () => {

const { cadastro } = useContext(AuthContext);
 

  
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [idade, setIdade] = useState(0);
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [favorito, setFavorito] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await cadastro(email, senha, nome, idade, endereco, favorito); //Integracao com o contexto e api
  };


    return (
        <section>
            <Header />

        <body className={style.fundo}>
            <Header/>
            <h1 className={style.cadastro}>Cadastro</h1>
            <div className={style.formulario}>
                <form  method="post" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nome">Nome Completo:</label><br/>
                        <input type="text" id="nome" placeholder="Digite o seu nome..." 
                          onChange={(e) => setNome(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="date">Idade:</label><br/>
                        <input type="number" id="date" placeholder="Digite sua idade" 
                          onChange={(e) => setIdade(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="email">E-mail:</label><br/>
                        <input type="email" id="email" placeholder="email@email.com" 
                          onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                   
                    <div>
                        <label htmlFor="cpf">Endereço:</label><br/>
                        <input type="text" placeholder="Rua xxxx" 
                          onChange={(e) => setEndereco(e.target.value)}/>
                        <div>
                            <div>
                                <label htmlFor="fav">Comida Favorita:</label><br/>
                                <input type="text" placeholder="Pizza"
                                  onChange={(e) => setFavorito(e.target.value)} />
                            </div>
       
                            <div>
                                <label htmlFor="senha">Senha:</label><br/>
                                <input type="number" id="senha" placeholder="123"
                                  onChange={(e) => setSenha(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <p></p>
                    <div className={style.alinhamentoButton}>
                        
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>
        </body>    
        <Footer />
        </section>

    );
};

export default CadastroPage;