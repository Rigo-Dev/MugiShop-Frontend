import { configAddCart } from "../../utils/ConfigCartRequest";

export async function addCart(id) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/cart`,configAddCart(id))
    const postProductData = await res.json();
    return postProductData
  } catch (error) {
    throw  error
  }
}
