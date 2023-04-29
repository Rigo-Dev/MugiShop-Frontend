import { React, useState, useEffect } from 'react'
import { Products } from '../src/components/Product';
import "../styleSheets/Home.css"
import { Nav } from '../src/components/Nav';
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsFillCartCheckFill } from "react-icons/bs"


export function Home() { 
const [products, setProducts] = useState([]);
const [cart, setCart] = useState(false)

const token = sessionStorage.getItem('token')

const VisibleCart = () =>{
  if(!token){
    setCart(!cart)
  }
}



{/* //! ESTA PARTE HACE LA PETICION HACIA EL BACKEND */}
const Fechtproduct = async () =>{
  const url = await fetch('http://localhost:8000/api/products')
  const data  = await url.json()

  setProducts(data)
}
{/* //!------------------------------------------------------ */}


{/* //! EL USeEFFECT LO QUE SE ENCARGA DE HACER UNA PETICION CADA VEZ QUE SE INICIA LA PAGINA */}
useEffect(() => {
Fechtproduct()
VisibleCart()

}, [])
{/* //!-------------------------------------------------------------------------------------- */}


  return (
  <div className='main_product_container'>
    <>
      <Nav/>
    </>
           <div className='container_cart' >
              <AiOutlineShoppingCart className='CartVisible Cart'/>
          </div>
         <div className='product_home_container'>
          {/* //!ESTA PARTE ES LA QUE SE ENCARGA DE MOSTRAR EL COMPONENTE DE PROFUCTO */}
            {products.map((p) => (
              <div className='columns' key={p.id}>
                <Products 
                priceProduct={p.price}
                imageProduct={p.image} 
                idProduct={p.id}
                />
              </div>
            ))}
          {/* //!-------------------------------------------------------------------- */}
         </div>
  </div>
  )
}