import { React,useState } from "react";
import "../styleSheets/Login.css"

export function Login(){
  const [login, setLogin] = useState(true)

  const handleClick = () =>{
    setLogin(!login)
  }
  return(
    <div className="main_container_login">
      <div className="container_login">
          {login ? (
           <div>
            <h1 className="title">Login</h1>
            <form action="" className="form">
              <input type="text" placeholder="Name" className="input_form"/>
              <input type="password" placeholder="Password" className="input_form"/>
              <h5 onClick={handleClick}>Your no't login? <p>Click Here</p></h5> 
            </form>
           </div>  
          ): (
           <div>
            <h1 className="title">Register</h1>
            <form action="" className="form">
              <input type="text" placeholder="Name" className="input_form"/>
              <input type="email" placeholder="Email" className="input_form"/>
              <input type="password" placeholder="Password" className="input_form" />
            </form>
            <h5 onClick={handleClick}>Your login? <p>Click Here</p></h5>
           </div>
          )

          }
      </div>
    </div>
  )
}