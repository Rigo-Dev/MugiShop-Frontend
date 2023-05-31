import { React, useState, useEffect } from "react";
import { ViewProduct } from "../utils/CartFunctions";
import '../styleSheets/Payment.css'
import { CircleLoader } from "react-spinners";

export default function Payment() {
  const [PaymentProduct, setPaymentProduct] = useState([]);
  const [Loader, setLoader] = useState(true)

  const getData = async (e) =>{
    let data = await ViewProduct()
    if (data.length >= 1) {
        data = data.reverse()
    }
    setPaymentProduct(data)
    console.log(data);
  }

  useEffect(() => {
    getData()
  }, [])
  
  const url = "https://mugishop-miniproyecto.s3.amazonaws.com"

  return (
    <div className="main_container_payment">
      <div className="container_payment">
         <h1>Cart</h1>
            <div className="header_product_payment">
              <p>Product</p>
              <p>Price</p>
            </div>
          {PaymentProduct.map((p) =>(
            <div className="body_payment_product" key={p.id}>  
                <div className="payment_product">
                      <img src={url + p.product_img} alt="" />
                    <div className="info_pay_product">
                      <p>{p.product}</p>
                      <p>$11</p>            
                    </div>
                </div>    
                <hr />
            </div>
            ))
          }
      </div>


      <div className="hola">
          <div className="total_payment">
              <h2>askdalkdsm</h2>
              <button>{ Loader ? <CircleLoader color="#EDEDED" size={30}/> :"Paynow" }</button>
          </div>
      </div>
    </div>
  );
}
