import { React, useState } from "react";
import "../styleSheets/Login.css"
import { Nav } from "../src/components/Nav";
import { NavLink } from "react-router-dom";
import { NavDropDown } from "../src/components/NavDropDown";

export function Login(){
  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [button, setButton] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: userEmail,
        password: password
      })
    });

    const data = await res.json();

    if (data.access_token) {
      setButton(!button)
      console.log('Inicio de sesión exitoso!', data);
      sessionStorage.setItem("token", data.access_token)
    } else {
      console.error('Error al iniciar sesión');
    }
  }


  return(
    <div className="main_container_login">
      <Nav/>
      <NavDropDown/>
      <div className="container_login">
        <div className="login">          
            <h1 className="title">Login</h1>
           <div className="container_form">
              <form action="" onSubmit={handleSubmit} className="form">
                <input type="Email" value={userEmail} placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="input_form" required/>
                <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="input_form" required/>
                  <div className="options_login"> 
                  {button ? (
                    <NavLink to={'/'}><button type="submit" className="button_login">Log in</button></NavLink>
                  ):(
                    <button type="submit" className="button_login">Log in</button>
                  )
                  }
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
