import React from 'react'
import "../styleSheets/Register.css"
import { ZodType, z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Nav } from '../src/components/Nav'
import { NavDropDown } from '../src/components/NavDropDown'
import { NavLink } from 'react-router-dom'

export function Register() {

    type FormData = {
        first_name: string,
        last_name: string,
        email: string,
        password: string,
    }

    const schema: ZodType<FormData> = z.object({
        first_name: z.string(),
        last_name: z.string(),
        email: z.string().email(),
        password: z.string().min(8).max(100)
    })


    const {register, handleSubmit, formState: { errors }} = useForm<FormData>({resolver: zodResolver(schema)})

    async function submitData(data: FormData){
        const res = await fetch("http://localhost:8000/api/register", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        const UserData = await res.json()

        console.log(UserData);

        if (UserData.access_token) {
            console.log("Registrado");
            sessionStorage.setItem("token", UserData.access_token)
        }
      
    } 

  return (
    <div className="main_container_register">
      <Nav />
      {/* <NavDropDown /> */}
      <div className='container_register'>
        <div className="register">        
          <h1 className="title">Register</h1>
          <div className="container_form">
            <form action="" className='form' onSubmit={handleSubmit(submitData)}>
                <input type="text" className='input_form' placeholder='name' {...register("first_name")}/>
                {errors.first_name && <span>{errors.first_name.message}</span>}
                <input type="text" className='input_form' placeholder='last Name' {...register("last_name")}/>
                {errors.last_name && <span>{errors.last_name.message}</span>}
                <input type="text" className='input_form' placeholder='email' {...register("email")}/>
                {errors.email && <span>{errors.email.message}</span>}
                <input type="text"className='input_form' placeholder='password' {...register("password")}/>
                {errors.password && <span>{errors.password.message}</span>}
                  <div className="options_singin"> 
                    <button type="submit" className="button_singin">Sing In</button>
                      <h5>You're not login?</h5>
                      <NavLink className={"redirect_singup"} to={'/login'}>Sing In</NavLink>
                  </div>
            </form>
          </div>
         </div>   
      </div>
    </div>
  )
}


