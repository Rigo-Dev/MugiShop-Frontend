import { React, useState, useEffect } from "react";
import '../../styleSheets/Payment.css'
import { ViewProduct } from "../../utils/CartFunctions";
import { CircleLoader } from "react-spinners";

export default function Payment() {
  const [PaymentProduct, setPaymentProduct] = useState([]);
  const [Loader, setLoader] = useState(true)
  const [PaymentLink, setPaymentLink] = useState([])

  const getData = async (e) =>{
    let data = await ViewProduct()
    if (data.length >= 1) {
        data = data.reverse()
    }
    setPaymentProduct(data)
    console.log(data);
  }

  ViewProduct() 

  const token = sessionStorage.getItem('token')

  const getLink = async () =>{
    const url = "http://localhost:8000/api/create-order"
    const PayLink = await fetch(url,{
      method: 'POST',
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
        }
    },)
    const data = await PayLink.json()
    setPaymentLink(data.link_pay)
    setLoader(false)
  }

  useEffect(() => {
    getData()
    getLink()
  }, [])
  
  const url = "https://mugishop-miniproyecto.s3.amazonaws.com"

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


      <div className="price_payment_container">
          <div className="price_payment">
              <h3>Total price:</h3>
              <a href={PaymentLink}>{ Loader ? <CircleLoader className="pay_loader" color="#EDEDED" size={20}/> :"Paynow" }</a>
          </div>
      </div>
    </div>
  );
}
