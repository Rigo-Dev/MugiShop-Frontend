import { React,useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../../public/images/Logo.png"
import "../../styleSheets/Nav.css"


export function Nav() {
  const [home, setHome] = useState(false)

  const handleClick = () =>{
    setHome(<NavLink to={"/"}>{!home}</NavLink>)
  }
  return (
    <div className='main_nav_container'>
      <div className='container_nav'>
        <div className='container_logo'>
          <NavLink to={"/"}>
            <img className="logo" src={Logo} onClick={handleClick} alt="we can't find logo" />
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink className={({isActive}) => isActive ? "active" : "inactive" } to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? "active" : "inactive"}  to={"/login"}>login</NavLink>
          </li>
        </ul>
      </div>
    </div>
    
  ) 
  
}