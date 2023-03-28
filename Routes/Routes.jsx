import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from '../pages/Home';

export function Rout() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/Home' Component={Home}></Route>
            </Routes>
        </BrowserRouter>    
    </div>
    )
}
