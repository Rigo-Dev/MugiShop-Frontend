const token = sessionStorage.getItem("token");

//! FUNCION PARA AGREGAR PRODUCTOS AL CARRITO
export async function AddProduct(id) {
  const res = await fetch("http://localhost:8000/api/cart", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product: id,
    }),
  });

  const PostProductData = await res.json();
  console.log(PostProductData);
}
//!--------------------------------------------

//! FUNCION PARA VER LOS PRODUCTOS EN EL CARRITO
export async function ViewProduct() {
  const res = await fetch("http://localhost:8000/api/cart", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}
//!----------------------------------------------

//! FUNCION PARA ELIMINAR LOS PRODUCTOS DEL CARRITO
export async function DeleteProduct(id, setData) {
  const res = await fetch("http://localhost:8000/api/cart", {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  });
  const data = await res.json();

  const dataProduct = await ViewProduct();
  setData(dataProduct);

  console.log(data);
}
//!-----------------------------------------------
