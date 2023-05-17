const token = sessionStorage.getItem("token")

export async function FechtProfile(){
    const res = await fetch("http://localhost:8000/api/profile",{
        method: "GET",
        headers:{
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json",
        }
    })
    const data = await res.json()
    return data
}