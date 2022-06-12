import { useState, useContext } from "react";
import Header from "../../components/Header/header";
import { AuthContext } from "../../context/Auth";
import "./estilo.css";

function UsuarioPage() {
  const { novoProduto } = useContext(AuthContext);

  //   nome, marca, preco, validade, ingredientes, qtd
  const [marca, setMarca] = useState("");
  const [preco, setPreco] = useState("");
  const [validade, setValidade] = useState(0);
  const [nome, setNome] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [qtd, setQtd] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit", { nome, marca });

    await novoProduto(nome, marca, preco, validade, ingredientes, qtd); //Integracao com o contexto e api
  };

  return (
    <>
      <Header />
      <main className="main">
        <div id="container">
          <a className="links" id="paralogin"></a>

          <div className="content">
            <div id="cadastro">
              <form method="post" onSubmit={handleSubmit}>
                <h1 className="titulo">Novo Produto</h1>
                <p>
                  <label htmlFor="nome">Produto</label>
                  <input
                    id="nome"
                    name="nome"
                    required="required"
                    type="text"
                    placeholder="Insira o nome do Produto"
                    onChange={(e) => setNome(e.target.value)}
                  />
                </p>
                <p>
                  <label htmlFor="marca">Marca</label>
                  <input
                    id="marca"
                    name="marca"
                    required="required"
                    type="text"
                    placeholder="Insira a Marca do Produto"
                    onChange={(e) => setMarca(e.target.value)}
                  />
                </p>
                <p>
                  <label htmlFor="preco">Preco</label>
                  <input
                    id="preco"
                    name="preco"
                    required="required"
                    type="number"
                    placeholder="Preco"
                    onChange={(e) => setPreco(e.target.value)}
                  />
                </p>
                <p>
                  <label htmlFor="validade">Validade</label>
                  <input
                    id="validade"
                    name="validade"
                    required="required"
                    type="date"
                    placeholder="dd/mm/aa"
                    onChange={(e) => setValidade(e.target.value)}
                  />
                </p>
                <p>
                  <label htmlFor="ingredientes">Ingredientes</label>
                  <input
                    id="ingredientes"
                    name="ingredientes"
                    required="required"
                    type="number"
                    placeholder="numero de ingredientes"
                    onChange={(e) => setIngredientes(e.target.value)}
                  />
                </p>

                <p>
                  <label htmlFor="qtd">Quantidade</label>
                  <input
                    id="qtd"
                    name="qtd"
                    required="required"
                    type="number"
                    placeholder="1"
                    onChange={(e) => setQtd(e.target.value)}
                  />
                </p>
                <p className="buttom">
                  <input type="submit" value="Registrar" />
                </p>
                <p className="link">
                  <a href="/" className="none"> Ir para Home </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default UsuarioPage;
