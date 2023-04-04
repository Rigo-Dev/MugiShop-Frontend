import { React,useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../../styleSheets/NavDropDown.css"
import Logo from "../../public/images/Logo.png"

export function NavDropDown() {
  const [menu, setMenu] = useState(true)

  const handleClick = () => {
    setMenu(!menu)
  }

  return (
    <div className='container_dropdown_menu'>
      {menu ? (
        <div className='container_open_menu'>
          <AiOutlineMenu onClick={handleClick} className='open_menu'/>
        </div>
        ): (
        <div className='container_close_menu'>
          <AiOutlineClose onClick={handleClick} className='close_menu'/>  
          <div className='logo'>
            <img className='logo_dropdown' src={Logo} alt="we can't find logo" />
          </div> 
        </div>
        )
       }
    </div>
  )
}   
