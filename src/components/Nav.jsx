import { React, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../public/images/Logo.png";
import "../../styleSheets/Nav.css";
import { AiOutlineSearch, AiFillHome, AiOutlineUserAdd, AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import ShoppingCart from "./Cart";

export function Nav({ setProducts, isActive }) {
  const [login, setLogin] = useState(true);
  const [cart, setCart] = useState(false);

  const openCart = () => {
    setCart(true);
  };

  const token = sessionStorage.getItem("token");

  function options() {
    if (!token) {
      setLogin(!login);
    }
  }

  useEffect(() => {
    options();
  }, []);

  const handleChange = async (e) => {
    const url = await fetch(
      `http://localhost:8000/api/products?name=${e.target.value}`
    );
    const data = await url.json();

    setProducts(data);
  };

  const navigate = useNavigate()

  const Logout = () => {
    navigate('/login');
    sessionStorage.removeItem("token");
  }

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
              <div className="xd">
                <li onClick={Logout}>
                  asdsad
                </li>
              </div>
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

          {login ? (
            <ul className="container-links-mobile">
            <li>
              <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={"/"}>
                <AiFillHome />
                Home
              </NavLink>
            </li>

            <li className="cart-mobile">
                <AiOutlineShoppingCart className="cart-icon"  onClick={() => openCart()} /><p>shopping</p>
            </li>

            <li>
              <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={"/profile"}>
                <AiOutlineUser/>
                   Perfil
                </NavLink>
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
        </div>
      </nav>
      {login ? cart ? <ShoppingCart state={setCart} /> : null : null}
    </>
  );
}
