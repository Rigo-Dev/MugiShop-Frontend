  export async function AddProduct (id){
    const token = sessionStorage.getItem("token")


    const res = await fetch("http://localhost:8000/api/cart", {
        method: "POST",
        headers:{
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        },
        body:JSON.stringify(
            {
                "product": id
            }
        )
    })

    const ProductData = await res.json()
    console.log(ProductData);
   } 

