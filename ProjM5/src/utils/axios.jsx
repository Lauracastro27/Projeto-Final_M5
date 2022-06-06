import axios from 'axios'


const api = axios.create({
  baseURL: "https://morning-scrubland-18153.herokuapp.com/",
});

export default api;

export const createSession = async (email, senha) =>{
  return api.post("clientes", {email, senha});
}

export const getUsers = async ()=>{
  return api.get('clientes');
}