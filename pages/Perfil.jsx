import React, { useState, useEffect } from 'react'
import "../styleSheets/Perfil.css"
import { Nav } from '../src/components/Nav'
import { ViewProduct } from '../utils/CartFunctions'


export function Perfil() {
const [DataProfile, setDataProfile] = useState([])
const [images, setImages] = useState([])

  const FechtProfile = async () =>{
  const token = sessionStorage.getItem("token")
  const res = await fetch("http://localhost:8000/api/profile",{
    method: "GET",
    headers: {
      "Authorization": "Bearer " + token,
      "Content-Type": "application/json"  
    },
    body: JSON.stringify()
  })
  const info =  await res.json()

  setDataProfile(info)
  console.log(info);
}


useEffect(() => {
FechtProfile() 
const getData = async () =>{
  const data = await ViewProduct()
  setImages(data)
  console.log(data);
}
getData()

}, [])

const url = "https://mugishop-miniproyecto.s3.amazonaws.com"

  return (
    <div className="main_container_perfil">
    <>
    <Nav/>
    </>
        <div className='container_perfil'>
            <div className='container_info_perfil'>
                <div className='info_perfil'>
                  <img src="public/images/foto1.jpg" alt="" className='image_user'/>
                    <p>{DataProfile.first_name} {DataProfile.last_name}</p>
                    <p>{DataProfile.email}</p>
                    <div className='button_profile'>
                      <button className="button">Compartir</button>
                      <button className="button">Editar Perfil</button>
                    </div>
              </div>   
              <div className='image_profile'>
              {images.map((p) =>(
                <div className='columns_profile' key={p.id}>
                  <img className='image' src={url + p.product_img} alt="" />
                </div>
              ))}
            </div>
            </div>
        </div>
    </div>
  )
}
