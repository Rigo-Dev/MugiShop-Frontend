import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoutes() {
  {
    /*//!ESTO GUARDA EL TOKEN Y DEBAJO VERIFICA SI ES VALIDO SI NO ES VALIDO LO MANDA AL LOGIN*/
  }
  const token = sessionStorage.getItem("token");

  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
  {
    /*//!------------------------------------------------------------------------------------ */
  }
}

