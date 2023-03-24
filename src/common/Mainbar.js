import React from 'react';
import { Link } from 'react-router-dom';
import './Mainbar.css';
import logo from '../assets/logo.png';

function Mainbar(props) {
    return (
        <header className="header-transparente sticky-top">
            <nav className="navbar navbar-expand-lg  container sticky-top ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img className='tamaño' src={logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item menuItem">
                                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item menuItem">
                                <a className="nav-link active" href="#proveedores">Proveedores</a>
                            </li>

                            <li className="nav-item menuItem">
                                <Link className="nav-link active"  to="/producto">Productos</Link>
                            </li>
                            <li className="nav-item menuItem">
                                <Link className="nav-link active" to="/carrito">Ver Carrito  <i class="bi bi-basket-fill"></i></Link>
                            </li>
                        </ul>
                        <form className="d-flex ">

                            <button type="button" className="btn bigButton btn-lg">Consulta Gratis</button>
                        </form>
                    </div>
                </div>
            </nav>

        </header>

    );
}

export default Mainbar;