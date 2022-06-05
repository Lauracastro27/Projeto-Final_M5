import { useState, useEffect } from 'react'
import Header from '../components/header'
import "../assents/index.css"
import api from "../utils/axios"

function App() {
  const [url, setUrl] = useState([]);
  
  useEffect(() => {
    api.get("clientes").then(({data}) => {
          setUrl(data);
      });
      console.log(url)
  }, []);


  return (
    <main>
    <Header />
         <div>
           {console.log(url)}
            cliente : {url?.map((nome) =>(
             
                 <li key={nome.id}>
                     <h2>
                         {nome.Nome}
                     </h2>
                 </li>
             
         ))} 
        
       </div>
    </main>
  )
}

export default App
