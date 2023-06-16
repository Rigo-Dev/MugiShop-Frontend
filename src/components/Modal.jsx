import React from "react";
import "../../styleSheets/Modal.css";
import { HiXMark } from "react-icons/hi2";
import { Toaster, toast } from "react-hot-toast";
import { AddProduct } from "../../utils/CartFunctions";

export function Modal({ Open, CloseModal, dataModal }) {
  if (!Open) return null;

  const token = sessionStorage.getItem("token");

  const handleShoppingClick = async () => {
    if (token) {
      const message = await AddProduct(dataModal.id);
      console.log(dataModal.id);
      console.log(message);

      if (message.error != undefined) {
        toast.error(message.error);
        return;
      }
      toast.success(message.message);
    } else {
      toast.error("Need Login");
    }
  };
  return (
    <div className="container_modal">
      <div className="modal">
        <div className="modal_header">
          <button className="modal_btn_close" onClick={CloseModal}>
            <HiXMark />
          </button>
        </div>
        <div className="modal_body">
          <div className="modal_image">
            <img src={dataModal.img} alt="img" />
          </div>
          <div className="modal_info_container">
            <div className="modal_info">
              <h2>{dataModal.name}</h2>
              <p>Price ${dataModal.price}</p>
            </div>
            <div className="modal_btn_shoopin_container">
              <div className="modal_btn_shoopin">
                <button onClick={handleShoppingClick}>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
