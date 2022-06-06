import React, {useState, useEffect, createContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { createSession} from "../utils/axios"
export const AuthContext = createContext();


export const AuthProvider = ({children}) =>{

    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
       const recoveredUser = localStorage.getItem('user');
      
       if(recoveredUser){
           setUser(JSON.parse(recoveredUser));
           api.defaults.headers.Authorization = `User ${user}`;
       }
       setLoading(false);
    },[])

    const login = async (email, senha)=>{

        
        const response = await createSession(email, senha)

        console.log('login auth', response.data);


        const loggedUser = response.data.user;


        localStorage.setItem('user', JSON.stringify(loggedUser));
        
       // api.defaults.headers.Authorization = `Bearer ${token}`;

      
            setUser(loggedUser);
            navigate('/')
        

        
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
        value={{authenticate: !!user, user, login, loading, logout}}>
        {children}
        </AuthContext.Provider>    
    )
}