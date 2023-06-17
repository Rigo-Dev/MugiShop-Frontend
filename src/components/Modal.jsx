import React from "react";
import "../styleSheets/Modal.css";
import { HiXMark } from "react-icons/hi2";
import { Toaster } from "react-hot-toast";
import { addModalCart } from "../services/RequestCart/addModalProduct";

export function Modal({ open, closeModal, dataModal }) {
  if (!open) return null;

  return (
    <div className="container_modal">
      <div className="modal">
        <div className="modal_header">
          <button className="modal_btn_close" onClick={closeModal}>
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
                <button onClick={() => addModalCart(dataModal.id)}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
