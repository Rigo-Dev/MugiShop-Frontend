export async function AddProduct(id) {
  const token = sessionStorage.getItem("token");
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
  // console.log("Token" + token);
  console.log(token);
  console.log(PostProductData);
  return PostProductData;
}

export async function ViewProduct() {
  const token = sessionStorage.getItem("token");
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

export async function DeleteProduct(id, setData) {
  const token = sessionStorage.getItem("token");
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
