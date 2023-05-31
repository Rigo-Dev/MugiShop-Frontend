import React from "react";
import "../../styleSheets/Product.css"
import { useState } from "react";
import { AiOutlineShoppingCart, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import toast, { Toaster } from 'react-hot-toast';
import { AddProduct } from "../../utils/CartFunctions";

export function Products({ nameProduct, imageProduct, idProduct, priceProduct, OpenModal }) {
  {/*//!ESTO ES PARA CAMBIAR DE LOGO ENTRE EL DE COMPRA Y EL DE FAVORITO*/}

  const token = sessionStorage.getItem("token")

  const handleShoppingClick = async () =>{
    if (token) {
      const messageError = await AddProduct(idProduct)

      console.log(messageError);

      if(messageError.error != undefined){
        toast.error(messageError.error)
        return
      }
      toast.success(messageError.message)

    }else{
      toast.error("Need Login")
    }
  }

  const [view, setView] = useState(true);



  const handleViewProduct = () => {
  setView(!view)
  };
  {/*//!---------------------------------------------------------------*/}


  const url = "https://mugishop-miniproyecto.s3.amazonaws.com"


  return (
    <div className="product_container">
      {/*//!LAS PALABRAS ENTRE {} SON LAS QUE USO PARA DARLE INFORMACION Y MOSTRAR LA INFORMACION EN EL LUGAR QUE QUIERO EN EL HOME*/}
      <img className="image" src={url + imageProduct} alt={idProduct} />
        <div className="options_product">
          <h4 className="price_product">${priceProduct}</h4>
      {/*//!-----------------------------------------------------------------------------------------------------------------------*/}
              <AiOutlineShoppingCart className="shopping cart-shopping"  onClick={()=>{handleShoppingClick()}} />

            {view?(
              <AiFillEye className="view-image view-icon" onClick={()=>OpenModal(url+imageProduct, nameProduct, priceProduct, idProduct)} />

              ):(
              <div className="">
                <AiFillEyeInvisible className="view-image view-icong" onClick={handleViewProduct}/> 
              </div>
            )}
            <Toaster 
              toastOptions={{
              duration: 2000
            }}  
            />
        </div>
    </div>
  );
}
