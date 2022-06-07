import React, { useState, useEffect, useContext } from 'react'
import Header from '../components/header'
import "../assents/index.css"
import "../assents/App.css"
import {AuthContext} from '../context/Auth'
import {getUsers} from '../utils/axios'
function App() {
 // const [url, setUrl] = useState()
 const [users, setUsers] = useState([]);
 const [loading, setLoading] = useState(true);
 const {logout} = useContext(AuthContext);
  const handleLogout = ()=>{
    logout();
  }

  useEffect(()=>{
    (async()=>{
      const response = await getUsers();
      setUsers(response.data);
      setLoading(false);
    })()
  },[])

  if(loading){
    return <div className="loading"> Carregando dados...</div>
  }

  return (
    <div>
      
      <Header />
      <button onClick={handleLogout}>Sair</button>
      <ul>
        {users.map((user)=>(
          <li key={user._id}>
            {user.Nome} - {user.Email}
          </li>
        ))}
      </ul>

    </div>
    
  )
}

export default App
