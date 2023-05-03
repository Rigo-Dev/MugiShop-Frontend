import { React } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from "../../public/images/Logo.png"
import "../../styleSheets/Nav.css"
import { AiOutlineSearch, AiFillHome, AiOutlineUserAdd } from "react-icons/ai";
import {FiLogIn} from 'react-icons/fi'


export function Nav({ setProducts }) {

  const handleChange = async (e) =>{
    const url = await fetch(`http://localhost:8000/api/products?name=${e.target.value}`)
    const data  = await url.json()
  
    setProducts(data)
    }

  return (
    <div className='main_nav_container'>
      <div className='container_nav'>
        <div className='container_logo'>

        { /*//! ESTE ES LOGO EL CUAL NAVEGA HACIA EL HOME */}
          <Link to="/">
            <img className="logo" src={Logo}alt="we can't find logo" />
          </Link>
        </div>
        { /* //! ESTE ES LOGO EL CUAL NAVEGA HACIA EL HOME */}

        <div className='search-container'>
          <input type="text" id='category' className='search-input' onChange={handleChange}/>
          <button type='submit' className='search-btn'>
            <AiOutlineSearch className='search-icon'/>
          </button>
        </div>

        {/* //! ESTAS SON LOS LINKS PARA NAVEGAR EN EL MODO DESKTOP */}
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
          <li>
            <NavLink className={({isActive}) => isActive ? "active" : ""}  to={"/perfil"}>Profile</NavLink>
          </li>
        </ul>
        {/* //! ESTAS SON LOS LINKS PARA NAVEGAR EN EL MODO DESKTOP */}
        


        {/* //! ESTAS SON LOS LINKS PARA NAVEGAR EN EL MODO MOBILE */}
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
        {/* //! ESTAS SON LOS LINKS PARA NAVEGAR EN EL MODO MOBILE */}
      </div>
    </div>
    
  ) 
  
}

