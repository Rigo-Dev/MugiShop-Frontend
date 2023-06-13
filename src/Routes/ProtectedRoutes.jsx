import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../utils/getToken";

export function ProtectedRoutes() {

  if (!getToken()) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
}
