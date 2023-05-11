import React from 'react'
import "../styleSheets/Register.css"
import { ZodType, z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Nav } from '../src/components/Nav'
import { NavLink, useNavigate } from 'react-router-dom'

export function Register() {
  const navigate = useNavigate()
  {/* //!ESTO DEFINE LOS TIPOS DE DATOS QUE SE PUEDEN INGRESAR  */}
    type FormData = {
        first_name: string,
        last_name: string,
        email: string,
        password: string,
    }
  {/* //!-------------------------------------------------------*/}
  

  {/* //!ESTA PARTE LO QUE HACE ES PONER LAS CONDICIONES QUE DEBE CUMPLIR CADA INPUT*/}

    const schema: ZodType<FormData> = z.object({
        first_name: z.string(),
        last_name: z.string(),
        email: z.string().email(),
        password: z.string().min(8).max(100)
    })
  {/* //!------------------------------------------------------------------------------*/}


  {/*//!ESTA PARTE ES LA QUE CONTROLA LOS ERRORES DE CADA INPUT (MIRA DEBAJO DE LOS INPUTS ESTOS DICEN QUE TIPO DE ERROR SE DEBE MOSTRAR EN CADA CASO)*/}
    const {register, handleSubmit, formState: { errors }} = useForm<FormData>({resolver: zodResolver(schema)})
  {/*//!---------------------------------------------------------------------------------------------------------------------------------*/}


  {/*//!ESTA PARTE SE ENCARGA DE MANDAR LA DATA A LA BASE DE DATOS LUEGO DE CONFIRMAR QUE SEAN VALIDOS*/}
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
            navigate('/')
            sessionStorage.setItem("token", UserData.access_token)
        }
      
    } 
  {/*//!--------------------------------------------------------------------------------------------- */}

  return (
    <div className="main_container_register">
      <Nav />
      <div className='container_register'>
        <div className="register">        
          <h1 className="title">Register</h1>
          <div className="container_form">
            <form action="" className='form' onSubmit={handleSubmit(submitData)}>
                {/*//!LO QUE DICE HACE ....register ES MONITOREAR LOS CAMBIOS EN CADA INPUT (MIRA EL SCHEMA)*/}
                <input type="text" className='input_form'  placeholder='name' {...register("first_name")}/>
                {/*//!------------------------------------------------------------------------------------*/}

                {/*//!ESTA ES LA QUE MUESTRA EL ERROR*/}
                {errors.first_name && <span>{errors.first_name.message}</span>}
                {/*//!------------------------------------------------------------------------------------*/}
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


