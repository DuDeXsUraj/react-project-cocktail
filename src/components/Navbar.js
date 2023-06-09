import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom font-weight-bold border-success border-4 ">
    <div className="container-fluid">
       <Link to='/' className="navbar-brand" href="#"><h1 className='text-success'>TheCocktailDB</h1></Link>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end h4" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item mx-4">
            <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/about' className="nav-link" href="#">About</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
  )

}
