import React from 'react';
import logo from '../assets/logo.png';
import './Footer.css';


function Footer(props) {
    return (
        <div className='container pt-5'>
            <div className="row  mx-auto pt-5">

                <div className="col-4 ">
                    <img className='tamaño' src={logo} alt="" />
                </div>
                <div className="col d-grid">
                    <h3 className='subTitleText'>Soporte</h3>
                    <a href="" className='footerItem'>Forum Support</a>
                    <a href="" className='footerItem'>Help FAQ</a>
                    <a href="" className='footerItem'>Contact Us</a>
                    <a href="" className='footerItem'>Pricing Plans</a>
                    <a href="" className='footerItem'>Cookie Policy</a>


                </div>
                <div className="col d-grid">
                    <h3 className='subTitleText'>Company</h3>
                    <a href="" className='footerItem'>About Us</a>
                    <a href="" className='footerItem'>My Account</a>
                    <a href="" className='footerItem'>Our Company</a>
                    <a href="" className='footerItem'>Service</a>

                </div>
                <div className="col-4 d-grid">
                    <h3 className='subTitleText'>Get In Touch</h3>
                    <a href="" className='footerItem'> <i className="bi bi-geo-alt color"></i> 121 King St, Melbourne VIC, 3000,Australia</a>
                    <a href="" className='footerItem'><i className="bi bi-envelope color"> </i>info@example.com</a>
                    <a href="" className='footerItem'><i className="bi bi-telephone color"> </i>+1 888 123 4567</a>

                </div>
                <div id='lineaFooter'></div>
                <div className='row py-4'>
                    <div className="col-6 footerItem">
                        Copyright 2022 Elizabeth Pumacota, Todos los derechos reservados.</div>
                    <div className="col-6 text-end ">
                        <a href="" className='footerItem '>Terminos y condiciones</a>
                        <a href="" className='footerItem px-4'>Carreras</a>
                        <a href="" className='footerItem'>Política de privacidad</a>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Footer;