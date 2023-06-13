import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { Profile } from "../pages/Profile";
import { EditProfile } from "../pages/EditProfile";
import { ProtectedRoutes } from "./ProtectedRoutes";
import Payment from "../pages/Payment";

export function Rout() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>

          <Route path="/singup" Component={Register}></Route>
          <Route path="/login" Component={Login}></Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/profile" Component={Profile}></Route>
            <Route path="/editprofile" Component={EditProfile}></Route>
            <Route path="/payment" Component={Payment}></Route>
          </Route>
          <Route path="*" Component={NotFound}></Route>
        </Routes>
      </BrowserRouter>
  );
}
