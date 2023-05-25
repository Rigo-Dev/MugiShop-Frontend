import React, { useState, useEffect } from 'react'
import "../styleSheets/Perfil.css"
import { Nav } from '../src/components/Nav'
import { FechtProfile } from '../utils/ProfileFunctions'
import { ViewProduct } from '../utils/CartFunctions'
import { NavLink } from 'react-router-dom'


export function Profile() {
const [DataProfile, setDataProfile] = useState([])
const [images, setImages] = useState([])

const getData = async () =>{
  const data = await FechtProfile()
  console.log(data);
  setDataProfile(data)
}

const token = sessionStorage.getItem("token")

const getImages = async () =>{
  const url = "http://localhost:8000/api/my-nfts"
  const data = await fetch(url,{ 
    method: "GET",
    headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
    }
  },)
  const img = await data.json()
  setImages(img)
  console.log(images)
}

useEffect(() => {
getData()
getImages()
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
                      <NavLink to={'/editprofile'}>
                        <button className="button">Editar Perfil</button>
                      </NavLink>
                    </div>
              </div>   
              <div className='image_profile'>
              {
                images.length >= 1?
                  images.map((p) =>
                    <>
                      <div className='columns_profile' key={p.id}>
                        <img className='image' src={url + p.product_img} alt="" />
                      </div>
                    </>
                  )
                  :null
              }
            </div>
            </div>
        </div>
    </div>
  )
}
