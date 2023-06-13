import React from 'react'
import "../styleSheets/login.css"
import { useForm } from 'react-hook-form'
import { ZodType, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'react-hot-toast'
import { getToken } from '../utils/getToken'

export function EditProfile() {
    const navigate = useNavigate()

    type FormData = {
        first_name: string,
        last_name: string,
    }

    const schema: ZodType<FormData> = z.object({
        first_name: z.string().min(3).max(15),
        last_name: z.string().min(4).max(15),
    })

    const { register, handleSubmit, formState: {errors} } = useForm<FormData>({resolver: zodResolver(schema)})

    async function editDataProfile(data: FormData) {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/profile`, {
            method: "PUT",
            headers: {
            "Authorization": "Bearer " + getToken(),
            "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const NewData = await res.json()

        console.log(NewData);
        

        if(NewData.message){
            toast.success(NewData.message)
            function NavigateLater() {
                return new Promise(resolve => {
                  setTimeout(() => {
                    resolve(navigate(`/profile`));
                  }, 1500);
                });
            }
            NavigateLater()
        }else{
            toast.error(NewData.msg)
        }
    }


  return (
    <div className="main_container_login">
        {/* <Nav/> */}
        <div className="container_login">
        <div className="login">  
            <h1 className="title">Change Data</h1>
         <div className="container_form">
            <form action="" className="form" onSubmit={handleSubmit(editDataProfile)}>
                <input type="text" className='input_form' placeholder='name' {...register("first_name")}/>
                {errors.first_name && <span>{errors.first_name.message}</span>}
                <input type="text" className='input_form' placeholder='lastname' {...register("last_name")}/>
                {errors.last_name && <span>{errors.last_name.message}</span>}
                <div className="options_login">                   
                    <button type="submit" onClick={(e) =>{e.preventDefault(); handleSubmit(editDataProfile)()}} className="button_login">
                        Edit Profile
                    </button>
                  </div>  
            </form>
         </div>
        </div>
        </div>
        <Toaster/>
    </div>
)
}
