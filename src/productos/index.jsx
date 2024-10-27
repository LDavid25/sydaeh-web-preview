import React from 'react';
import { FormContacto } from '../form-contacto';

const Productos = () => {
    return (
        <div>
            {/* Sección: Encabezado */}
            <section className="py-5 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 d-flex flex-column justify-content-center align-items-start ">
                            <h1 className="display-3 c-azul font-bold text-start">Unidos por el bienestar</h1>
                            <p className="fs-4 py-6 text-start w-100 w-md-50">Nos convertimos en tus aliados para el abastecimiento en el área médica.</p>
                            <a href="#cotizar" className="bg-azul-100 text-white font-bold rounded-pill px-4 py-2">Quiero ser asociado</a>
                        </div>
                        <div className="col-12 col-md-7">
                            <img
                                src="\img\profesional-medico.png"
                                alt="Profesional médico"
                                className="img-fluid"
                            />
                            {/* visible en md */}
                            <div className="d-flex justify-content-center align-items-center position-relative">
                                <img
                                    src="/img/pildora.png"
                                    alt="Píldora"
                                    className="position-absolute bottom-20 w-[100px] z-9 d-none d-md-block"
                                />
                            </div>
                            <div className="d-flex justify-content-center align-items-center position-relative">
                                <img
                                    src="/img/medicamentos.png"
                                    alt="Medicamentos"
                                    className="position-absolute left-10 -top-[30rem] w-[200px] d-none d-md-block"
                                />
                            </div>

                            {/* visible en md */}
                            <div className="position-relative -top-12 left-10  d-md-none d-sm-block" >
                                <img
                                    src="/img/medicamentos.png"
                                    alt="Medicamentos"
                                    className="position-absolute w-[100px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección: Productos */}
            <section className="bg-white py-5">
                <div className="container">
                    <h2 className="display-3 font-bold text-center c-cyan mb-5">Productos</h2>
                    <div className="row">
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card" style={{
                                backgroundImage: 'url(/img/enfermera-medicamentos.png)',
                                minHeight: '30rem',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                                <div className="card-body d-flex align-items-end">
                                    <h5 className="card-title fs-3 font-bold text-white">Medicamentos</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 mb-4">
                            <div className="card" style={{
                                backgroundImage: 'url(/img/doctor-material-quirurgico.png)',
                                minHeight: '30rem',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                                <div className="card-body text-center d-flex align-items-end">
                                    <h5 className="card-title fs-3 font-bold text-white">Material quirúrgico</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 mb-4">
                            <div className="card" style={{
                                backgroundImage: 'url(/img/equipamiento-medico.png)',
                                minHeight: '30rem',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                                <div className="card-body text-center d-flex align-items-end">
                                    <h5 className="card-title fs-3 font-bold text-white">Equipo médico</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card">
                                <img src="/img/bg-azul-logotipo.png" alt="Medicamentos" className="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección: Cotiza ahora */}
            <section className="py-5">
                <div className="container">
                    <div className="row " >
                        <div className="col-12 col-md-5 p-0 m-0 d-flex justify-content-end">
                            <img src="/img/atencion-cliente.png" alt="Cotiza ahora" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-7 bg-azul-100 p-10 d-flex flex-column justify-content-center align-items-start" id="cotizar">
                            <h2 className="fs-3 font-bold text-white ">¡Cotiza ahora!</h2>
                            <p className="fs-4 text-white py-6">Para recibir una cotización personalizada de nuestros productos, llena el formulario a continuación.</p>
                            <a href="#contacto" className="bg-cyan font-bold rounded-pill px-4 py-2">Llenar formulario</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cotización Section */}
            <FormContacto />

        </div>
    );
}

export default Productos;