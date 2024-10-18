import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../app.css';
import { FormContacto } from '../form-contacto';


export const Inicio = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="font-sans">
            {/* Hero Section */}
            <section className="d-flex justify-content-between align-items-center px-4 py-5">
                <div className="container d-flex flex-column flex-md-row align-items-center">
                    {/* Columna izquierda: Texto y botones */}

                    <div className="text-center text-md-start ">
                        <h1 className="display-3 font-weight-bold text-primary mb-4 fw-bold">Unidos por el bienestar</h1>
                        <p className="mb-6 fs-4 text-secondary">
                            Nos convertimos en tus aliados para el abastecimiento en el área médica.
                        </p>
                        <button className="btn btn-primary btn-lg">
                            Quiero ser asociado
                        </button>
                    </div>

                    {/* Columna derecha: Imágenes */}
                    <div className="d-flex justify-content-center align-items-center position-relative">
                        {/* Imagen del hombre */}
                        <img
                            src="src/assets/img/hombre-sostiene-cajas-sydaeh.png"
                            alt="Hombre sosteniendo cajas"
                            className="img-fluid z-3"
                        />

                        {/* Imagen del camión, se oculta en pantallas pequeñas */}
                        <img
                            src="src/assets/img/truck-transporte.png"
                            alt="Camión de transporte"
                            className="position-absolute d-none d-md-block w-90"
                            style={{ right: '0', marginRight: '-10vw' }}
                        />

                        {/* Píldoras flotantes */}
                        <img
                            src="src/assets/img/pildora.png"
                            alt="Píldora"
                            className="position-absolute top-0 start-10 w-[100px] animate-bounce"
                        />
                        <img
                            src="src/assets/img/pildora.png"
                            alt="Píldora"
                            className="position-absolute top-80 end-0 w-25 animate-bounce z-10"
                        />
                    </div>
                </div>
            </section>

            {/* Alianzas comerciales */}
            <section className="py-5">
                <div className="container w-100 text-center">
                    <h2 className="display-5 font-weight-bold text-primary mb-4 fw-bold">Alianzas comerciales</h2>
                    <div className="py-4">
                        <Slider {...settings}>
                            {/* Flex container with margin between images */}
                            <div className="d-flex justify-content-center align-items-center mx-2">
                                <img
                                    src="src/assets/img/pharma.png"
                                    alt="Pharma logotipo"
                                    className="img-fluid"
                                    style={{ maxHeight: '150px' }}
                                />
                            </div>
                            <div className="d-flex justify-content-center align-items-center mx-2">
                                <img
                                    src="src/assets/img/solid-farma.png"
                                    alt="SolidFarma logotipo"
                                    className="img-fluid"
                                    style={{ maxHeight: '150px' }}
                                />
                            </div>
                            <div className="d-flex justify-content-center align-items-center mx-2">
                                <img
                                    src="src/assets/img/servier.png"
                                    alt="Servier logotipo"
                                    className="img-fluid"
                                    style={{ maxHeight: '150px' }}
                                />
                            </div>
                            <div className="d-flex justify-content-center align-items-center mx-2">
                                <img
                                    src="src/assets/img/nestle.png"
                                    alt="Nestle logotipo"
                                    className="img-fluid"
                                    style={{ maxHeight: '150px' }}
                                />
                            </div>
                            <div className="d-flex justify-content-center align-items-center mx-2">
                                <img
                                    src="src/assets/img/dankel-medical.png"
                                    alt="Dankel Medical logotipo"
                                    className="img-fluid"
                                    style={{ maxHeight: '150px' }}
                                />
                            </div>
                            <div className="d-flex justify-content-center align-items-center mx-2">
                                <img
                                    src="src/assets/img/astra-zeneca.png"
                                    alt="Astra Zeneca logotipo"
                                    className="img-fluid"
                                    style={{ maxHeight: '150px' }}
                                />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

            {/* Sección ser socio */}
            <section className="bg-cyan-100 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 d-flex align-items-center justify-content-center">
                            <img
                                src="src/assets/img/valle-chalco-logo.png"
                                alt="Valle del Chalco logotipo"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-md-8 bg-white d-flex align-items-center justify-content-between p-4 shadow-md rounded-xl">
                            <h2 className="w-75 display-4 text-primary fw-bold">¡Forma parte de nuestros clientes directos!</h2>
                            <button className="btn btn-primary btn-lg">
                                Quiero ser asociado
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección Conócenos */}
            <section className="bg-white py-5">
                <div className="container d-flex flex-column flex-lg-row align-items-center">
                    <img src="src\assets\img\instalaciones-sydaeh.png" alt="Conócenos" className="img-fluid rounded mb-3 mb-lg-0 w-50" />
                    <div className="ms-lg-4 text-lg-start px-16">
                        <span className="display-6 c-cyan fw-bold">Nosotros</span>
                        <h2 className="display-4 text-primary fw-bold">Conócenos</h2>
                        <p className='mb-6 fs-4 text-secondary'>En SYDAEH nos especializamos en llevar un abastecimiento integral, con el fin de garantizar óptimos resultados a nuestros socios comerciales, así como material médico quirúrgico y medicamentos de alta especialidad a entidades de salud públicas y privadas dentro del territorio nacional.</p>
                        <button className="fw-bold btn btn-rounded-borde rounded-pill">Ver más</button>
                    </div>
                </div>
            </section>

            {/* Servicios */}
            <section className="bg-light py-5">
                <div className="container ">
                    <h2 className="display-5 mb-4 c-cyan text-center fw-bold">Servicios</h2>
                    <div className="row py-16">
                        <div className="col-md-6 col-12">
                            <img src="src\assets\img\servicio-hopitalario.png" alt="Servicio hospitalario" className="img-fluid rounded mb-3 w-100" />
                        </div>
                        <div className="col-md-6 col-12 px-16">
                            <img src="src\assets\img\icon-hospital.png" alt="icono hospital" className="img-fluid rounded mb-3 mb-lg-0 w-20" />
                            <p className="display-6 c-azul py-3 py-md-6">Brindamos servicios y distribución a empresas de alta <b>especialidad Hospitalaria</b>.</p>
                            <button className="fw-bold btn btn-rounded-borde rounded-pill">Conocer más</button>
                        </div>
                    </div>
                    <div className="row py-16 flex-sm-column-reverse flex-md-row">
                        <div className="col-md-6 col-12 px-16">
                            <img src="src\assets\img\icon-tubos-ensayo.png" alt="icono tubos de ensayo" className="img-fluid rounded mb-3 mb-lg-0 w-20" />
                            <p className="display-6 c-azul py-3 py-md-6">Trabajamos <b>directamente con laboratorios</b>.</p>
                            <button className="fw-bold btn btn-rounded-borde rounded-pill">Conocer más</button>
                        </div>
                        <div className="col-md-6 col-12">
                            <img src="src\assets\img\microscopio.png" alt="Microscopio" className="img-fluid rounded mb-3 w-100" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Productos */}
            <section className="bg-sydaeh py-32">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-12">
                            <h2 className="display-5 c-cyan fw-bold">Productos</h2>
                            <p className="mb-3 text-white display-6">¡Ten acceso directo a nuestro catálogo de productos y forma parte de nuestros asociados comerciales!</p>
                            <div className="w-100 d-flex flex-column flex-md-row py-10 justify-content-around flex-sm-colum">
                                <div className="bg-white m-3 p-3 rounded-xl d-flex align-items-center">
                                    <img src="src\assets\img\icon-instrumentos.png" alt="icono instrumentos quirurgicos" />
                                    <span className='px-3 fs-3 fw-bold c-azul'>Productos quirúrgicos </span>
                                </div>
                                <div className="bg-white m-3 p-3 rounded-xl d-flex align-items-center">
                                    <img src="src\assets\img\icon-bioseguridad.png" alt="icono Bioseguridad" />
                                    <span className='px-3 fs-3 fw-bold c-azul'>Medicamentos de alta especialidad</span>
                                </div>
                            </div>
                            <button className="btn btn-rounded-borde-cyan">Solicita nuestro catálogo</button>
                        </div>
                        <div className="col-4 d-flex">
                            <img src="src\assets\img\traje-bioseguridad.png" alt="Productos" className="scale-up img-fluid -my-3 d-none d-md-block" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Cotización */}

                        <FormContacto/>

        </div>
    );
};

export default Inicio;
