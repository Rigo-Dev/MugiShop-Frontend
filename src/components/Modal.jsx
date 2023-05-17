import React, { useEffect, useState } from 'react'
import "../../styleSheets/Modal.css"

export function Modal() {
  const [ProductModal, setProductModal] = useState([])

  // const FechtProductModal = async () =>{
  //   const url = await fetch("http://localhost:8000/api/products")
  //   const data =  url.json()
  //   setProductModal(data)
  // }


  // const Fechtproduct = async () =>{
  //   const res = await fetch('http://localhost:8000/api/products')
  //   const data = await res.json()
  //   setProductModal(data)
  //   console.log(data);
  // }


  useEffect(() => {
    // Fechtproduct()
  }, [])
  
const url = "https://mugishop-miniproyecto.s3.amazonaws.com"


  return (
    <div className='main_container_modal'>
       {ProductModal.map((p) =>(
        <div key={p.id}>
          <img src={url + p.image} alt="" />
        </div>
       ))}
    </div>
  )
}
