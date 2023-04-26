import React from "react"

export function FunctionCart (){
    const info = {
        
    }
    const HandleCart = async () =>{
        const res = await('http://localhost:8000/api/cart', {
            method: "GET",
            headers:{
                "Content-Type": token
            },
            body: JSON.stringify(info)
        })
    } 
}