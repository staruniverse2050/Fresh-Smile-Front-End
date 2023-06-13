import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-area">
        <div className="container">
          <div className="row">
            <div className="footer-content">
            </div>

            <div className="address">
              <div className="footer-content">
                <div className="address-info">
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  <p>
                    <span>Dirección</span>
                    <p className="dateT">Cra 21a, calle 9na #099</p>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="email">
            <div className="footer-content">
              <div className="email-info">
                <i className="fa-solid fa-envelope"></i>
                <p>
                  <span className="email-text">Correo</span>
                  <p className="dateT">freshsmilecmills@gmail.com</p>
                </p>
              </div>
            </div>
          </div>

          <div className="phone">
            <div className="footer-content">
              <div className="phone-info">
                <i className="fa-solid fa-phone-volume"></i>
                <p>
                  <span className="text_telefono">Teléfono</span>
                  <p className="dateT">3204415807</p>
                </p>
              </div>
            </div>
          </div>

          <div className="redes">
            <div className="footer-content">
              <div className="redes-info">
                <i className="fa-sharp fa-solid fa-heart"></i>
                <p>
                  <span>Redes Sociales</span>
                </p>
                <div className="panel-icons">
                  <div className="footer-iconsf">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      </ul>
                      </div>
                      <div className="footer-iconsi">
                      <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h6>Los mejores servicios te lo brinda nuestro consultorio.</h6>
      </div>
    </footer>
  );
};
