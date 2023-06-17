import { getToken } from "../../utils/getToken";

export async function fetchUserData() {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/profile`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + getToken(),
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}
