import React from 'react'
import {Link} from 'react-router-dom'
import CartWidget from '../Cart/CartWidget'
import Logo from '../../assets/Logo.png'

const NavMenu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">

      <Link to='/'>
        <img src={ Logo } alt='logo' width='50px'/>
      </Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link active" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Category/Toys">TOYS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Category/Funko">FUNKOS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Category/Cards">CARDS</Link>
        </li>
      </ul>
    </div>
  </div>
  <div>
      <Link to='/Cart'> <CartWidget/> </Link>
  </div>
</nav>
    </div>
  )
}

export default NavMenu
