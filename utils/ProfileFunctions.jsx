export async function FechtProfile(){
    const token = sessionStorage.getItem("token")
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