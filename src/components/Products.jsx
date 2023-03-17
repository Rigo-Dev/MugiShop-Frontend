import React from "react";
import "../../styleSheets/Products.css"
import { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineHeart, AiFillHeart, AiTwotoneShopping } from "react-icons/ai";

export function Products(props) {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const [shopping, setShopping] = useState(false)

  const handleShoppingClick = () =>{
    setShopping(!shopping)
  }

  return (
    <div className="product_container">
      <h1 className="name_product">{props.nameProduct}</h1>
      <img className="image" src={props.imageProduct} alt={props.idProduct} />
        <div className="options">
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
