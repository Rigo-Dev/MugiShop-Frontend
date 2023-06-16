import { React, useState, useEffect } from "react";
import "../../styleSheets/Home.css";
import { Products } from "../components/Product";
import { Nav } from "../components/Nav";
import { Modal } from "../components/Modal";
import { CircleLoader } from "react-spinners";

export function Home() {
  const [products, setProducts] = useState([]);
  const [Open, setOpen] = useState(false);
  const [dataModal, setDataModal] = useState(null);
  const [Loader, setLoader] = useState(true);

  const Fechtproduct = async () => {
    const url = await fetch("http://localhost:8000/api/products");
    const data = await url.json();
    setProducts(data);
    setLoader(false);
  };

  const OpenModal = (img, name, price, id) => {
    setOpen(true);

    setDataModal({
      img,
      name,
      price,
      id,
    });
  };
  const CloseModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    Fechtproduct();
  }, []);

  return (
    <>
      <div className="main_product_container">
        <Modal
          Open={Open}
          CloseModal={() => CloseModal()}
          dataModal={dataModal}
        />

        <Nav setProducts={setProducts} />
        {Loader ? (
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
                  OpenModal={OpenModal}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
