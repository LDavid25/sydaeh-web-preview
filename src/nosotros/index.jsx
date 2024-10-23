import React from 'react';

const Nosotros = () => {
    return (
        <div className="bg-sydaeh-vectores ">
            {/* Primera Sección - 100% de altura y texto alineado a la izquierda */}
            <section className="d-flex align-items-center py-10" >
                <div className="container">
                    <div className="row">
                        {/* Sección Izquierda: Ocupa 8 columnas */}
                        <div className="col-12 col-md-7 text-start">
                            <h1 className="display-3 c-azul font-bold w-75">Te apoyamos con el abastecimiento de insumos médicos</h1>
                            <p className="display-6 py-6 w-75">Proporcionamos insumos de forma segura, ¡conoce sobre nosotros!</p>
                            <a href="#conocenos" className="btn bg-azul-100 text-white btn-lg z-10">Ver más</a>
                        </div>

                        {/* Sección Derecha: Ocupa 4 columnas */}
                        <div className="col-12 col-md-5">
                            <div className="d-flex justify-content-center align-items-center position-relative">
                                {/* Imagen del hombre */}
                                <img
                                    src="/img/hombre-cargando-caja.png"
                                    alt="Hombre cargando cajas"
                                    className="img-fluid z-3"
                                />

                                {/* Imagen del camión, se oculta en pantallas pequeñas */}
                                <img
                                    src="/img/vector-1.png"
                                    alt="vector azul"
                                    className="position-absolute img-fluid hidden d-lg-block"
                                    style={{ right: '0', top: '350px', marginRight: '-10vw' }}
                                />

                                {/* Píldoras flotantes */}
                                <img
                                    src="/img/pildora.png"
                                    alt="Píldora"
                                    className="position-absolute top-0 start-10 w-[100px] animate-bounce z-9"
                                />
                                <img
                                    src="/img/pildora.png"
                                    alt="Píldora 2"
                                    className="position-absolute top-80 end-0 w-[150px] z-3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección Conócenos */}
            <section className="container py-8" id="conocenos">
                <h4 className="display-6 font-bold c-cyan text-center">Nosotros</h4>
                <h2 className="display-3 font-bold c-azul text-center">Conócenos</h2>
            </section>
            <section className="py-5" style={{ backgroundImage: "url('/img/bg-nosotros-1.png')" }}>
                <div className="container text-center">

                    <div className="row ">
                        <div className="offset-md-2 col-12 col-md-4 ">
                            <div className="card mb-4 h-100 bg-cyan-50">
                                <div className="card-body d-flex justify-content align-items-center flex-column">
                                    <img className="w-icon" src="/img/icon-check.png" alt="icon check" />
                                    <br />
                                    <p className="card-text fs-4"><b>Somos una empresa dedicada</b> a satisfacer las crecientes necesidades de abastecimiento integral de medicamentos de alta especialidad y material médico quirúrgico.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="card mb-4 h-100 bg-cyan-50 mt-4 mt-md-0">
                                <div className="card-body d-flex justify-content align-items-center flex-column">
                                    <img className="w-icon" src="/img/icon-check.png" alt="icon check" />
                                    <br />
                                    <p className="card-text fs-4"><b>Ofrecemos precios accesibles</b> para clínicas y hospitales privados, así como instituciones de Salud pública del país.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección Historia */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                            <h2 className="display-3 font-bold c-azul">Historia</h2>
                            <p className="fs-4 font-bold">SYDAEH es una organización dedicada a la venta y suministro de medicamentos y demás insumos para la salud al por mayor con capital 100% mexicano.</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src="/img/sydaeh-logo-fondo-azul.png" alt="Historia de la empresa" className="img-fluid" />
                        </div>
                    </div>
                    <div className="row">
                        <p className="fs-4 py-6 border shadow rounded-4 p-5 my-5 bg-white z-10" >
                            Es una marca joven, firme y comprometida en cumplir objetivos a través de la dedicación y esfuerzo de cada colaborador en el con presencia Estado de México y Ciudad de México Inicia operaciones en el año 2019, en la actualidad se cuenta con un almacén en el Municipio de Lerma de Villada, Estado de México y un almacén en la alcaldía Benito Juárez, CDMX. El personal de SYDAEH es parte fundamental de la organización, por lo cual está enfocado / capacitado para brindar servicio de calidad a los clientes que forman parte del ramo farmacéutico.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sección Misión */}
            <section className="overflow-x-hidden">
                <div className="container pt-md-[200px] -my-md-[150px] ">
                    <div className="row pt-16">
                        <div className="col-12 col-md-6">
                            <img src="/img/suplementos-medicos.png" alt="Insumos medicos"
                                className="img-fluid position-relative d-none d-md-block w-[35rem]"
                                style={{ marginLeft: '-9vw' }} />
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center flex-column">
                            <img src="/img/icon-trofeo.png" alt="icono Trofeo" className="w-icon" />
                            <h2 className="display-3 font-bold c-azul">Misión</h2>
                            <p className="fs-4 py-3">Brindar un servicio diferenciado en la distribución,
                                y dispensación de productos farmacéuticos intrahospitalarios y alta especialidad, para el beneficio de nuestros socios de negocio. </p>

                        </div>
                    </div>
                    <div className="row bg-white my-16 pt-10 pl-10 pr-10 border shadow rounded-4 ">
                        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                            <img src="/img/icon-cama-hospital.png" alt="icono cama de hospital" className="w-icon" />
                            <h2 className="display-3 font-bold c-azul">Vision</h2>
                            <p className="fs-4 py-3"><b>Ser el proveedor n°1 de servicios de distribución de productor farmacéuticos intrahospitalarios</b>, material medico quirúrgico, complementos alimenticios, subvenir deportivos y de alta especialidad en el segmento de hospitales privados.</p>
                        </div>
                        <div className="col-12 col-md-6 d-flex ">
                            <img src="/img/hombre-doctor.png" alt="Hombre vestido de doctor"
                                className="z-10"
                            />
                            <img src="/img/jeringa.png" alt="jeringa"
                                className="position-relative d-none d-lg-block z-10 w-30"
                                style={{ top: '-50px', marginLeft: '-50rem' }} />
                            <img src="/img/vector-3.png" alt="vector 3"
                                className="position-relative d-none d-lg-block z-1"
                                style={{ top: '0', marginLeft: '0' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección Visión */}
            <section className="pb-16">
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <img src="/img/icon-meta.png" alt="icono meta" className="w-icon" />
                        <h2 className="display-3 font-bold c-azul">Valores</h2>
                            <div className="py-6">
                                <ul className='fs-4 c-cyan justify-content-between font-bold d-md-flex text-center'>
                                    <li>Honestidad</li>
                                    <li>Transparencia</li>
                                    <li>Servicio al cliente</li>
                                    <li>Innovación</li>
                                    <li>Adaptación</li>
                                </ul>
                            </div>
                            <div>
                                <img src="/img/equipo-trabajo-sydaeh.png" alt="Equipo de trabajo de la empresa SYDAEH" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección Valores */}

        </div>
    );
}

export default Nosotros;
