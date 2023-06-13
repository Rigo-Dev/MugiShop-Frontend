import { configViewCart } from "../../utils/ConfigCartRequest";

export async function viewCart() {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/cart`, configViewCart())
    const data = await res.json();
    return data;
  } catch (error) {
    throw error
  }
}
