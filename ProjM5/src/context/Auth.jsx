import React, {useState, useEffect, createContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { createSession, createUser, createProduct} from "../utils/axios"
export const AuthContext = createContext('');


export const AuthProvider = ({children}) =>{

    const navigate = useNavigate();

    const [user, setUser] = useState('');

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
       const recoveredUser = localStorage.getItem('user');
      
       if(recoveredUser != undefined){
           setUser(recoveredUser);
       }
    console.log(recoveredUser);
    
       setLoading(false);
    },[])


  


    const login = async (email, senha)=>{

        
        const usuario = await createSession(email, senha)
       
        console.log('login auth', usuario.data);
       
        const senhaUsuario = usuario.data.Senha
        console.log(senhaUsuario)

        if(senhaUsuario === senha){
            const loggedUser = usuario.data.Email;
            localStorage.setItem('user', loggedUser);
        }else{
            return alert('Senha errada')
        }

        const loggedUser = usuario;


        // localStorage.setItem('user', loggedUser);
        
       // api.defaults.headers.Authorization = `Bearer ${token}`;

      
            setUser(loggedUser);
            navigate('/')
        

        
    }

    const cadastro = async(email, senha, nome, idade, endereco, favorito)=>{
        const novoUsuario = await createUser(email, senha, nome, idade, endereco, favorito)
        console.log(novoUsuario);
        if(email && senha){
            await login(email, senha)
        }
        //Implementar a função de adicionar o usuario aqui
    }

    const novoProduto = async(nome, marca, preco, validade, ingredientes, qtd)=>{
        const produto = await createProduct(nome, marca, preco, validade, ingredientes, qtd)
        console.log(produto);
        
    }

    const logout = ()=>{
        console.log("logout");
        localStorage.removeItem('user')
        // api.defaults.headers.Authorization = null;
        setUser(null);
        navigate('/Login')
    };

    return(
        <AuthContext.Provider 
        value={{authenticate: !!user, user, login, cadastro, novoProduto, loading, logout}}>
        {children}
        </AuthContext.Provider>    
    )
}