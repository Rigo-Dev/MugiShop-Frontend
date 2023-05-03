import React, { useState, useEffect } from 'react'
import "../styleSheets/Perfil.css"
import { Nav } from '../src/components/Nav'


export function Perfil() {
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
