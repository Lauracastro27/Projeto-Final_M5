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

export const createUser = async ()=>{
  return await api.post('clientes')

}

//1 - get nos cliente
//2- verificar o email do cliente - usando o find
//caso nao tenha retorna um erro
//guardar cliente em uma variavel
//comparar senha do cliente guardado com a senha do input
