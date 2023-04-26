import React, { useState, useEffect } from 'react'
import "../styleSheets/Perfil.css"
import { Nav } from '../src/components/Nav'


export function Perfil() {
  // const token = sessionStorage.getItem("token")
  // const info = {
  //   id: 19,
  //   product: "Diaz",
  //   product_id: 1,
  //   product_img: "asdk"
  // }

  // const handleSelected = async (e) =>{
  //   const res = await fetch("http://localhost:8000/api/cart", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": info
  //     },
  //     body: JSON.stringify(token)
  //   })
  //   const data = await res.json()
  //   console.log(data, info, token);
  // }

  // useEffect(() => {
  //   handleSelected()
  // }, [])
  

  return (
    <div className="main_container_perfil">
    <>
    <Nav/>
    </>
        <div className='container_perfil'>
            <div className='container_info_perfil'>
              <div className='info_perfil'>
                  <img src="public/images/foto1.jpg" alt="" className='image_user'/>
                  <p>Name</p>
                  <p>Email</p>
                  <div className='button_profile'>
                    <button className="button">Compartir</button>
                    <button className="button">Editar Perfil</button>
                  </div>
              </div>
              <div className='image_profile'>
              <p>images</p>
            </div>
            </div>
        </div>
    </div>
  )
}
