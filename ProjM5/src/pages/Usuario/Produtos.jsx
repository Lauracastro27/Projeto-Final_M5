import React, { useState, useEffect, useContext } from 'react'
import {AuthContext} from '../../context/Auth'
import {getProdutos, deleteProduct} from '../../utils/axios'
function App() {
 // const [url, setUrl] = useState()
 const [produtos, setProdutos] = useState([]);
 const [loading, setLoading] = useState(true);
 const {logout } = useContext(AuthContext);
  const handleLogout = ()=>{
    logout();
  }

  const deletarProduto = async(id)=>{
    const produtoAntigo = await deleteProduct(id)
    console.log(produtoAntigo)
    obterProdutos();
}

  const obterProdutos = async()=>{
    const response = await getProdutos();
    setProdutos(response.data);
    setLoading(false);
  }
  
  useEffect(()=>{
    (obterProdutos())
    },[]);

  
  if(loading){
    return <div className="loading"> Carregando dados...</div>
  }

  return (
    <div>
      
      <button onClick={handleLogout}>Sair</button>
      <ul>
        {produtos.map((produto)=>(
          <li key={produto._id}>
              <p>
           Nome do Produto: {produto.Nome} 
           Marca: {produto.Marca}
           Preço: {produto.Preco} 
           Quantidade: {produto.Quantidade}
           Validade: {produto.Validade}
           Ingredientes: {produto.Ingredientes}
           <button onClick={()=>deletarProduto(produto._id)}>Deletar Produto</button>
            </p>
          </li>
        ))}
      </ul>
            
    </div>
    
  )
}

export default App