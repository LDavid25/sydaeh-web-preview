import React from 'react';
import '../index.css';
import { auto } from '@popperjs/core';

const Footer = () => {
  return (
    <>
      {/* Curva en la parte superior */}
      <div className="custom-curve bg-azul-100">
        <footer className="text-white text-center position-relative">
          {/* Contenido principal */}
          <div className="container pb-5">
            <img src="/img/isotipo-blanco-sydaeh.png" alt="SYDAEH Logo" style={{ margin: 'auto', maxWidth: '20rem' }} />
            <div className="row">
              <h2 className="fs-3 font-bold mt-10">Contacto</h2>

              {/* Información de contacto */}
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
                <div className="d-flex justify-content-center align-items-center gap-4">
                  <img width="30" height="30" src="/img/icons8-envelope-30.png" alt="filled-message" />
                  <a href="mailto:informes@sydaeh.com.mx" className="text-white fs-4">informes@sydaeh.com.mx</a>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-4">
                  <img src="/img/icons8-whatsapp-30.png" alt="WhatsApp" width="30" />
                  <span className="text-white fs-4">7224946580</span>
                </div>
              </div>
              <div className="col-12 col-md-6">
                {/* Ubicación */}

                <div className="mt-5">
                  <div className="d-flex justify-content-start align-items-center gap-4 mt-3">
                    <img width="30" height="30" src="/img/icons8-geo-cerca-40.png" alt="filled-message" />
                    <h3 className="fs-4 font-bold text-left py-6" >Ubicación</h3>
                  </div>
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

              <div className="col-12 col-md-6 d-flex justify-content-start align-items-center gap-4 mt-3">
                {/* Horario */}
                <div className="d-flex justify-content-start align-items-center gap-4 mt-3">
                  <img src="/img/icon-calendar.png" alt="Horario" width="40" />
                  <span className="ms-2 fs-4 text-white text-left">Horario: <br/>Lunes a viernes de 9 am a 5pm</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;