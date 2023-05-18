import { React, useState, useEffect } from 'react'
import { Products } from '../src/components/Product';
import "../styleSheets/Home.css"
import { Nav } from '../src/components/Nav';


export function Home() { 
const [products, setProducts] = useState([]);
const [OpenModal, setOpenModal] = useState(false)

const Fechtproduct = async () =>{
  const url = await fetch('http://localhost:8000/api/products')
  const data  = await url.json()
  setProducts(data)
}

useEffect(() => {
Fechtproduct()
}, [])

  return (
  <div className='main_product_container'>
    
          {/* <div className='model_home_container'>
             <div className='modal'>
                <h1>modal</h1>
            </div>
          </div> */}

          <Nav setProducts={setProducts}/>   

         <div className='product_home_container'>
            {products.map((p) => (
              <div className='columns' key={p.id}>
                <Products 
                priceProduct={p.price}
                imageProduct={p.image} 
                idProduct={p.id}
                />
              </div>
            ))}
         </div>
  </div>
  )
}