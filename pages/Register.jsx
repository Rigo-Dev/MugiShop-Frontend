import { React, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from '../src/components/Nav'
import "../styleSheets/Register.css"
import { NavDropDown } from '../src/components/NavDropDown'

export  function Register() {  
  const [firstName, setFirstName] = useState([])
  const [lastName, setLastName] = useState([])
  const [userEmail, setUserEmail] = useState([])
  const [password, setPassword] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8000/api/register",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name:firstName,
        last_name: lastName,
        email: userEmail,
        password: password
      })
    })


    console.log(res);
    if(res.ok){
      console.log("inicio exitoso");
    }else{
      console.log(JSON.stringify({firstName,userEmail,lastName,password}));
    }
  }

  return (
    <div className='main_container_register'>
      <Nav/>
      <NavDropDown/>
      <div className='container_register'>
        <div className="register">
            <h1 className="title">Register</h1>
          <div className='container_form'>
            <form action="" onSubmit={handleSubmit} className="form">
              <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} className="input_form" required/>
              <input type="text" placeholder="Second Name" onChange={(e) => setLastName(e.target.value)} className="input_form" required/>
              <input type="email" placeholder="Email" onChange={(e) => setUserEmail(e.target.value)} className="input_form" required/>
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}  className="input_form" required/>
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
