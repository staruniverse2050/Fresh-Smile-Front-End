import React from 'react';
import './Contacto.css'


const Contacto = () => {
    return (
    <>
     <section className="contact">
      <div className="content">
        <h2>CONTACTENOS </h2>
        <p>
         Te brindamos nuestros servicios.Ponte en contacto con nosotros para obtener una sonrisa más saludable y hermosa.
        </p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
           <img src="public/icono-dirección.png" alt="" />
            </div>
            <div className="text">
              <h3>Sede</h3>
              <p>
                Sede Norte calle 6 N #16A-54 
                <br />
                 Edificio torre valparaiso.local 2 profesionales
                <br />
                {/* 14568 */}
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <img src="public/icono-llamada.png" alt="" />
            </div>
            <div className="text">
              <h3>Telefono</h3>
              <p>3103594986</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
             <img src="public/icono-email.png" alt="" />
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>freshsmilecmills@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form>
            <h2>Te brindamos los mejores servicios</h2>
            <div className="inputBox">
              <input type="text" required="required" />
              <span>Ingresa su nombre completo</span>
            </div>
            <div className="inputBox">
              <input type="text" required="required" />
              <span>Ingrese su telefono</span>
            </div>
            <div className="inputBox">
              <textarea name="" id="" required="required"></textarea>
              <span>Ingrese su correo electronico</span>
            </div>
            <div className="inputBox">
              <textarea name="" id="" required="required"></textarea>
              <span>Motivo de mensaje</span>
            </div>
          

    <div className="inputBox-post">
      <input type="checkbox" id="terms" />
      <label htmlFor="terms">Acepto los términos y condiciones</label>
    </div>
    <div className="inputBox">
              <input type="submit" value="Enviar" />
            </div>
            <div className="post-text">
              <p>Si desea solicitar más información contacte con nosotros</p>
            </div>
            
          </form>
        </div>
      </div>
    </section>
      </>
       );
};

export default Contacto;