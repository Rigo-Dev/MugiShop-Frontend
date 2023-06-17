import { getToken } from "./getToken";

export function configAddCart(id) {
  return {
    method: "POST",
    headers: {
      Authorization: "Bearer " + getToken(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product: id,
    }),
  };
}

export function configDeleteCart(id) {
  return {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + getToken(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  };
}


export function configViewCart(){
  return{
    method: "GET",
    headers: {
      Authorization: "Bearer " + getToken(),
      "Content-Type": "application/json",
    },
  }
}