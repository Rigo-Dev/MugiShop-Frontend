
export async function ViewProductModal(){
    const res = await fetch("http://localhost:8000/api/product")
    const data = res.json()
    console.log(data);
}