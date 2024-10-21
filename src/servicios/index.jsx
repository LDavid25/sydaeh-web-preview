import React from 'react';
import '../app.css';
import { FormContacto } from '../form-contacto';

export const Servicios = () => {
    return (
        <div className="overflow-x-hidden">
            {/* Header Section */}
            <div className="bg-azul-100">
                <section className="container pt-6">
                    <div className="row position-relative">
                        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start">
                            <h1 className="display-3 text-left c-azul font-bold text-white">Adquiere nuestros servicios</h1>
                            <p className="fs-4 text-left text-white w-75 py-6">Asegura el abastecimiento médico de alta especialidad a tu clínica y hospitales</p>
                            <a href="#servicios" className="btn btn-light rounded-pill px-6 font-bold">Ver servicios</a>
                        </div>
                        <div className="col-12 col-md-6 position-relative">
                            {/* Imagen "Entrega de pedidos" con z-index 9 */}
                            <img src="src/assets/img/entrega-recepcion-pedido.png" alt="Entrega de pedidos" className="position-relative" style={{ zIndex: 9 }} />

                            {/* Imagen "vector 3" con z-index 3 */}
                            <img src="src/assets/img/vector-4.png" alt="vector 3" className="position-absolute d-none d-lg-block w-[500px]"
                                style={{ zIndex: 3, top: '0%', marginLeft: '55%' }} />
                        </div>
                    </div>
                </section>
            </div>

            {/* Servicios Section */}
            <section className="container my-5" id="servicios">
                <div className="row text-center">

                    <h2 className="display-6 font-bold c-cyan">Servicios</h2>
                    <h3 className="display-3 font-bold c-azul">Creamos conexiones para el bienestar</h3>
                </div>

                <div className="row mt-5">
                    <div className="col-12 col-md-6 mb-4">
                        <img src="src/assets/img/repartidor-sydaeh.png" alt="Reaprtidor Sydaeh" className="img-fluid" />
                        <div className="position-relative">
                            <img src="src/assets/img/botellas-medicamentos.png" alt="botellas de medicamentos"
                                className="img-fluid position-absolute"
                                style={{ zIndex: 3, marginTop: '-40%', marginLeft: '40%' }}
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center ">
                        <img className="w-icon" src="src/assets/img/icon-caja.png" alt="icon caja" />
                        <h4 className="display-3 font-bold c-azul mt-3">Distribución</h4>
                        <p className="fs-4">Brindamos servicios y distribución a empresas de alta especialidad hospitalaria.</p>
                    </div>
                </div>
                <div className="row mt-md-10">
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                        <img className="w-icon" src="src/assets/img/icon-lab.png" alt="icon laboratorio" />
                        <h4 className="display-3 font-bold c-azul mt-3">Controles de acceso</h4>
                        <p className="fs-4">Trabajamos directamente con laboratorios</p>
                    </div>
                    <div className="col-12 col-md-6 mb-4">
                        <img src="src/assets/img/ingeniero-medico.png" alt="Ingeniero médico" className="img-fluid" />
                        <div className="position-relative hidden d-lg-block ">
                            <img src="src/assets/img/microscopio-pildora.png" alt="Microscopio con pildora"
                                className="img-fluid position-absolute w-50"
                                style={{ zIndex: 3, marginTop: '-500px', marginRight: '0%' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Distribución Section */}
            <section className="bg-azul-100 text-white py-5 text-center">
                <div className="container">
                    <div className="d-flex flex-column justify-content-center align-items-center pb-6">
                        <h2 className="display-4 font-bold text-white">Conoce nuestros períodos de entrega</h2>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="bg-white p-6 rounded-4 d-flex justify-content-between">
                                <p className="fs-3 c-zul font-bold">Guadalajara, Guanajuato, Puebla, Tlaxcal</p>
                                <span className="fs-3 font-bold px-6 c-cyan tag-day">2 días</span>
                            </div>
                            <div className="bg-white p-6 my-3 rounded-4 d-flex justify-content-between">
                                <p className="fs-3 c-zul font-bold">Mérida, Tijuana</p>
                                <span className="fs-3 font-bold px-6 c-cyan tag-day">1 semana</span>
                            </div>
                            <div className="bg-white p-6 my-3 rounded-4 d-flex justify-content-between">
                                <p className="fs-3 c-zul font-bold">Monterrey, San Luis, Campeche</p>
                                <span className="fs-3 font-bold px-6 c-cyan tag-day">3 a 4 días</span>
                            </div>
                            <div className="bg-white p-6 my-3 rounded-4 d-flex justify-content-between">
                                <p className="fs-3 c-zul font-bold">En Hospitales CDMX</p>
                                <span className="fs-3 font-bold px-6 c-cyan tag-day">Entrega el mismo día</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <iframe
                                title="Ubicación"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d773262.9879874445!2d-99.7147565468556!3d19.44723178685367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2757b91e343c3%3A0x48c7e37bc6696369!2sSYDAEH!5e1!3m2!1ses!2sve!4v1729205565797!5m2!1ses!2sve"
                                width="100%"
                                height="100%"
                                className="border-0"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </section>

            {/* Infraestructura Section */}
            <section className="container my-5 py-6">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img className="w-icon" src="src/assets/img/icon-almacen.png" alt="icon almacen" />
                        <h2 className="display-4 font-bold c-azul ">Conoce nuestra infraestructura</h2>
                        <hr />
                        <p className="fs-4">Tenemos un área de almacenamiento de 700 metros cuadrados, contamos con 3 unidades exclusivas para la distribución de medicamentos e insumos para la salud, contamos con una plantilla de alrededor de 25 personas para brindar un servicio de calidad, distribución de red de frio, contamos con un área administrativa de 125 metros cuadrados, contamos con baños, vestidores, recepción, comedor, sala de juntas.</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src="src/assets/img/almacen-sydaeh.png" alt="Infraestructura" className="img-fluid mt-4" />
                    </div>
                </div>
            </section>

            {/* Cotización Section */}
            <FormContacto />

        </div>
    )
}