import { configDeleteCart } from "../../utils/ConfigCartRequest";
import { viewCart } from "./viewCart";

export async function deleteCart(id, setData) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/cart`, configDeleteCart(id))
    const data = await res.json();
    const dataProductCart = await viewCart();
    setData(dataProductCart);
    console.log(data); 
  } catch (error) {
    throw error
  }
}
