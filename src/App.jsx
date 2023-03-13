import React from "react";
import { Products } from "../components/Products";
import "../src/App.css";

function App() {
  const products = [
    {
      "id": 1,
      "name": "Producto 1",
      "price": 10.99,
      "image": "images/foto0.jpg"
    },
    {
      "id": 2,
      "name": "Producto 2",
      "price": 19.99,
      "image": "images/foto1.jpg"
    },
    {
      "id": 3,
      "name": "Producto 3",
      "price": 5.99,
      "image": "images/foto2.jpg"
    },
    {
      "id": 4,
      "name": "Producto 4",
      "price": 10.99,
      "image": "images/foto3.jpg"
    },
    {
      "id": 5,
      "name": "Producto 5",
      "price": 19.99,
      "image": "images/foto4.jpg"
    },
    {
      "id": 6,
      "name": "Producto 6",
      "price": 2.99,
      "image": "images/foto5.jpg"
    },
    {
      "id": 7,
      "name": "Producto 7",
      "price": 20.99,
      "image": "images/foto6.jpg"
    },
    {
      "id": 8,
      "name": "Producto 8",
      "price": 19.99,
      "image": "images/foto7.jpg"
    },
    {
      "id": 9,
      "name": "Producto 9",
      "price": 20,
      "image": "images/foto8.jpg"
    },
    {
      "id": 10,
      "name": "Producto 10",
      "price": 7.99,
      "image": "images/foto9.jpg"
    },
    {
      "id": 11,
      "name": "Producto 1",
      "price": 10.99,
      "image": "images/foto0.jpg"
    },
    {
      "id": 12,
      "name": "Producto 2",
      "price": 19.99,
      "image": "images/foto1.jpg"
    },
    {
      "id": 13,
      "name": "Producto 3",
      "price": 5.99,
      "image": "images/foto2.jpg"
    },
    {
      "id": 14,
      "name": "Producto 4",
      "price": 10.99,
      "image": "images/foto3.jpg"
    },
    {
      "id": 15,
      "name": "Producto 5",
      "price": 19.99,
      "image": "images/foto4.jpg"
    },
    {
      "id": 16,
      "name": "Producto 6",
      "price": 2.99,
      "image": "images/foto5.jpg"
    },
    {
      "id": 17,
      "name": "Producto 7",
      "price": 20.99,
      "image": "images/foto6.jpg"
    },
    {
      "id": 18,
      "name": "Producto 8",
      "price": 19.99,
      "image": "images/foto7.jpg"
    },
    {
      "id": 19,
      "name": "Producto 9",
      "price": 20,
      "image": "images/foto8.jpg"
    },
    {
      "id": 20,
      "name": "Producto 10",
      "price": 7.99,
      "image": "images/foto9.jpg"
    },
    {
      "id": 21,
      "name": "Producto 8",
      "price": 19.99,
      "image": "images/foto7.jpg"
    },
    {
      "id": 22,
      "name": "Producto 9",
      "price": 20,
      "image": "images/foto8.jpg"
    },
    {
      "id": 23,
      "name": "Producto 6",
      "price": 2.99,
      "image": "images/foto5.jpg"
    },
    {
      "id": 24,
      "name": "Producto 7",
      "price": 20.99,
      "image": "images/foto6.jpg"
    },
    {
      "id": 25,
      "name": "Producto 10",
      "price": 7.99,
      "image": "images/foto9.jpg"
    },
    {
      "id": 26,
      "name": "Producto 8",
      "price": 19.99,
      "image": "images/foto7.jpg"
    },
    {
      "id": 27,
      "name": "Producto 9",
      "price": 20,
      "image": "images/foto8.jpg"
    },
    {
      "id": 28,
      "name": "Producto 6",
      "price": 2.99,
      "image": "images/foto5.jpg"
    },
    {
      "id": 29,
      "name": "Producto 7",
      "price": 20.99,
      "image": "images/foto6.jpg"
    },
    {
      "id": 30,
      "name": "Producto 1",
      "price": 10.99,
      "image": "images/foto0.jpg"
    },
    {
      "id": 31,
      "name": "Producto 2",
      "price": 19.99,
      "image": "images/foto1.jpg"
    },
    {
      "id": 32,
      "name": "Producto 3",
      "price": 5.99,
      "image": "images/foto2.jpg"
    },
    {
      "id": 33,
      "name": "Producto 4",
      "price": 10.99,
      "image": "images/foto3.jpg"
    },
    {
      "id": 34,
      "name": "Producto 5",
      "price": 19.99,
      "image": "images/foto4.jpg"
    },
  ];

  return (
    <div className="App"> 
      <picture className="main_container">
        {products.map((p) => (
          <div className="product" key={p.id}>
            <Products 
            imageProduct={p.image}
            />
          </div>
        ))}
      </picture>
    </div>
  );
}

export default App;
