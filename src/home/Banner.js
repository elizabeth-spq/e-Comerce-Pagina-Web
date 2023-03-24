
import React from 'react';
import imga from '../assets/imagena.jpg';
import imgb from '../assets/imagenb.jpg';


import './Banner.css';

function Banner(props) {
    return (

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>

            </div>
            <div className="carousel-inner ">
                <div className="carousel-item active">
                    <img src={imga} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block ">
                        <h5 className='redText py-3' >BOOST YOUR BUSINESS</h5>
                        <h1 className='titleText'>How To Easily Start <br /> Your Online Business</h1>
                        <p className='subtitleText py-3'>Posuere semper ut donec vel. Ut egestas sit dui placerat <br /> volutpat consequat hac mattis.</p>
                        <div className='caja-a align-middle box-slides'>
                            <button type="button" className="btn bigButton btn-lg mx-3 ">Descubre más</button>
                            <div className='icona mx-3'><i className="bi bi-telephone-fill "></i></div>
                            <p className='subtitleText pt-2'>Para consultas</p>

                        </div>

                    </div>
                </div>
                <div className="carousel-item">
                    <img src={imgb} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block  ">
                        <h5 className='redText' >BOOST YOUR BUSINESS</h5>
                        <h1 className='titleText'>How To Easily Start <br /> Your Online Business</h1>
                        <p className='subtitleText'>Posuere semper ut donec vel. Ut egestas sit dui placerat <br /> volutpat consequat hac mattis.</p>
                        <div className='caja-a align-middle box-slides'>
                            <button type="button" className="btn bigButton btn-lg mx-3 ">Descubre más</button>
                            <div className='icona mx-3'><i className="bi bi-telephone-fill "></i></div>
                            <p className='subtitleText pt-2'>Para consultas</p>

                        </div>


                    </div>

                </div>


            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

        </div>


    );
}

export default Banner;