import React from "react";
import "../../styleSheets/Product.css"
import { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineHeart, AiFillHeart, AiTwotoneShopping } from "react-icons/ai";

export function Products({ nameProduct, imageProduct, idProduct, priceProduct }) {
  const [shopping, setShopping] = useState(false)

  const handleShoppingClick = () =>{
    setShopping(!shopping)
  }

  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const url = "https://mugishop-miniproyecto.s3.amazonaws.com"

  return (
    <div className="product_container">
      <h1 className="name_product">{nameProduct}</h1>
      <img className="image" src={url + imageProduct} alt={idProduct} />
        <div className="options_product">
        <h4 className="price_product">${priceProduct}</h4>
            {shopping ? (
              <AiTwotoneShopping className="shopping cart-shoppin" onClick={handleShoppingClick} />
            ): (
              <AiOutlineShoppingCart className="shopping cart-shopping" onClick={handleShoppingClick} />
            )}
            {liked ? (
              <AiOutlineHeart className="shopping liked-icon" onClick={handleLikeClick} />
            ) : (
              <AiFillHeart className="shopping like-icon" onClick={handleLikeClick} />
              
            )}
        </div>
    </div>
  );
}
