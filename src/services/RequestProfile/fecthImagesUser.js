import { getToken } from "../../utils/getToken";

export async function fecthImagesUser() {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/my-nfts`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + getToken(),
      "Content-Type": "application/json",
    },
  });
  const img = await res.json();
  return img;
}
