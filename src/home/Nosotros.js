import React, { useEffect, useState } from 'react';
import './Nosotros.css';
import marcaa from '../assets/marcaa.png';
import marcab from '../assets/marcab.png';
import marcac from '../assets/marcac.png';
import marcad from '../assets/marcad.png';
import marcae from '../assets/marcae.png';



function Nosotros(props) {
    const [proveedores, setProveedores] = useState([]);
    const [datosFiltrados, setDatosFiltrados] = useState([]);
    const [nombreProveedor, setNombreProveedor] = useState("");

    const [idproveedor, setIdproveedor] = useState('');
    const [nombreempresa, setNombreempresa] = useState('');
    const [nombrecontacto, setNombrecontacto] = useState('');
    const [cargocontacto, setCargocontacto] = useState('');
    const [direccion, setDireccion] = useState('');
    const [pais, setPais] = useState('');
    const [ciudad, setCiudad] = useState('');


    useEffect(() => {
        leerProveedor();
        setTimeout(() => {
            document.getElementById("btnBuscar").click();
        }, 1000);

    }, []);

    const leerProveedor = (e) => {

        const rutaServicio = "https://servicios.campus.pe/proveedores.php";
        fetch(rutaServicio)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProveedores(data);
            })
    }
    const buscar = () => {
        let proveedoresFiltrados = proveedores.filter((item) => {
            return nombreProveedor !== "" ? item["nombreempresa"].indexOf(nombreProveedor) > 0 : true;
        }
        )
        setDatosFiltrados(proveedoresFiltrados);
    }

    const llenarDatos = (item) => {
        setIdproveedor(item.idproveedor);
        setNombreempresa(item.nombreempresa);
        setNombrecontacto(item.nombrecontacto);
        setCargocontacto(item.cargocontacto);
        setDireccion(item.direccion);
        setPais(item.pais);
        setCiudad(item.ciudad);
    }
    const contenidoFormulario = () => {
        return (
            <div className="modal-body ">
                <div className="mb-3 subtitleText">
                    <input type="text" className='form-control bigInput outline-0' placeholder='idcategoria' value={idproveedor}
                        readOnly />
                </div>
                <div className="mb-3 subtitleText">
                    <input type="text" className='form-control' placeholder='Nombre' value={nombreempresa}
                        required
                        onChange={(event) => setNombreempresa(event.target.value)} />
                </div>
                <div className="mb-3 subtitleText">
                    <input type="text" className='form-control' placeholder='Descripción' value={nombrecontacto}
                        required
                        onChange={(event) => setNombrecontacto(event.target.value)} />
                </div>
                <div className="mb-3 subtitleText">
                    <input type="text" className='form-control' placeholder='Descripción' value={cargocontacto}
                        required
                        onChange={(event) => setCargocontacto(event.target.value)} />
                </div>
                <div className="mb-3 subtitleText">
                    <input type="text" className='form-control' placeholder='Descripción' value={direccion}
                        required
                        onChange={(event) => setDireccion(event.target.value)} />
                </div>
                <div className="mb-3 subtitleText">
                    <input type="text" className='form-control' placeholder='Descripción' value={pais}
                        required
                        onChange={(event) => setPais(event.target.value)} />
                </div>
                <div className="mb-3 subtitleText">
                    <input type="text" className='form-control' placeholder='Descripción' value={ciudad}
                        required
                        onChange={(event) => setCiudad(event.target.value)} />
                </div>
            </div>
        )
    }

    const mostrarUpdateModal = () => {
        return (
            <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title redText" id="exampleModalLabel">Detalle</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {contenidoFormulario()}
                        <div className="modal-footer">
                            <button id='btnBuscar4' type="button" className="btn bigButton btn-lg" data-bs-dismiss="modal">Cerrar</button>

                        </div>

                    </div>
                </div>
            </div>
        )
    }


    return (
        <div>
            <div id='LogoMarcas' className="row marcas center-box mx-auto">

                <div className="col "><img className='marca ms-4' src={marcab} alt="" /></div>
                <div className="col"><img className='marca ms-4' src={marcaa} alt="" /></div>
                <div className="col"><img className='marca ' src={marcae} alt="" /></div>
                <div className="col"><img className='marca ms-5' src={marcad} alt="" /></div>
                <div className="col"><img className='marca ms-2' src={marcac} alt="" /></div>

            </div>

            <div id='Estados' className='padded container'>
                <h4 className='redText'>EXPERT SERVICES</h4>
                <h3 className='titleTextb pt-3 pb-5'>Expert Consulting Services</h3>
                <div className='row'>
                    <div className="col boxItem">
                        <i className="bi bi-sun-fill iconItema"></i>
                        <h3 className='itemTitle mt-2'>Creative Development</h3>
                        <p className='itemContent'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, earum minus?</p>
                        <h5 className='itemSeeMore'> Leer más</h5>
                    </div>
                    <div className="col boxItem">
                        <i className="bi bi-bar-chart-steps iconItemb"></i>
                        <h3 className='itemTitle mt-2'>Business Consultation</h3>
                        <p className='itemContent'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, earum minus?</p>
                        <h5 className='itemSeeMore'> Leer más</h5>
                    </div>

                    <div className="col boxItem">
                        <i className="bi bi-ubuntu iconItemc"></i>
                        <h3 className='itemTitle mt-2'>Perfect Solutions</h3>
                        <p className='itemContent'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, earum minus?</p>
                        <h5 className='itemSeeMore'> Leer más</h5>
                    </div>

                </div>
            </div>

            <section id='proveedores'>
                <div className='container'>
                    <div>
                        <h3 className='redText'>Nuestros </h3>
                        <h2 className='py-3 text-center titleTextb'>proveedores</h2>
                    </div>
                    <div id='cajaBuscador' className='container row mb-4'>
                        <div className="mb-3 col">
                            <input id='ingresarTexto' type="text" className='w-100 inputProveedor ' placeholder='Buscar por empresa'
                                value={nombreProveedor}
                                onChange={(event) => setNombreProveedor(event.target.value)} />
                        </div>
                        <div className="mb-3 col-lg-2">
                            <button className='btn bigButton btn-lg' id="btnBuscar" onClick={() => buscar()}>Consultar</button>
                        </div>
                    </div>

                    <div className='fondo-blanco' >
                        <table className='table table-borderless table-hover'>
                            <thead className='table-red'>
                                <tr className=''>
                                    <th>Empresa</th>
                                    <th>Contacto</th>
                                    <th>Cargo</th>
                                    <th>Dirección</th>
                                    <th>País</th>
                                    <th>Ciudad</th>
                                    <th ></th>
                                </tr>
                            </thead>
                            <tbody>
                                {datosFiltrados.map(item =>
                                    <tr key={item.idproveedor}>
                                        <td className=''>{item.nombreempresa}</td>
                                        <td>{item.nombrecontacto}</td>
                                        <td>{item.cargocontacto}</td>
                                        <td>{item.direccion}</td>
                                        <td>{item.pais}</td>
                                        <td>{item.ciudad}</td>
                                        <td>
                                            <div className='iconb'>
                                                <i className="bi bi-pencil-fill" onClick={() => llenarDatos(item)}
                                                    data-bs-toggle="modal" data-bs-target="#updateModal"></i>

                                            </div>

                                        </td>
                                    </tr>
                                )}
                            </tbody>

                        </table>
                        <div id='lineaFooter2'></div>

                    </div>


                </div>

            </section>

            {mostrarUpdateModal()}



        </div>
    );
}

export default Nosotros;