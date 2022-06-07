import axios from 'axios'


const api = axios.create({
  baseURL: "https://morning-dusk-84596.herokuapp.com",
});

export default api;

export const createSession = async (email) =>{
  
  return await api.get(`clientes/email/${email}`);
  
}

export const getUsers = async ()=>{
  return api.get('clientes');
}

export const createUser = async (email, senha, nome, idade, endereco, favorito)=>{
  return await api.post('clientes', {Email: email, Senha: senha, 
    Nome: nome, Idade: idade, Endereco: endereco, Favorito : favorito})

}


export const createProduct = async (nome, marca, preco, validade, ingredientes, qtd)=>{
  return await api.post('produtos', {Nome: nome, Marca: marca, Preco: preco, Validade: validade, 
    Ingredientes: ingredientes, Quantidade: qtd})

}
//1 - get nos cliente
//2- verificar o email do cliente - usando o find
//caso nao tenha retorna um erro
//guardar cliente em uma variavel
//comparar senha do cliente guardado com a senha do input
