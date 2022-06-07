import { useState, useContext } from "react";
import Header from "../../components/Header/header";
import api from "../../utils/axios";
import "./style.css";
import { AuthContext } from "../../context/Auth";

function CadastroPage() {
  const { cadastro, user } = useContext(AuthContext);
  console.log(user);

  
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [idade, setIdade] = useState(0);
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [favorito, setFavorito] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit", { email, senha });
   

    await cadastro(email, senha, nome, idade, endereco, favorito); //Integracao com o contexto e api
  };

  return (
    <main>
      <Header />

      <div id="container">
        <a className="links" id="paralogin"></a>

        <div className="content">
          <div id="cadastro">
            <form method="post" onSubmit={handleSubmit}>
              <h1>Cadastro</h1>

              <p>
                <label htmlFor="nome">Seu nome</label>
                <input
                  id="nome"
                  name="nome"
                  required="required"
                  type="text"
                  placeholder="Insira seu nome"
                  onChange={(e) => setNome(e.target.value)}
                />
              </p>

              <p>
                <label htmlFor="idade">Sua idade</label>
                <input
                  id="idade"
                  name="idade"
                  required="required"
                  type="number"
                  placeholder="Insira sua idade"
                  onChange={(e) => setIdade(e.target.value)}
                />
              </p>

              <p>
                <label htmlFor="endereço">Seu Endereço</label>
                <input
                  id="endereço"
                  name="endereço"
                  required="required"
                  type="text"
                  placeholder="Rua resilia"
                  onChange={(e) => setEndereco(e.target.value)}
                />
              </p>

              <p>
                <label htmlFor="comida">Sua comida Favorita</label>
                <input
                  id="comida"
                  name="comida"
                  required="required"
                  type="text"
                  placeholder="Pizza"
                  onChange={(e) => setFavorito(e.target.value)}
                />
              </p>

              <p>
                <label htmlFor="email">Seu e-mail</label>
                <input
                  id="email"
                  name="email"
                  required="required"
                  type="email"
                  placeholder="example@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </p>

              <p>
                <label htmlFor="senha">Sua senha</label>
                <input
                  id="senha"
                  name="senha"
                  required="required"
                  type="password"
                  placeholder="1234"
                  onChange={(e) => setSenha(e.target.value)}
                />
              </p>

              <p>
                <input type="submit" value="Cadastrar" />
              </p>

              <p className="link">
                Já tem conta?
                <a href="/Login"> Ir para Login </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CadastroPage;
