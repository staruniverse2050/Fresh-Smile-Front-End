import React from 'react';
import './Contacto.css'

const Contacto = () => {
  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="contactInfo">
            <div className="content">
              <h2>Contáctanos</h2>
              <p>Te brindamos nuestros servicios. Ponte en contacto con nosotros para obtener una sonrisa más saludable y hermosa.</p>
            </div>
            <div className="box">
              <div className="icon">
                <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852208/Fresh_Smile_Cmills/icono-direcci%C3%B3n_h51k4v.png" alt="" />
              </div>
              <div className="text">
                <h3>Dirección</h3>
                <p>Sede Norte calle 6 N #16A-54<br />Edificio torre Valparaiso. Local 2 profesionales.</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852209/Fresh_Smile_Cmills/icono-llamada_dch8ue.png" alt="" />
              </div>
              <div className="text">
                <h3>Teléfono</h3>
                <p>3103594986</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852208/Fresh_Smile_Cmills/icono-email_wqz4wa.png" alt="" />
              </div>
              <div className="text">
                <h3>Correo electrónico</h3>
                <p>freshsmilecmills@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form>
              <h2>Te brindamos los mejores servicios</h2>
              <div className="inputBox">
                <input type="text" required />
                <span>Nombre completo</span>
              </div>
              <div className="inputBox">
                <input type="text" required />
                <span>Teléfono</span>
              </div>
              <div className="inputBox">
                <textarea name="" id="" required></textarea>
                <span>Correo electrónico</span>
              </div>
              <div className="inputBox">
                <textarea name="" id="" required></textarea>
                <span>Motivo del mensaje</span>
              </div>
              <div className="inputBox-post">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">Acepto los términos y condiciones</label>
              </div>
              <div className="inputBox">
                <input type="submit" value="Enviar" />
              </div>
              <div className="post-text">
                <p>Si desea solicitar más información, por favor contáctenos.</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;
