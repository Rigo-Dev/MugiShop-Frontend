import { React, useState, useEffect } from "react";
import "../styleSheets/Home.css";
import { Products } from "../components/Product";
import { Nav } from "../components/Nav";
import { Modal } from "../components/Modal";
import { CircleLoader } from "react-spinners";

export function Home() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [dataModal, setDataModal] = useState(null);
  const [loader, setLoader] = useState(true);

  const fechtProduct = async () => {
    const url = await fetch(`${import.meta.env.VITE_API_URL}/products`);
    const data = await url.json();
    setProducts(data);
    setLoader(false);
  };

  const openModal = (img, name, price, id) => {
    setOpen(true);

    setDataModal({
      img,
      name,
      price,
      id,
    });
  };
  
  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    fechtProduct();
  }, []);

  return (
    <>
      <div className="main_product_container">
        <Modal
          open={open}
          closeModal={() => closeModal()}
          dataModal={dataModal}
        />

        <Nav setProducts={setProducts} />
        {loader ? (
          <div className="loader_home_container">
            <CircleLoader color="#2c2c2c" size={40} />
          </div>
        ) : (
          <div className="product_home_container">
            {products.map((p) => (
              <div className="columns" key={p.id}>
                <Products
                  nameProduct={p.name}
                  priceProduct={p.price}
                  imageProduct={p.image}
                  idProduct={p.id}
                  openModal={openModal}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
