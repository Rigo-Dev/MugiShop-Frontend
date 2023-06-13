import React from "react";
import "../styleSheets/Register.css";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Nav } from "../components/Nav";
import { NavLink, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

export function Register() {
  const navigate = useNavigate();
  type FormData = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
  };

  const schema: ZodType<FormData> = z.object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    password: z.string().min(8).max(100),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function submitData(data: FormData) {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const userDataRegister = await res.json();

    console.log(userDataRegister);

    if (userDataRegister.access_token) {
      console.log("Registrado");
      navigate("/");
      sessionStorage.setItem("token", userDataRegister.access_token);
    } else {
      Object.keys(userDataRegister.errors).forEach((e) => {
        console.log(e, userDataRegister.errors[e]);

        userDataRegister.errors[e].forEach((error) => {
          toast.error(error);
        });
      });
    }
  }

  return (
    <div className="main_container_register">
      <Nav />
      <div className="container_register">
        <div className="register">
          <h1 className="title">Register</h1>
          <div className="container_form">
            <form
              action=""
              className="form"
              onSubmit={handleSubmit(submitData)}
            >
              <input
                type="text"
                className="input_form"
                placeholder="name"
                {...register("first_name")}
              />
              {errors.first_name && <span>{errors.first_name.message}</span>}
              <input
                type="text"
                className="input_form"
                placeholder="last Name"
                {...register("last_name")}
              />
              {errors.last_name && <span>{errors.last_name.message}</span>}
              <input
                type="text"
                className="input_form"
                placeholder="email"
                {...register("email")}
              />
              {errors.email && <span>{errors.email.message}</span>}
              <input
                type="password"
                className="input_form"
                placeholder="password"
                {...register("password")}
              />
              {errors.password && <span>{errors.password.message}</span>}
              <div className="options_singin">
                <button type="submit" className="button_singin">
                  Sing In
                </button>
                <h5>You're not login?</h5>
                <NavLink className={"redirect_singup"} to={"/login"}>
                  Sing In
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
