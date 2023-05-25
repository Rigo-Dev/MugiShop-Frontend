import React, { useState, useEffect } from 'react'
import '../../styleSheets/Cart.css'
import { AiFillDelete } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2"
import { ViewProduct, DeleteProduct } from '../../utils/CartFunctions';
import { Toaster, toast } from 'react-hot-toast';

 
export default function ShoppingCart({ state }) {
  const [productCart, setProductCart] = useState([])


  const handleClick = (e) => {
    let node = e.target
    if(node.className.baseVal == "xmark" || node.className == "cart_open"){ 
      state(false)
    }
  }

  const getData = async () => {
    let data = await ViewProduct()
    if (data.length >= 1) {
      data =  data.reverse()      
    }
     setProductCart(data)
     console.log(data);
  }

  useEffect(() => {
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
                        <div className='container_image_product_cart'>
                          <img src={url + p.product_img} alt={p.product_img}/>
                        </div>
                          <div className='container_info_product_cart'>
                            <div className='info_product_cart'>
                              <p className='name'>{p.product}</p>
                              <p className='price'>$11</p>
                            </div>
                              <AiFillDelete className='garbage' onClick={() =>{DeleteProduct(p.id, setProductCart), toast.error("eliminated")}}/>
                          </div>
                    </div>
                    <hr />
                  </div>
                ))}
                </div>
            </div>
        </div>
      </div> 
      <Toaster/>
    </div>
  )
}
