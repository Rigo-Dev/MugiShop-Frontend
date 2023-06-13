import React from 'react'
import '../styleSheets/NotFound.css'
import { Link } from 'react-router-dom'


export function NotFound() {
  return (
    <div className='container'> 
      <h1 className='nf-404'>404</h1>
      <h2 className='Title'>Page Not Found</h2>
      <p className='mesasge-notfound'>
        <i>this page not found</i>
        <Link to="/" className='btn-go_home_page'>Go to home page</Link>
      </p>
    </div>
  )
}
