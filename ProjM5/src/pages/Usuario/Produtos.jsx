import React, { useState, useEffect, useContext } from 'react'
import {AuthContext} from '../../context/Auth'
import {getProdutos, deleteProduct} from '../../utils/axios'
import Header from '../../components/Header/header'
import './style.css'
function App() {

 const [produtos, setProdutos] = useState([]);
 const [loading, setLoading] = useState(true);
 const {logout } = useContext(AuthContext);

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
      <Header/>
      <h1 className='titulo'>Produtos</h1>
      <ul>
        {produtos.map((produto)=>(
          <li key={produto._id}>
              <p> Nome do Produto: {produto.Nome}</p>
           <p>Marca: {produto.Marca}</p>
           <p>Preço: {produto.Preco} </p>
           <p>Quantidade: {produto.Quantidade}</p>
           <p>Validade: {produto.Validade}</p>
           Ingredientes: {produto.Ingredientes}
           <button className='btn' onClick={()=>deletarProduto(produto._id)}>Deletar Produto</button>
          </li>
        ))}
      </ul>
            
    </div>
    
  )
}

export default App