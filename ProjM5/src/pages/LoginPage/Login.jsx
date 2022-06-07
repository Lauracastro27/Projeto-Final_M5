import { useState, useContext } from "react";
import HeaderLogin from "../../components/Header/headerLogin";
import api from "../../utils/axios";
import "./style.css";
import { AuthContext } from "../../context/Auth";

function LoginPage() {
  // useEffect(() => {
  //   return () => {
  //     effect
  //   };
  // }, [input]);
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit", { email, senha });
    // console.log(( await api.get(`clientes/email/${email}`)).data)

    await login(email, senha); //Integracao com o contexto e api
  };

  return (
    <section>
      <HeaderLogin />
      <main>
        <div id="login">
          <form className="form" onSubmit={handleSubmit}>
            <div classNameNameName="container">
              <div class="brand-title">Login</div>
              <div className="inputs">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
              <div className="actions">
                <button className="bt1" type="submit">
                  Entrar
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </section>
  );
}

export default LoginPage;
