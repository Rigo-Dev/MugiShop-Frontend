import { React, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../public/images/Logo.png";
import "../../styleSheets/Nav.css";
import { AiOutlineSearch, AiFillHome, AiOutlineUserAdd, AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import CarritoDeCompras from "./Cart";

export function Nav({ setProducts, isActive }) {
  const [login, setLogin] = useState(true);
  const [cart, setCart] = useState(false);

  const openCart = () => {
    setCart(true);
  };

  //! CONFIRMA SI ESTA LOGEADO Y DEVUELVE 2 NAV DIFERENTES
  const token = sessionStorage.getItem("token");

  function options() {
    if (!token) {
      setLogin(!login);
    }
  }

  useEffect(() => {
    options();
  }, []);
//!------------------------------------------------------

//! PARA FILTRAR LOS PRODUCTOS EN EL BUSCADOR
  const handleChange = async (e) => {
    const url = await fetch(
      `http://localhost:8000/api/products?name=${e.target.value}`
    );
    const data = await url.json();

    setProducts(data);
  };
//!-----------------------------------------

  return (
    <>
      <nav className="main_nav_container">
        <div className="container_nav">
          <div className="container_logo">
            <Link to="/">
              <img className="logo" src={Logo} alt="we can't find logo" />
            </Link>
          </div>

          <div className="search-container">
            <input type="text" id="category" className="search-input" onChange={handleChange} />
            <button type="submit" className="search-btn">
              <AiOutlineSearch className="search-icon" />
            </button>
          </div>

          {/* //! OPCIONES DE MENU EN EL MODO DESKTOP */}
          {login ? (
            <ul className="container-links">
              <li>
                <NavLink className={isActive ? "active" : ""} to={"/"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={isActive ? "active" : ""} to={"/profile"}>
                  Profile
                </NavLink>
              </li>
              <li>
                <AiOutlineShoppingCart className="cart_icon" onClick={() => openCart()} />
              </li>
            </ul>
          ) : (
            <ul className="container-links">
              <li>
                <NavLink className={isActive ? "active" : ""} to={"/"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={isActive ? "active" : ""} to={"/login"}>
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink className={isActive ? "active" : ""} to={"/singup"}>
                  Register
                </NavLink>
              </li>
            </ul>
          )}
          {/* //!---------------------------------------------------------------------- */}


          {/* //! MENU MOBILE */}
          {login ? (
            <ul className="container-links-mobile">
            <li>
              <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={"/"}>
                <AiFillHome />
                Home
              </NavLink>
            </li>

            <li>
              <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={"/profile"}>
                <AiOutlineUser/>
                   Perfil
                </NavLink>
            </li>

            <li className="cart-mobile">
                <AiOutlineShoppingCart className="cart-icon"  onClick={() => openCart()} /><p>shopping</p>
            </li>
          </ul>
          ):(
          <ul className="container-links-mobile">
            <li>
              <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={"/"}>
                <AiFillHome />
                Home
              </NavLink>
            </li>

            <li>
              <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={"/login"}>
                <FiLogIn />
                Login
              </NavLink>
            </li>

            <li>
              <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={"/singup"}>
                <AiOutlineUserAdd />Register
              </NavLink>    
            </li>
          </ul>
          )}
          {/* //! ----------------------------------- */}
        </div>
      </nav>
      {login ? cart ? <CarritoDeCompras state={setCart} /> : null : null}
    </>
  );
}
