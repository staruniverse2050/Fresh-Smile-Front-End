import React, { useState } from "react";
import "./Contacto.css";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [motivo, setMotivo] = useState("");
  const [checkbox, setcheckbox] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckede, setIsCheckede] = useState(false);


  const templateID = "template_cd9lwaf";
  const userID = "Zll8cDWW_JZg7WZMt";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setIsModalOpen(!isModalOpen);
    setIsCheckede(false);
    setIsChecked(event.target.checked);


  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleTelefonoChange = (event) => {
    setTelefono(event.target.value);
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleMotivoChange = (event) => {
    setMotivo(event.target.value);
  };

  const handleother = (event) => {
    event.preventDefault();
    if (!nombre || !telefono || !correo || !motivo) {
      Swal.fire({
        icon: "error",
        title: "Campos incompletos",
        text: "Por favor, complete todos los campos obligatorios.",
      });
      return;
    }

    // if (!isChecked) {
    //   Swal.fire({
    //     icon: 'warning',
    //     title: 'Oops...',
    //     text: 'Debes aceptar los términos y condiciones.',
    //   });
    //   return;
    // }
    Swal.fire({
      title: "Cargando",
      text: "Espere un momento",
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    setTimeout(() => {
      Swal.close(); // Cierra la alerta después de 6 segundos
      // Continúa con el resto del código aquí
    }, 2000);

    const subject = encodeURIComponent(
      "Me gustaría comunicarme con ustedes Fresh Smile Cmills"
    );
    const body = encodeURIComponent(`
  Mi nombre es : ${nombre}
  Mi número de contacto: Teléfono: ${telefono}
  El motivo de mi mensaje es : ${motivo}
  `);

    const mailtoLink = `mailto:freshsmilecmills@gmail.com?subject=${subject}&body=${body}`;

    window.open(mailtoLink);

    // Limpia los campos del formulario
    setNombre("");
    setTelefono("");
    setCorreo("");
    setMotivo("");
    setIsChecked(false); // Restablecer el estado de isChecked a false
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nombre || !telefono || !correo || !motivo) {
      Swal.fire({
        icon: "error",
        title: "Campos incompletos",
        text: "Por favor, complete todos los campos obligatorios.",
      });
      return;
    }

    if (!isChecked) {
     Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Debes aceptar los términos y condiciones.',
      });
       return;
     }

    // Variable para almacenar el correo de la empresa
    const correoEmpresa = "freshsmilecmills@gmail.com";

    // Crea un objeto con los valores del formulario
    const formData = {
      from_email: correo, // Correo del remitente obtenido del formulario
      to_email: correoEmpresa, // Correo de la empresa (remitente en el correo)
      from_telefono: telefono,
      from_name: nombre,
      message: motivo, // Mensaje obtenido del formulario
    };

    // Ahora puedes utilizar el objeto 'formData' en tu código para enviar el correo electrónico utilizando EmailJS
    emailjs
      .send(
        "service_s74e77b",
        "template_cd9lwaf",
        formData,
        "Zll8cDWW_JZg7WZMt"
      )
      .then((response) => {
        console.log(
          "Correo electrónico enviado:",
          response.status,
          response.text
        );
        // Aquí puedes realizar cualquier acción adicional después de enviar el correo
      })
      .catch((error) => {
        console.error("Error al enviar el correo electrónico:", error);
        // Manejo de errores
      });

    const formDataUser = {
      to_email: correo, // Correo de destino
      from_name: nombre, // Nombre del remitente obtenido del formulario
      from_email: correo, // Correo del remitente obtenido del formulario
    };

    emailjs
      .send(
        "service_6s4b2r3",
        "template_h2omu0a",
        formDataUser,
        "Zll8cDWW_JZg7WZMt"
      )
      .then((response) => {
        console.log(
          "Correo electrónico enviado:",
          response.status,
          response.text
        );
        // Aquí puedes realizar cualquier acción adicional después de enviar el correo
      })
      .catch((error) => {
        console.error("Error al enviar el correo electrónico:", error);
        // Manejo de errores
      });

    // Limpia los campos del formulario
    setNombre("");
    setTelefono("");
    setCorreo("");
    setMotivo("");
    setIsChecked(false); // Restablecer el estado de isChecked a false
  };

  return (
    <section className="contact">
      <div className="container-contacto">
        <div className="contactInfo">
          <div className="content">
            <h2>Contáctanos</h2>
            <p>
              Te brindamos nuestros servicios. Ponte en contacto con nosotros
              para obtener una sonrisa más saludable y hermosa.
            </p>
          </div>
          <div className="box">
            <div className="icon">
              <img
                src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852208/Fresh_Smile_Cmills/icono-direcci%C3%B3n_h51k4v.png"
                alt=""
              />
            </div>
            <div className="text">
              <h3>Dirección</h3>
              <p>
                Sede Norte calle 6 N #16A-54
                <br />
                Edificio torre Valparaiso. Local 2 profesionales.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <img
                src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852209/Fresh_Smile_Cmills/icono-llamada_dch8ue.png"
                alt=""
              />
            </div>
            <div className="text">
              <h3>Teléfono</h3>
              <p>3103594986</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <img
                src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852208/Fresh_Smile_Cmills/icono-email_wqz4wa.png"
                alt=""
              />
            </div>
            <div className="text">
              <h3>Correo electrónico</h3>
              <p>freshsmilecmills@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form>
            <div className="inputBox">
              <input
                type="text"
                name="nombre"
                value={nombre}
                onChange={handleNombreChange}
                required
              />
              <span>Nombre completo</span>
            </div>
            <div className="inputBox">
              <input
                type="text"
                value={telefono}
                onChange={handleTelefonoChange}
                required
              />
              <span>Teléfono</span>
            </div>
            <div className="inputBox">
              <input
                type="text"
                name="correo"
                value={correo}
                onChange={handleCorreoChange}
                onClick={handleSubmit}
                required
              />
              <span>Correo electrónico</span>
            </div>
            <div className="inputBox">
              <textarea
                value={motivo}
                onChange={handleMotivoChange}
                required
              ></textarea>
              <span>Motivo del mensaje</span>
            </div>

            <div class="inputBox-post">
              <input
                type="checkbox"
                value={checkbox}
                id="terms"
                required
                onChange={handleCheckboxChange}
              />
              <label for="terms">Acepto los términos y condiciones</label>
            </div>
            {isModalOpen && (
              <div class="modal">
                <div class="modal-content">
                  <span class="close" onClick={closeModal}>
                    &times;
                  </span>
                  <h2>Aceptación de términos y condiciones</h2>
                  <p>
                    Al utilizar nuestros servicios de contacto, usted acepta y
                    se compromete a cumplir con los siguientes términos y
                    condiciones.
                  </p>
                  <p>
                    1. Respuesta y disponibilidad
                    <br />
                    Haremos todo lo posible para responder a su consulta o
                    solicitud de manera oportuna. Sin embargo, no podemos
                    garantizar tiempos de respuesta específicos debido a la
                    posible variabilidad en la carga de trabajo y disponibilidad
                    de nuestro personal.
                  </p>
                  <p>
                    2. Consulta no médica
                    <br />
                    Tenga en cuenta que cualquier información proporcionada
                    durante el proceso de contacto no constituye asesoramiento
                    médico o dental. Para obtener un diagnóstico o tratamiento
                    preciso, le recomendamos que programe una cita con uno de
                    nuestros profesionales de la salud dental.
                  </p>
                  <p>
                    3. Responsabilidad
                    <br />
                    Nos esforzamos por brindarle información precisa y
                    confiable. Sin embargo, no nos hacemos responsables de
                    ninguna pérdida o daño que pueda surgir como resultado del
                    uso de la información proporcionada durante el proceso de
                    contacto.
                  </p>
                </div>
              </div>
            )}
            <div className="inputBox1">
              <input
                type="submit"
                className="selectbtn"
                value="Enviar"
                onClick={handleSubmit}
              />
            </div>
            <div className="inputBox2">
              <input
                type="submit"
                className="selectbtn"
                onClick={handleother}
                value="Contactarme directamente"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
