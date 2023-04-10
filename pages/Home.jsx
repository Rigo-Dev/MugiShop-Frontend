import { React, useState, useEffect } from 'react'
import { Products } from '../src/components/Products';
import "../styleSheets/Home.css"
import { NavDropDown } from '../src/components/NavDropDown';
import { Nav } from '../src/components/Nav';


export function Home() { 
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([])
  const [categoriesSelected, setCategoriesSelected] = useState('')

  const fetchCategories = async () => {
    let url = "http://localhost:8000/api/categories"
    const res = await fetch(url)
    const data = await res.json()

    setCategories(data)
  }

  const changeCategories = async (e)=>{  
    setCategoriesSelected(e.target.value)
  }

  const fetchProducts = async (name='', category='')=>{
    let url = "http://localhost:8000/api/products"
    let urlSearch = "http://localhost:8000/api/products?"

    // Validacion para saber si se filtrara el producto por nombre y/o categoria
    if (name.length >= 1 && category.length >= 1 ) {
    
      url = `${urlSearch}=${name}&category=${category}`
    }
    else if(name.length >= 1  && category.length == 0 ){
    
      url = `${urlSearch}name=${name}`
    
    }else if(category.length >= 1  && name.length == 0 ){

      url = `${urlSearch}category=${category}`
    
    }
      else if(name.length == 0 && category.length == 0){
        
        url = `${urlSearch}=${name}&category=${category}`
      }


    
    const res = await fetch(url)
    const data = await res.json()

    if (data.message !== undefined) {

      setProducts([])

      return
    }

    setProducts(data)
  }

  useEffect(() => {
    fetchCategories() 

      fetchProducts('', categoriesSelected)
    
  }, [categoriesSelected])
  

  return (
  <div className='main_product_container'>
    <div className='component_nav'>
      <Nav/>
    </div>
      <div className='nav_container'>
          <div className='home_search'>
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
            </div>
                 <NavDropDown/>
         </div>
         <div className='product_home_container'>
            {products.map((p) => (
              <div className='columns' key={p.id}>
                <Products 
                idProduct={p.name}
                priceProduct={p.price}
                imageProduct={p.image} 
                />
              </div>
            ))}
         </div>
  </div>
  )
}