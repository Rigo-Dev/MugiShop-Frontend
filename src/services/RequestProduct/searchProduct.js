export async function searchProduct(e, setProducts) {
    const url = await fetch(`${import.meta.env.VITE_API_URL}/products?name=${e.target.value}`);
    const data = await url.json();

    setProducts(data);
}
