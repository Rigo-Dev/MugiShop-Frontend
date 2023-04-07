import { React } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from '../src/components/Nav'
import "../styleSheets/Register.css"
import { NavDropDown } from '../src/components/NavDropDown'

export  function Register() {  
  return (
    <div className='main_container_register'>
      <Nav/>
      <NavDropDown/>
      <div className='container_register'>
        <div className="register">
            <h1 className="title">Register</h1>
          <div className='container_form'>
            <form action="" className="form">
              <input type="text" placeholder="First Name" className="input_form" required/>
              <input type="text" placeholder="Last Name" className="input_form" required/>
              <input type="email" placeholder="Email" className="input_form" required/>
              <input type="password" placeholder="Password" className="input_form" required/>
                <div className='options_singin'>
                  <button type='submit' className='button_singin'>Sing in</button>
                  <h5>Are you registered?</h5>
                  <NavLink className={"redirect_singup"} to={'/login'}>Login</NavLink>
                </div>
            </form>
          </div>
        </div>  
      </div>  
    </div>
   )
}
