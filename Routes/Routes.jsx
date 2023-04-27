import React from 'react'
import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom'
import { Home } from '../pages/Home';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import { NotFound } from '../pages/NotFound';
import { Perfil } from '../pages/Perfil';
import { ConfirmToken } from '../utils/ConfirmToken';

export function Rout() {
return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Home}></Route>
                <Route path='/singup' Component={Register}></Route>
                <Route path='/login' Component={Login}></Route> 
                <Route element={<ConfirmToken />}>
                    <Route path='/perfil' Component={Perfil} ></Route>
                </Route>
                <Route path='*' Component={NotFound}></Route>
            </Routes>
        </BrowserRouter>    
    </div>
    )
}
