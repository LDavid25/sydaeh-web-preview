import React from 'react';
import '../app.css';

export const FormContacto = () => {
    return (
        <>
            <section className="container bg-sydaeh-2 py-16 my-16">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h2 className="display-4 fw-bold text-white mx-3">Realiza una cotización</h2>
                        <span className="fs-4 text-secondary text-white mx-3">¡Habla con nuestro equipo! </span>
                        <hr className='mx-3' />
                        <img src="src\assets\img\truck-horizontal.png" alt="truck horizontal" className="ml-n3" />
                    </div>
                    <div className="col-12 col-md-6">
                        <span className="fs-2 text-white fw-bold">Deja aquí tus datos</span>
                        <form action="" className='w-md-75 w-100'>
                            <div className="my-3">
                                <label for="nombreApellido" className="form-label visually-hidden"></label>
                                <input type="text" className="form-control" id="nombreApellido" placeholder='Nombre y apellido' />
                            </div>
                            <div className="my-3">
                                <label for="email" className="form-label visually-hidden"></label>
                                <input type="email" className="form-control" id="email" placeholder='Correo electrónico' />
                            </div>
                            <div className="my-3">
                                <label for="telf" className="form-label visually-hidden"></label>
                                <input type="telf" className="form-control" id="telf" placeholder='Teléfono' />
                            </div>
                            <div className="l">
                                <select className="form-select" aria-label="Small select">
                                    <option selected>Selecciona el sector de salud</option>
                                    <option value="Atención Primaria">Atención Primaria</option>
                                    <option value="Atención Secundaria">Atención Secundaria</option>
                                    <option value="Atención Terciaria">Atención Terciaria</option>
                                    <option value="Salud Pública">Salud Pública</option>
                                    <option value="Salud Mental">Salud Mental</option>
                                </select>
                            </div>
                            <div className="my-3">
                                <label for="mensaje" className="form-label visually-hidden"></label>
                                <textarea rows={4} type="text" className="form-control" id="mensaje" placeholder='Mensaje' />
                            </div>
                            <button type="submit" className='btn-rounded-borde-cyan'>Enviar</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}