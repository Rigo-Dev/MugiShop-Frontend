import React, { useState, useEffect } from 'react'
import '../../styleSheets/Cart.css'
import { AiFillDelete } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2"
import { ViewProduct, DeleteProduct } from '../../utils/CartFunctions';
 
export default function CarritoDeCompras({ state }) {
  const [productCart, setProductCart] = useState([])

  const handleClick = (e) => {
    let node = e.target
    if(node.className == "cart_open"){ 
      state(false)
    }
  }

  useEffect(() => {
    const getData = async () => {
      const data = await ViewProduct()
      setProductCart(data.reverse())
    }
    getData()
  }, [])
  
  const url = "https://mugishop-miniproyecto.s3.amazonaws.com"

  return (
    <div className='main_cart_container' onClick={handleClick}>
      <div className='cart_container'>
        <div className="cart_open" >
            <div className='add_cart_product'>
              <div className='header_cart'>
                <h1 className='text_header'>Shopping</h1>
                <HiOutlineXMark className='xmark'/>
              </div>
                <div className='main_product_cart_container'>
                {productCart.map((p) =>(
                  <div className='product_cart_container' key={p.id}>
                    <div className='product_cart'>  
                        <p className='name_product_cart'>{p.product}</p>
                        <img className='image_product_cart' src={url + p.product_img} alt={p.product_img}/>
                        <AiFillDelete className='garbage' onClick={() =>{DeleteProduct(p.id, setProductCart)}}/>
                    </div>
                  </div>
                ))}
                </div>
            </div>
        </div>
      </div> 
    </div>
  )
}
