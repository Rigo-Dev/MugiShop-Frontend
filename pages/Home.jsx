import { React, useState, useEffect } from 'react'
import { Products } from '../src/components/Products';
import "../styleSheets/Home.css"
import productsJSON from "../products.json";


export function Home() { 
  const [products, setProducts] = useState([])
  useEffect(() => {
    setProducts(productsJSON)
  }, [])
  
  return (
  <div className='main'>
    <div className='product_home_container'>
         {products.map((p) => (
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
