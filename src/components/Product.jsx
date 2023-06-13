import { React, useState } from "react";
import "../styleSheets/Product.css";
import { AiOutlineShoppingCart, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast, Toaster } from "react-hot-toast";
import { getToken } from "../utils/getToken";
import { addCart } from "../services/RequestCart/addCart";

export function Products({ nameProduct, imageProduct, idProduct, priceProduct,openModal }) {

  const handleShoppingClick = async () => {
    if (getToken()) {
      const messageError = await addCart(idProduct);

      console.log(messageError);

      if (messageError.error !== undefined) {
        toast.error(messageError.error);
        console.log(messageError, "Error");
      } else {
        toast.success(messageError.message);
        console.log(messageError);
      }
    } else {
      toast.error("Need Login");
    }
  };

  const [view, setView] = useState(true);

  const handleViewProduct = () => {
    setView(!view);
  };

  return (
    <div className="product_container">
      <img
        className="image"
        src={import.meta.env.VITE_IMAGES_URL + imageProduct}
        alt={idProduct}
      />
      <div className="info_product">
        <div className="name_image">
          <p>{nameProduct}</p>
        </div>
        <h4 className="price_product">
          <p>$</p> {priceProduct}
        </h4>
        <div className="options_products">
          <AiOutlineShoppingCart
            className="shopping cart-shopping"
            onClick={() => {
              handleShoppingClick();
            }}
          />

          {view ? (
            <AiFillEye
              className="view-image view-icon"
              onClick={() =>
                openModal(
                  import.meta.env.VITE_IMAGES_URL + imageProduct,
                  nameProduct,
                  priceProduct,
                  idProduct
                )
              }
            />
          ) : (
            <div className="">
              <AiFillEyeInvisible
                className="view-image view-icong"
                onClick={handleViewProduct}
              />
            </div>
          )}
        </div>
        <Toaster
          toastOptions={{
            duration: 2000,
          }}
        />
      </div>
    </div>
  );
}
