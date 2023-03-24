import React, { useEffect, useState } from 'react';
import './Productos.css';
import axios from 'axios';
import noImagen from '../assets/no-imagen.jpg';
//import { Link } from 'react-router-dom';



function Productos(props) {
    const [productos, setProductos] = useState([]);
    const [itemProducto, setItemProducto] = useState([]);

    useEffect(() => {
        leerProductos();
    }, []);

    const leerProductos = (e) => {
        const rutaServicio = "https://servicios.campus.pe/servicioproductostodos.php";

        axios.get(rutaServicio)
            .then((result) => {
                setProductos(result.data);
                //console.log(result)
            })

    }

    const seleccionarItem = (event, item) => {
        event.preventDefault();
        setItemProducto(item)
    }
    const mostrarModalQuickView = () => {
        return (
            <div className="modal fade" id="quickViewModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title redText" id="exampleModalLabel">{itemProducto.nombre}</h5>
                            <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <img src={"https://servicios.campus.pe/" + itemProducto.imagengrande} className="img-fluid" alt="" />
                                </div>
                                <div className="col">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Stock</th>
                                                <td>{itemProducto.unidadesenexistencia}</td>
                                            </tr>
                                            <tr>
                                                <th>Detalle</th>
                                                <td>{itemProducto.detalle}</td>
                                            </tr>
                                            <tr>
                                                <th>Precio</th>
                                                <td>
                                                    S/
                                                    {itemProducto.preciorebajado === "0" ? parseFloat(itemProducto.precio).toFixed(2)
                                                        : parseFloat(itemProducto.preciorebajado).toFixed(2)}
                                                    <span className="precio-lista">
                                                        {itemProducto.preciorebajado !== "0" ? " (S/." + parseFloat(itemProducto.precio).toFixed(2) + ")"
                                                            : ""}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th></th>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn bigButton">Añadir al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const agregarCarrito = (item) => {
        item.cantidad = "1";
        //console.log(item);
        let carrito = [];
        
        //console.log(carrito);
        if(localStorage.getItem("carrito")){
            carrito = JSON.parse(localStorage.getItem("carrito"));
            var index = -1;
            for(var i = 0; i< carrito.length; i++){
                var itemCarrito = carrito[i];
                if(item.idproducto === itemCarrito.idproducto){
                    index = i;
                    break;
                }
            }
            if(index === -1){
                carrito.push(item);
                localStorage.setItem("carrito",JSON.stringify(carrito));
            }
            else{
                let itemCarrito = carrito[index];
                itemCarrito.cantidad++;
                carrito[index] = itemCarrito;
                localStorage.setItem("carrito",JSON.stringify(carrito));
            }
        }
        else{
            carrito.push(item);
            localStorage.setItem("carrito",JSON.stringify(carrito));
        }
    }
    return (
        <div className="row row-cols-1 row-cols-xl-6 row-cols-lg-4 row-cols-6  g-4 container m-auto" id="cards-productos">
            {productos.map(item =>
                <div className="col" key={item.idproducto}>
                    <div className="card h-100 produ">

                        <div className='mini-produ '>
                            <img src={item.imagenchica !== null ? "https://servicios.campus.pe/" + item.imagenchica : noImagen} className="card-img-top" alt="..." />
                            <div className="overlay2 ">
                                <i className="bi bi-eye-fill btnQuickView " onClick={(event) => seleccionarItem(event, item)} data-bs-toggle="modal" data-bs-target="#quickViewModal"></i>
                            </div>
                        </div>


                        <div className={item.preciorebajado === "0" ? "sin-oferta" : "con-oferta"}>
                            {Math.round((1 - parseFloat(item.preciorebajado) / parseFloat(item.precio)) * 100)}%
                        </div>
                        <div className="card-body">
                            <h6 className="card-title titulo-producto">{item.nombre}</h6>
                            <p className="card-text precBajo">
                                <span className="precio-lista">
                                    {item.preciorebajado !== "0" ? " ($" + parseFloat(item.precio).toFixed(2) + ")" : ""}

                                </span>
                                <span id='precio-oficial'>
                                    $
                                    {item.preciorebajado === "0" ? parseFloat(item.precio).toFixed(2)
                                        : parseFloat(item.preciorebajado).toFixed(2)}

                                </span>

                                <i className="bi bi-basket2 btnAgregarCarrito" title="Añadir al carrito"
                                onClick={(event) => agregarCarrito(item)}></i>

                            </p>
                        </div>
                    </div>
                </div>
            )}

            {mostrarModalQuickView()}
        </div>




    );

}

export default Productos;