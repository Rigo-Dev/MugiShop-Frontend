import { React, useState, useEffect } from "react";
import "../../styleSheets/Cart.css";
import { AiFillDelete } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";
import { ViewProduct, DeleteProduct } from "../../utils/CartFunctions";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { CircleLoader } from "react-spinners";

export default function ShoppingCart({ state }) {
  const [productCart, setProductCart] = useState([]);
  const [ButtonShooping, setButtonShooping] = useState(false);
  const [Loader, setLoader] = useState(true);

  const handleClick = (e) => {
    let node = e.target;
    if (node.className.baseVal == "xmark" || node.className == "cart_open") {
      state(false);
    }
  };

  const getData = async () => {
    let data = await ViewProduct();
    if (data.length >= 1) {
      data = data.reverse();
      setButtonShooping(true);
      setLoader(false);
    } else {
      setButtonShooping(false);
      setTimeout(() =>{
        setLoader(false);
      },2500)
    }
    setProductCart(data);
    console.log(data);
  };


  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();

  const url = "https://mugishop-miniproyecto.s3.amazonaws.com";

  return (
    <div className="main_cart_container" onClick={handleClick}>
      <div className="cart_container">
        <div className="cart_open">
          <div className="add_cart_product">
            <div className="header_cart">
              <h1>Shopping</h1>
              <HiOutlineXMark className="xmark" />
            </div>
            <div className="main_product_cart_container">

              {Loader ? (
                <div className="loader_cart">
                  <CircleLoader />
                </div>
              ) : (
                <>
                  {productCart.length > 0 ? (
                    <div>
                      {productCart.map((p) => (
                          <div className="product_cart_container" key={p.id}>
                            <div className="product_cart">
                              <div className="container_image_product_cart">
                                <img
                                  src={url + p.product_img}
                                  alt={p.product_img}
                                />
                              </div>
                              <div className="container_info_product_cart">
                                <div className="info_product_cart">
                                  <p className="name">{p.product}</p>
                                  <p className="price">$11</p>
                                </div>
                                <AiFillDelete
                                  className="garbage"
                                  onClick={() => {
                                    DeleteProduct(p.id, setProductCart),
                                      toast.error("eliminated"),
                                      getData(),
                                      setLoader(true);
                                  }}
                                />
                              </div>
                            </div>
                            <hr />
                          </div>
                      ))}
                        <div className="button_shooping_container">
                          {ButtonShooping ? (
                            <button onClick={() => navigate("/payment")}>
                              Shooping
                            </button>
                          ) : (
                            false
                          )}
                        </div>
                    </div>
                  ):(
                    <div className="no_product_cart">
                      <p>no product in cart</p>
                    </div>
                  )}
                  
                </>
              )}

            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
