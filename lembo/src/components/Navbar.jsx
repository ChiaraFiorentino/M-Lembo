import React from "react"; 
import { Link } from "react-router-dom"; 
import logo from "../assets/Lembo-img.png"; 

const Navbar = () => ( 
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
    <div className="container"> 
      <Link className="navbar-brand d-flex align-items-center" to="/"> 
        <img src={logo} alt="Logo Lembo" style={{ width: "30px", marginRight: "8px" }} /> 
        Matafuegos Lembo 
      </Link> 
      <div className="collapse navbar-collapse"> 
        <ul className="navbar-nav ml-auto"> 
          <li className="nav-item"> 
            <Link className="nav-link" to="/products">Productos</Link> 
          </li> 
          <li className="nav-item"> 
            <Link className="nav-link" to="/contact">Contacto</Link> 
          </li> 
          <li className="nav-item"> 
            <Link className="nav-link" to="/services">Servicios</Link> 
          </li> 
          <li className="nav-item"> 
            <Link className="nav-link" to="/about-us">Nuestra Empresa</Link> 
          </li> 
        </ul> 
      </div> 
    </div> 
  </nav> 
); 

export default Navbar;

