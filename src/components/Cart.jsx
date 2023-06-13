import { React, useState, useEffect } from "react";
import "../styleSheets/Cart.css";
import { AiFillDelete } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";
import { viewCart } from "../services/RequestCart/viewCart";
import { deleteCart } from "../services/RequestCart/deleteCart";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { CircleLoader } from "react-spinners";

export default function ShoppingCart({ state }) {
  const [productCart, setProductCart] = useState([]);
  const [buttonShooping, setButtonShooping] = useState(false);
  const [loader, setLoader] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e, xmark = false) => {
    let node = e.target;

    if (
      node.className.baseVal == "btn-xmark" ||
      node.className.baseVal == "xmark" ||
      node.className == "cart_open" ||
      node.tagName == "path"
    ) {
      state(false);
    }
  };

  const getData = async () => {
    let data = await viewCart();
    if (data.length >= 1) {
      data = data.reverse();
      setButtonShooping(true);
      setLoader(false);
    } else {
      setButtonShooping(false);
      setLoader(false);
    }
    setProductCart(data);
    console.log(data);
  };

  useEffect(() => {
    setIsOpen(true);
    getData();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="main_cart_container" onClick={handleClick}>
      <div className="cart_container">
        <div className={isOpen ? "cart_open" : "cart_close"}>
          <div className="add_cart_product">
            <div className="header_cart">
              <h1>Shopping</h1>
              <button className="btn-xmark">
                <HiOutlineXMark className="xmark" />
              </button>
            </div>
            <div className="main_product_cart_container">
              {loader ? (
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
                                src={
                                  import.meta.env.VITE_IMAGES_URL +
                                  p.product_img
                                }
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
                                  deleteCart(p.id, setProductCart),
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
                        {buttonShooping ? (
                          <button onClick={() => navigate("/payment")}>
                            Shooping
                          </button>
                        ) : (
                          false
                        )}
                      </div>
                    </div>
                  ) : (
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
