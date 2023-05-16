import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from '../pages/Home';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import { NotFound } from '../pages/NotFound';
import { Perfil } from '../pages/Perfil';
import { ConfirmTokenPerfil } from '../utils/ConfirmToken';

export function Rout() {
return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Home}></Route>
                <Route path='/singup' Component={Register}></Route>
                <Route path='/login' Component={Login}></Route> 

                //! ESTA PARTE ES LA QUE PROTEGE LA RUTAL DEL PERFIL SI NO ESTA LOGUEADO NO LO DEJA ENTRAR
                <Route element={<ConfirmTokenPerfil />}>
                    <Route path='/profile' Component={Perfil} ></Route>
                </Route>
                //! --------------------------------------------------------------------------------------

                <Route path='*' Component={NotFound}></Route>
            </Routes>
        </BrowserRouter>    
    </div>
    )
}
