import { React } from "react";
import "../styleSheets/Login.css"
import { Nav } from "../src/components/Nav";
import { NavLink } from "react-router-dom";
import { NavDropDown } from "../src/components/NavDropDown";

export function Login(){
  return(
    <div className="main_container_login">
      <Nav/>
      <NavDropDown/>
      <div className="container_login">
        <div className="login">          
            <h1 className="title">Login</h1>
           <div className="container_form">
              <form action="" className="form">
                <input type="text" placeholder="Name" className="input_form" required/>
                <input type="password" placeholder="Password" className="input_form" required/>
                  <div className="options_login"> 
                    <button type="submit" className="button_login">Log in</button>
                    <h5>You're not login?</h5>
                    <NavLink className={"redirect_singup"} to={'/singup'}>Sing In</NavLink>
                  </div>  
              </form>
            </div>
        </div>  
      </div>
    </div>
  )
} 
