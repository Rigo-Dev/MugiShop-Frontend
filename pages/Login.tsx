import React from 'react'
import "../styleSheets/Login.css"
import { useForm } from 'react-hook-form'
import { ZodType, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Nav } from '../src/components/Nav'
import { NavDropDown } from '../src/components/NavDropDown'
import { NavLink, useNavigate } from 'react-router-dom'

export function Login() {
    const navigate = useNavigate()

    type FormData = {
        email: string,
        password: string,
    }

    const schema: ZodType<FormData> = z.object({
        email: z.string(),
        password: z.string().min(8).max(100),
    })

    const { register, handleSubmit, formState: {errors} } = useForm<FormData>({resolver: zodResolver(schema)})

    async function submitData(data: FormData) {
        const res = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const userData = await res.json()

        console.log(userData);
        

        if(userData.access_token){
            navigate(`/`)
            console.log("Logeado");
            sessionStorage.setItem("token", userData.access_token)
        }
    }


  return (
    <div className="main_container_login">
        <Nav/>
        <NavDropDown/>
        <div className="container_login">
        <div className="login">  
            <h1 className="title">Login</h1>
         <div className="container_form">
            <form action="" className="form" onSubmit={handleSubmit(submitData)}>
                <input type="text" className='input_form' placeholder='email' {...register("email")}/>
                {errors.email && <span>{errors.email.message}</span>}
                <input type="text" className='input_form' placeholder='password' {...register("password")}/>
                {errors.password && <span>{errors.password.message}</span>}
                <div className="options_login">                   
                    <button type="submit" onClick={(e) =>{e.preventDefault(); handleSubmit(submitData)()}} className="button_login">Log in</button>
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
