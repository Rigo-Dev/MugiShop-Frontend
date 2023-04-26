import { React, useState, useEffect } from 'react'
import { Products } from '../src/components/Product';
import "../styleSheets/Home.css"
import { NavDropDown } from '../src/components/NavDropDown';
import { Nav } from '../src/components/Nav';


export function Home() { 
const [products, setProducts] = useState([]);

const Fechtproduct = async () =>{
  const url = await fetch('http://localhost:8000/api/products')
  const data  = await url.json()

  setProducts(data)
}

useEffect(() => {
Fechtproduct()

}, [])


  return (
  <div className='main_product_container'>
    <>
      <Nav/>
    </>
      <div className='nav_container'>
          {/* <div className='home_search'>
            <nav>
                <label htmlFor="categorias" className='word_category'>categoría:</label>
                <select id="categorias" className='category' onChange={e => changeCategories(e)}>
                  <option value="">Seleccionar productos</option>
                  {
                    categories.map(c=>(
                      <option value={c.id} key={c.id}>{c.name}</option>
                    ))
                  }
                </select>
              </nav>
            </div> */}
                 <NavDropDown/>
         </div>
         <div className='product_home_container'>
            {products.map((p) => (
              <div className='columns' key={p.id}>
                <Products 
                priceProduct={p.price}
                imageProduct={p.image} 
                idProduct={p.id}
                />
              </div>
            ))}
         </div>
  </div>
  )
}