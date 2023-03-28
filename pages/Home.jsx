import { React, useState, useEffect } from 'react'
import { Products } from '../src/components/Products';
import "../styleSheets/Home.css"
import productsJSON from "../products.json";


export function Home() { 

  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategias] = useState("todos");

  useEffect(() =>{
    setProducts(productsJSON)
  },[])
  
  const handleCategoriaChange = (val) =>{
    setSelectedCategias(val.target.value)
  }

  const filteredProduct = products.filter((p) =>{
    if(selectedCategories === "todos"){
      return true
    }else{
      return p.categories.toLowerCase() === selectedCategories
    }
  })

  return (
  <div className='main_product_container'>
    <div className='nav_container'>
      <div className='nav'>
        <nav>
            <label htmlFor="categorias">Gategoría:</label>
            <select id="categorias" className='categorias' value={selectedCategories} onChange={handleCategoriaChange}>
              <option value="todos" className='item'>Todos los productos</option>
              <option value="juan"  className='item'>Juan</option>
              <option value="nada"  className='item'>Nada</option>
              <option value="casa"  className='item'>Casa</option>
              <option value="carros"className='item'>Carros</option>
              <option value="hola"  className='item'>Hola</option>
              <option value="adios" className='item'>Adios</option>
            </select>
          </nav>
        </div>
      </div>
        <div className='product_home_container'>
         {filteredProduct.map((p) => (
           <div className='columns' key={p.id}>
             <Products 
             idProduct={p.id} 
             imageProduct={p.image} 
             />
           </div>
         ))}
        </div>
  </div>
  )
}