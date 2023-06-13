import { React, useEffect, useState } from "react";
import "../styleSheets/Nav.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../public/images/Logo.png";
import { AiOutlineSearch, AiFillHome, AiOutlineUserAdd, AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai";
import { BsFillDoorOpenFill } from "react-icons/bs";
import ShoppingCart from "./Cart";
import { GiExitDoor } from "react-icons/gi"
import { getToken } from "../utils/getToken";
import { searchProduct } from "../services/RequestProduct/SearchProduct";

export function Nav({ setProducts, isActive }) {
  const [login, setLogin] = useState(true);
  const [cart, setCart] = useState(false);

  const openCart = () => {
    setCart(true);
  };


  const navOptions = () => {
    if (!getToken()) {
      setLogin(!login);
    }
  }

  const navigate = useNavigate()

  const logout = () => {
    navigate('/login');
    sessionStorage.removeItem("token");
  }

  useEffect(() => {
    navOptions();
  }, []);

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
            <input type="text" id="category" className="search-input" onChange={(e) => searchProduct(e, setProducts)} />
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
              <div className="logout">
                <li onClick={logout}>
                  Logout
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
              <li onClick={logout}>
                <NavLink className={({ isActive }) => (isActive ? "" : "")}>
                  <GiExitDoor/>
                     Logout
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
                <BsFillDoorOpenFill/>
                  Login
              </NavLink>
            </li>

            <li>
              <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={"/singup"}>
                <AiOutlineUserAdd />
                  Register
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
