import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

export function Rout() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/Home' Component={Home}></Route>
                <Route path='/login' Component={Login}></Route>
            </Routes>
        </BrowserRouter>    
    </div>
    )
}
