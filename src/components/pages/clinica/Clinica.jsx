import React from "react";
import './Clinica.css'

export const Clinica = () => {
  return (
    <div>
      <section id="container" className=" pb-5">
      <div className="contenedor-portafolio">
        <h1>Tus clinicas mas cercanas</h1>
        <p>Pide tu cita en el lugar de tu preferencia</p>
      </div>
        <div class="col-xs-12 col-sm-6 col-md-4">
          <div
            class="image-flip"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="mainflip">
              <div class="frontside">
                <div class="card">
                  <div class="card-body text-center">
                    <p>
                      <img class="img-fluid" src="public/diente.jpg" alt="card image" />
                    </p>
                    <h4 class="card-title">Clinica Odontologica Topdent</h4>
                    <p class="card-text">Compartiendo sonrisas !!!</p>
                    <strong>Dirección:</strong>
                    <p>
                      <a
                        href="https://www.google.com/maps?rlst=f&rlz=1C1ALOY_esCO991CO991&lqi=Ch5jbGluaWNhcyBvZG9udG9sb2dpY2FzIGFybWVuaWFIyNCf-IyrgIAIWioQABABGAAYARgCIh5jbGluaWNhcyBvZG9udG9sb2dpY2FzIGFybWVuaWGSAQ1kZW50YWxfY2xpbmljqgE_EAEqGiIWY2xpbmljYXMgb2RvbnRvbG9naWNhcygOMh8QASIbTv6RoegwydwA7oXzL6Iej8eImyU5_KvLsTIO&vet=12ahUKEwiWm5G91IH-AhUqQjABHeVTB98Q8UF6BAgDEFY..i&lei=03QkZNblLqqEwbkP5aed-A0&cs=0&um=1&ie=UTF-8&fb=1&gl=co&sa=X&geocode=Kac4zT2r9TiOMVYUJj2J6dKW&daddr=Cra+15+%2310-57,+Armenia,+Quind%C3%ADo"
                        className="direccion"
                      >
                        Cra 15 #10-57, Armenia, Quindío
                      </a>
                    </p>
                    <p>
                      <strong>Horas:</strong> Abre a las 14:00
                    </p>
                    <p>
                      <strong>Teléfono: </strong> 321 8353045
                    </p>
                    <button>Agenda tu cita</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4">
          <div
            class="image-flip"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="mainflip">
              <div class="frontside">
                <div class="card">
                  <div class="card-body text-center">
                    <p>
                    <img class=" img-fluid" src="public/diente.jpg" alt="card image" />
                    </p>
                    <h4 class="card-title">Marlon Becerra</h4>
                    <p class="card-text">Una atención espectacular.</p>
                    <strong>Dirección:</strong>
                    <p>
                      <a
                        href="https://www.google.com/maps?rlst=f&rlz=1C1ALOY_esCO991CO991&lqi=Ch5jbGluaWNhcyBvZG9udG9sb2dpY2FzIGFybWVuaWFIyNCf-IyrgIAIWioQABABGAAYARgCIh5jbGluaWNhcyBvZG9udG9sb2dpY2FzIGFybWVuaWGSAQ1kZW50YWxfY2xpbmljqgE_EAEqGiIWY2xpbmljYXMgb2RvbnRvbG9naWNhcygOMh8QASIbTv6RoegwydwA7oXzL6Iej8eImyU5_KvLsTIO&vet=12ahUKEwiWm5G91IH-AhUqQjABHeVTB98Q8UF6BAgDEFY..i&lei=03QkZNblLqqEwbkP5aed-A0&cs=0&um=1&ie=UTF-8&fb=1&gl=co&sa=X&geocode=Kac4zT2r9TiOMVYUJj2J6dKW&daddr=Cra+15+%2310-57,+Armenia,+Quind%C3%ADo"
                        className="direccion"
                      >
                        7 Norte -56, Norte, Cra. 14, Armenia, Quindío
                      </a>
                    </p>
                    <p>
                      <strong>Horas:</strong> Cierra a las 18:00
                    </p>
                    <p>
                      <strong>Teléfono: </strong> 67341777
                    </p>
                    <button>Agenda tu cita</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4">
          <div
            class="image-flip"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="mainflip">
              <div class="frontside">
                <div class="card">
                  <div class="card-body text-center">
                    <p>
                    <img class=" img-fluid" src="public/diente.jpg" alt="card image" />
                    </p>
                    <h4 class="card-title">Corpodent Armenia Norte</h4>
                    <p class="card-text">
                      Muy buena atención y calidad, por todos.
                    </p>
                    <strong>Dirección:</strong>
                    <p>
                      <a
                        href="https://www.google.com/maps?rlst=f&rlz=1C1ALOY_esCO991CO991&lqi=Ch5jbGluaWNhcyBvZG9udG9sb2dpY2FzIGFybWVuaWFIyNCf-IyrgIAIWioQABABGAAYARgCIh5jbGluaWNhcyBvZG9udG9sb2dpY2FzIGFybWVuaWGSAQ1kZW50YWxfY2xpbmljqgE_EAEqGiIWY2xpbmljYXMgb2RvbnRvbG9naWNhcygOMh8QASIbTv6RoegwydwA7oXzL6Iej8eImyU5_KvLsTIO&vet=12ahUKEwiWm5G91IH-AhUqQjABHeVTB98Q8UF6BAgDEFY..i&lei=03QkZNblLqqEwbkP5aed-A0&cs=0&um=1&ie=UTF-8&fb=1&gl=co&sa=X&geocode=Kac4zT2r9TiOMVYUJj2J6dKW&daddr=Cra+15+%2310-57,+Armenia,+Quind%C3%ADo"
                        className="direccion"
                      >
                        Cra. 14 #9 Norte 71, Armenia, Quindío
                      </a>
                    </p>
                    <p>
                      <strong>Horas:</strong> Cierra a las 17:00
                    </p>
                    <p>
                      <strong>Teléfono: </strong> (606) 7369096
                    </p>
                    <button>Agenda tu cita</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4">
          <div
            class="image-flip"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="mainflip">
              <div class="frontside">
                <div class="card">
                  <div class="card-body text-center">
                    <p>
                    <img class=" img-fluid" src="public/diente.jpg" alt="card image" />
                    </p>
                    <h4 class="card-title">Odontogama</h4>
                    <p class="card-text">
                      Trabajo impecable.
                    </p>
                    <strong>Dirección:</strong>
                    <p>
                      <a
                        href="https://www.google.com/maps?rlst=f&rlz=1C1ALOY_esCO991CO991&lqi=Ch5jbGluaWNhcyBvZG9udG9sb2dpY2FzIGFybWVuaWFIyNCf-IyrgIAIWioQABABGAAYARgCIh5jbGluaWNhcyBvZG9udG9sb2dpY2FzIGFybWVuaWGSAQ1kZW50YWxfY2xpbmljqgE_EAEqGiIWY2xpbmljYXMgb2RvbnRvbG9naWNhcygOMh8QASIbTv6RoegwydwA7oXzL6Iej8eImyU5_KvLsTIO&vet=12ahUKEwiWm5G91IH-AhUqQjABHeVTB98Q8UF6BAgDEFY..i&lei=03QkZNblLqqEwbkP5aed-A0&cs=0&um=1&ie=UTF-8&fb=1&gl=co&sa=X&geocode=Kac4zT2r9TiOMVYUJj2J6dKW&daddr=Cra+15+%2310-57,+Armenia,+Quind%C3%ADo"
                        className="direccion"
                      >
                        Carrera 15 #15-12 Edificio Los Ándes. Piso 1, Armenia,
                        Quindío
                      </a>
                    </p>
                    <p>
                      <strong>Horas:</strong> Abre a las 14:00
                    </p>
                    <p>
                      <strong>Teléfono: </strong> 316 3027983
                    </p>
                    <button>Agenda tu cita</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4">
          <div
            class="image-flip"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="mainflip">
              <div class="frontside">
                <div class="card">
                  <div class="card-body text-center">
                    <p>
                    <img class=" img-fluid" src="public/diente.jpg" alt="card image" />
                    </p>
                    <h4 class="card-title">Oralinnova</h4>
                    <p class="card-text">Excelente atención y servicio.</p>
                    <strong>Dirección:</strong>
                    <p>
                      <a
                        href="https://www.google.com/maps?rlst=f&rlz=1C1ALOY_esCO991CO991&lqi=Ch5jbGluaWNhcyBvZG9udG9sb2dpY2FzIGFybWVuaWFIyNCf-IyrgIAIWioQABABGAAYARgCIh5jbGluaWNhcyBvZG9udG9sb2dpY2FzIGFybWVuaWGSAQ1kZW50YWxfY2xpbmljqgE_EAEqGiIWY2xpbmljYXMgb2RvbnRvbG9naWNhcygOMh8QASIbTv6RoegwydwA7oXzL6Iej8eImyU5_KvLsTIO&vet=12ahUKEwiWm5G91IH-AhUqQjABHeVTB98Q8UF6BAgDEFY..i&lei=03QkZNblLqqEwbkP5aed-A0&cs=0&um=1&ie=UTF-8&fb=1&gl=co&sa=X&geocode=Kac4zT2r9TiOMVYUJj2J6dKW&daddr=Cra+15+%2310-57,+Armenia,+Quind%C3%ADo"
                        className="direccion"
                      >
                        carrera 14 #18-56 local 21, Armenia, Quindío
                      </a>
                    </p>
                    <p>
                      <strong>Horas:</strong> Cierra a las 18:30
                    </p>
                    <p>
                      <strong>Teléfono: </strong> 317 6808588
                    </p>
                    <button>Agenda tu cita</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4">
          <div
            class="image-flip"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="mainflip">
              <div class="frontside">
                <div class="card">
                  <div class="card-body text-center">
                    <p>
                    <img class=" img-fluid" src="public/diente.jpg" alt="card image" />
                    </p>
                    <h4 class="card-title">Orion Odontologia</h4>
                    <p class="card-text">Una atención genial.</p>
                    <strong>Dirección:</strong>
                    <p>
                      <a
                        href="https://www.google.com/maps?rlst=f&rlz=1C1ALOY_esCO991CO991&lqi=Ch5jbGluaWNhcyBvZG9udG9sb2dpY2FzIGFybWVuaWFIyNCf-IyrgIAIWioQABABGAAYARgCIh5jbGluaWNhcyBvZG9udG9sb2dpY2FzIGFybWVuaWGSAQ1kZW50YWxfY2xpbmljqgE_EAEqGiIWY2xpbmljYXMgb2RvbnRvbG9naWNhcygOMh8QASIbTv6RoegwydwA7oXzL6Iej8eImyU5_KvLsTIO&vet=12ahUKEwiWm5G91IH-AhUqQjABHeVTB98Q8UF6BAgDEFY..i&lei=03QkZNblLqqEwbkP5aed-A0&cs=0&um=1&ie=UTF-8&fb=1&gl=co&sa=X&geocode=Kac4zT2r9TiOMVYUJj2J6dKW&daddr=Cra+15+%2310-57,+Armenia,+Quind%C3%ADo"
                        className="direccion"
                      >
                        carrera 14 #18-56 local 21, Armenia, Quindío
                      </a>
                    </p>
                    <p>
                      <strong>Horas:</strong> Cierra a las 18:30
                    </p>
                    <p>
                      <strong>Teléfono: </strong> 317 6808588
                    </p>
                    <button>Agenda tu cita</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}