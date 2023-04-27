import { React,useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from "../../public/images/Logo.png"
import "../../styleSheets/Nav.css"
import { AiOutlineSearch, AiFillHome, AiOutlineUserAdd } from "react-icons/ai";
import {FiLogIn} from 'react-icons/fi'
export function Nav() {
  return (
    <div className='main_nav_container'>
      <div className='container_nav'>
        <div className='container_logo'>
          <Link to="/">
            <img className="logo" src={Logo}alt="we can't find logo" />
          </Link>
        </div>

        <div className='search-container'>
          <input type="text" className='search-input'/>

          

          <button type='submit' className='search-btn'>
            <AiOutlineSearch className='search-icon'/>
          </button>
        </div>

        <ul className='container-links'>
          <li>
            <NavLink className={({isActive}) => isActive ? "active" : "" } to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? "active" : ""}  to={"/login"}>Login</NavLink>
          </li>

          <li>
            <NavLink className={({isActive}) => isActive ? "active" : ""}  to={"/singup"}>Register</NavLink>
          </li>
        </ul>

        <ul className='container-links-mobile'>
          
          <li>
            
            <NavLink className={({isActive}) => isActive ? "active" : "" } to={"/"}>
              <AiFillHome />
              Home
            </NavLink>
          </li>
          
          <li>
            
            <NavLink className={({isActive}) => isActive ? "active" : ""}  to={"/login"}>
              <FiLogIn/>
              Login
              </NavLink>
          </li>

          <li>
            
            <NavLink className={({isActive}) => isActive ? "active" : ""}  to={"/singup"}>
              <AiOutlineUserAdd/>
              Register
            </NavLink>
          </li>
        
        </ul>
      </div>
    </div>
    
  ) 
  
}





