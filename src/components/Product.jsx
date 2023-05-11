import React from "react";
import "../../styleSheets/Product.css"
import { useState } from "react";
import { AiOutlineShoppingCart, AiFillEye, AiTwotoneShopping } from "react-icons/ai";
import { AddProduct } from "../../utils/CartFunctions";

export function Products({ nameProduct, imageProduct, idProduct, priceProduct }) {
  {/*//!ESTO ES PARA CAMBIAR DE LOGO ENTRE EL DE COMPRA Y EL DE FAVORITO*/}
  const [shopping, setShopping] = useState(false)

  const handleShoppingClick = () =>{
    setShopping(!shopping)
  }

  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };
  {/*//!---------------------------------------------------------------*/}


  const url = "https://mugishop-miniproyecto.s3.amazonaws.com"

  return (
    <div className="product_container">
      {/*//!LAS PALABRAS ENTRE {} SON LAS QUE USO PARA DARLE INFORMACION Y MOSTRAR LA INFORMACION EN EL LUGAR QUE QUIERO EN EL HOME*/}
      <h1 className="name_product">{nameProduct}</h1>
      <img className="image" src={url + imageProduct} alt={idProduct} />
        <div className="options_product">
        <h4 className="price_product">${priceProduct}</h4>
      {/*//!-----------------------------------------------------------------------------------------------------------------------*/}
            {shopping ? (
              <AiTwotoneShopping className="shopping cart-shoppin" onClick={handleShoppingClick}></AiTwotoneShopping>
            ): (
              <AiOutlineShoppingCart className="shopping cart-shopping"  onClick={ ()=>{handleShoppingClick(), AddProduct(idProduct)}} />
            )}
              <AiFillEye className="shopping liked-icon" onClick={handleLikeClick} />
        </div>
    </div>
  );
}
