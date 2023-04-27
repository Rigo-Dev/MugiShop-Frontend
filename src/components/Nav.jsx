import { React,useEffect,useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../../public/images/Logo.png"
import "../../styleSheets/Nav.css"
import { Login } from '../../pages/Login'


export function Nav() {
  useEffect(() => {
    if (sessionStorage.getItem('token') === 0) {
      return <Login />
    }
  }, [])
  
  return (
    <div className='main_nav_container'>
      <div className='container_nav'>
        <div className='container_logo'>
          <NavLink to={"/"}>
            <img className="logo" src={Logo} alt="we can't find logo" />
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink className={({isActive}) => isActive ? "active" : "inactive" } to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? "active" : "inactive"}  to={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? "active" : "inactive"}  to={"/singup"}>Register</NavLink>
          </li>
        </ul>
      </div>
    </div>
    
  ) 
  
}