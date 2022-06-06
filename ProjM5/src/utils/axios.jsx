import axios from 'axios'


const api = axios.create({
  baseURL: "https://morning-scrubland-18153.herokuapp.com/",
});

export default api;

export const createSession = async (email) =>{
  
  return await api.get(`clientes/email/${email}`);
  
}

export const getUsers = async ()=>{
  return api.get('clientes');
}

//1 - get nos cliente
//2- verificar o email do cliente - usando o find
//caso nao tenha retorna um erro
//guardar cliente em uma variavel
//comparar senha do cliente guardado com a senha do input
