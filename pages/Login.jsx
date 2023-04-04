import { React,useState } from "react";
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
                <input type="text" placeholder="Name" className="input_form"/>
                <input type="password" placeholder="Password" className="input_form"/>
                <div className="options_login">
                  <button type="submit" className="Button_login">Log in</button>
                  <div className="text"> 
                    <h5>Your no't login?</h5>
                    <NavLink className={"redirect_singup"} to={'/singup'}>Sing In</NavLink>
                  </div>  
                </div>
              </form>
            </div>
        </div>  
      </div>
    </div>
  )
} 
