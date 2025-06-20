import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="#" >ServiHogar</Link>
      </div>
      <input type="checkbox" id="menu-toggle" className="menu-toggle-checkbox" />
      <label htmlFor="menu-toggle" className="menu-toggle">☰</label>
      <div className="navbar-menu">
        <div className="navbar-links">
          <ul>
            <li><Link to="#">Inicio</Link></li>
            <li><Link to="#">Servicios</Link></li>
          </ul>
        </div>
        <div className="navbar-buttons">
          <Link to="/login" className="btn">Iniciar Sesión</Link>
          <Link to="/register" className="btn-register">Registrarse</Link>
        </div>
</div>

    </nav>
  );
}

export default Navbar;