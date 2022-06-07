import React from "react";
import style from "../Cadastro/cadastro.module.css";

export default () => {
    return (
        <body className={style.fundo}>
            <h1 className={style.cadastro}>Cadastro</h1>
            <div className={style.formulario}>
                <form action="/pagina-processa-dados-do-form" method="post">
                    <div>
                        <label for="nome">Nome Completo:</label><br/>
                        <input type="text" id="nome" placeholder="Digite o seu nome..." />
                    </div>
                    <div>
                        <label for="date">Data de Nascimento:</label><br/>
                        <input type="date" id="date" placeholder="Ex.: 00/00/0000" />
                    </div>
                    <div>
                        <label for="email">E-mail:</label><br/>
                        <input type="email" id="email" placeholder="email@email.com" />
                    </div>
                    <div>
                        <label for="telefone">Telefone:</label><br/>
                        <input type="number" placeholder="(00) 0000-0000" />
                    </div>
                    <div>
                        <label for="cpf">CPF:</label><br/>
                        <input type="number" placeholder="000.000.000-00" />
                        <div>
                            <div>
                                <label for="telefone">CEP:</label><br/>
                                <input type="number" placeholder="00.000-000" />
                            </div>

                            <div>
                                <label for="entrega">Meio de Entrega:</label><br/>
                                <input type="text" id="entrega" placeholder="Carro, Moto ou Bicicleta" />
                            </div>
                            <div>
                                <label for="senha">Senha:</label><br/>
                                <input type="number" id="senha" placeholder="******" />
                            </div>
                        </div>
                    </div>
                    <div className={style.alinhamentoButton}>
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>
        </body>
    );
};