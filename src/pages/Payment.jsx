import { React, useState, useEffect } from "react";
import "../styleSheets/Payment.css";
import { viewCart } from "../services/RequestCart/viewCart";
import { CircleLoader } from "react-spinners";
import { fetchPaymentLink } from "../services/RequestPayment/paymentLink";

export default function Payment() {
  const [paymentProduct, setPaymentProduct] = useState([]);
  const [loader, setLoader] = useState(true);
  const [paymentLink, setPaymentLink] = useState(undefined);
  const [toTalPriceProduct, setTotalPriceProduct] = useState(0);

  const getData = async (e) => {
    let data = await viewCart();
    if (data.length >= 1) {
      data = data.reverse();
    }
    setPaymentProduct(data);
    console.log("payment", data);
  };
  
  const totalPrice = () =>{
    let total = 0;
    paymentProduct.map((item) => {
      total = total + item.price;
      });
      setTotalPriceProduct(total);
  }

  useEffect(() => {
    getData();
    fetchPaymentLink(setPaymentLink, setLoader)
  }, []);

  useEffect(() =>{
    totalPrice();
  },[paymentProduct])

  return (
    <div className="main_container_payment">
      <div className="product_payment_container">
        <div className="header_product_payment_container">
          <h1>Cart</h1>
          <div className="header_product_payment">
            <p>Product</p>
            <p>Price</p>
          </div>
        </div>
        {paymentProduct.map((p) => (
          <div className="body_payment_product" key={p.id}>
            <div className="payment_product">
              <img src={import.meta.env.VITE_IMAGES_URL + p.product_img} alt="" />
              <div className="info_pay_product">
                <p>{p.product}</p>
                <p>${p.price}</p>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
      
      <div className="price_payment_container">
        <div className="price_payment">
          <div className="total_price_payment">
            <p>Total price:</p>
            <p> ${toTalPriceProduct}</p>
          </div>
          {paymentLink != undefined ? (
            <a href={paymentLink}>PayNow</a>
          ) : (
            <a href="">
              <CircleLoader className="pay_loader" color="#EDEDED" size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
