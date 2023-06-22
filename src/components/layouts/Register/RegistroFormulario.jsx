import React, { useState, useEffect } from 'react';
import Swal from "sweetalert2";
import { Modal } from "react-bootstrap";
import axios from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const RegistroFormulario = () => {
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [nombrescompletos, setNombrescompletos] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [rol, setRol] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [codigo, setCodigo] = useState("");
  const [procedimientos, setProcedimientos] = useState([]);
  const [especialidad, setEspecialidad] = useState("");

  const handleTipoDocumentoChange = (event) => {
    setTipoDocumento(event.target.value);
  };

  const handleNumeroDocumentoChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setNumeroDocumento(value);
    }
  };

  useEffect(() => {
    // Realizar la solicitud HTTP para obtener los procedimientos
    axios.get('https://freshsmile.azurewebsites.net/FreshSmile/ConsultarProcedimientos')
      .then(response => {
        // Guardar los procedimientos en el estado
        setProcedimientos(response.data);
      })
      .catch(error => {
        // Manejar el error en caso de que la solicitud falle
        console.error('Error al obtener los procedimientos:', error);
      });
  }, []);
  
  const handleNombresChange = (event) => {
    const value = event.target.value;
    if (/^[a-zA-ZñÑ\s]*$/.test(value)) {
      setNombrescompletos(value);
    }
  };
  

  const handleDireccionChange = (event) => {
    setDireccion(event.target.value);
  };

  const handleTelefonoChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setTelefono(value);
    }
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleContraseñaChange = (event) => {
    const contraseña = event.target.value;
  
    if (contraseña.length === 10 && /[\W_]/.test(contraseña)) {
      setContraseña(contraseña);
    } else {
      Swal.fire({
        icon: "error",
        title: "Contraseña inválida",
        text: "La contraseña debe tener exactamente 10 caracteres y contener al menos un caracter especial.",
      });
    }
  };
  
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCodigo("");
  };

  const handleCodigoChange = (event) => {
    setCodigo(event.target.value);
  };

  const handleEspecialidadChange = (event) => {
    setEspecialidad(event.target.value);
  };

  const handleRolChange = (event) => {
    setRol(event.target.value);
    if (event.target.value === "Especialista") {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };
  const handlePasswordClick = () => {
    Swal.fire({
      icon: "info",
      title: "Recordatorio",
      text: "La contraseña debe tener 8 caracteres.",
      customClass: {
        confirmButton: "custom-swal-button",
      },
      buttonsStyling: false,
    });
  };

  const opcionesTipoDocumento = [
    { value: "Cédula de ciudadanía", label: "Cédula de ciudadanía" },
    { value: "Tarjeta de identidad", label: "Tarjeta de identidad" },
    { value: "Cédula de extranjería", label: "Cédula de extranjería" },
    // Add more options as needed
  ];

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/Login");
  };

  const validarCodigo = async () => {
    try {
      const response = await axios.get(
        "https://freshsmile.azurewebsites.net/FreshSmile/ConsultarCodigo"
      );

      const codigos = response.data; // Arreglo de objetos de códigos
      const codigoValido = codigos.some((obj) => obj.codigo === codigo);

      return codigoValido;
    } catch (error) {
      console.error("Error al validar el código:", error);
      // Manejar el error de alguna manera, por ejemplo, mostrar un mensaje al usuario
      throw error; // Opcionalmente, puedes lanzar el error para que se maneje en otro lugar
    }
  };

  const validarCorreo = async (correo, rol) => {
    let apiEndpoint = "";

    if (rol === "Especialista") {
      apiEndpoint =
        "https://freshsmile.azurewebsites.net/FreshSmile/Especialistas/ConsultarEspecialista";
    } else if (rol === "Paciente") {
      apiEndpoint =
        "https://freshsmile.azurewebsites.net/FreshSmile/ConsultarPacientes";
    }

    try {
      const response = await axios.get(apiEndpoint);
      const usuarios = response.data;
      const correoRegistrado = usuarios.some(
        (usuario) => usuario.correo === correo
      );
      return correoRegistrado;
    } catch (error) {
      console.error("Error al validar el correo:", error);
      throw error;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      Swal.fire({
        icon: "error",
        title: "Correo electrónico inválido",
        text: "La dirección de correo electrónico no es válida.",
        customClass: {
          confirmButton: "custom-swal-button",
        },
      });
      return;
    }

    let apiEndpoint = "";
    let datosFormulario = {};

    if (rol === "Especialista") {
      const codigoValido = await validarCodigo();

      if (!codigoValido) {
        Swal.fire({
          icon: "error",
          title: "Código inválido",
          text: "El código ingresado no es válido.",
        });
        return;
      }

      apiEndpoint =
        "https://freshsmile.azurewebsites.net/FreshSmile/Especialistas/CrearEspecialista";
      datosFormulario = {
        identificacion_especialista: numeroDocumento,
        tipo_documento: tipoDocumento,
        nombre_completo: nombrescompletos,
        telefono: telefono,
        direccion: direccion,
        especialidad: especialidad,
        correo: correo,
        contraseña: contraseña,
      };
    } else if (rol === "Paciente") {
      apiEndpoint =
        "https://freshsmile.azurewebsites.net/FreshSmile/CrearPacientes";
      datosFormulario = {
        identificacion_paciente: numeroDocumento,
        tipo_documento: tipoDocumento,
        nombre_completo: nombrescompletos,
        direccion: direccion,
        telefono: telefono,
        correo: correo,
        contraseña: contraseña,
      };
    }

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosFormulario),
      });
  
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Registro exitoso",
          text: "¡Se ha registrado correctamente!",
        }).then(() => {
          // Resetear los valores de los campos
          setTipoDocumento("");
          setNumeroDocumento("");
          setNombrescompletos("");
          setDireccion("");
          setTelefono("");
          setEspecialidad("");
          setCorreo("");
          setContraseña("");
          setRol("");
          setCodigo("");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error en el registro",
          text: "Ha ocurrido un error durante el registro. Por favor, inténtalo de nuevo.",
          customClass: {
            confirmButton: "custom-swal-button",
          },
          buttonsStyling: false,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error en el registro",
        text: "Ha ocurrido un error durante el registro. Por favor, inténtalo de nuevo.",
        customClass: {
          confirmButton: "custom-swal-button",
        },
        buttonsStyling: false,
      });
      console.error(error);
    }
  };

  return (
    <div className="Registro">
      <div className="left-side">
        {/* <img className="img-left-side" src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852201/Fresh_Smile_Cmills/equipo_ychejy.png" alt="" /> */}
        <h1 className="title-left"></h1>
      </div>
      <div className="right-side">
        <h1>Registro</h1>
        <form className="form-input-container" onSubmit={handleSubmit}>
          <div className="form-group">
            {/* <h1 className="registro-h1">Registro</h1> */}
            <label htmlFor="tipoDocumento">Tipo de documento</label>
            <select
              id="tipoDocumento"
              className="form-input-select"
              value={tipoDocumento}
              onChange={handleTipoDocumentoChange}
            >
              <option value="">Seleccione un tipo de documento</option>
              {opcionesTipoDocumento.map((opcion) => (
                <option key={opcion.value} value={opcion.value}>
                  {opcion.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="numeroDocumento">Número de documento</label>
            <input
              type="text"
              id="numeroDocumento"
              value={numeroDocumento}
              onChange={handleNumeroDocumentoChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="nombrescompletos">Nombre completo</label>
            <input
              type="text"
              id="nombrescompletos"
              value={nombrescompletos}
              onChange={handleNombresChange}
              required
            />
          </div>
          {rol === "Especialista" && (
            <div className="form-group">
              <label>Especialidad</label>
              <select
                className="form-control"
                value={especialidad}
                onChange={handleEspecialidadChange}
              >
                <option value="">Seleccionar especialidad</option>
                {procedimientos.map(procedimiento => (
                  <option key={procedimiento.id} value={procedimiento.nombre}>
                    {procedimiento.nombre}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="form-group">
            <label htmlFor="direccion">Dirección</label>
            <input
              type="text"
              id="direccion"
              value={direccion}
              onChange={handleDireccionChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="text"
              id="telefono"
              value={telefono}
              onChange={handleTelefonoChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="correo">Correo electrónico</label>
            <input
              type="email"
              id="correo"
              value={correo}
              onChange={handleCorreoChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contraseña">Contraseña</label>
            <input
              type="password"
              id="contraseña"
              value={contraseña}
              onChange={handleContraseñaChange}
              onClick={handlePasswordClick}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="rol">Rol</label>
            <select
              id="rol"
              value={rol}
              onChange={handleRolChange}
              className="form-input-select"
            >
              <option value="">Seleccione un rol</option>
              <option value="Especialista">Especialista</option>
              <option value="Paciente">Paciente</option>
            </select>
          </div>
          <button
            className="BotonRegistro"
            type="submit"
            onClick={handleOpenModal}
          >
            Registrar
          </button>
  
          <div className="login-link">
            <p>¿Ya tienes una cuenta?</p>
            <button className="btn btn-link" onClick={handleLoginClick}>
              Iniciar sesión
            </button>
          </div>
        </form>
        {rol === "Especialista" && (
          <Modal
            show={showModal}
            onHide={handleCloseModal}
            backdrop="static"
            keyboard={false}
            className="custom-modal" // Aplica una clase CSS personalizada a la ventana modal
          >
            <Modal.Header>
              <Modal.Title className="ModalTitle">Ingresar código</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                className="InputCodigo"
                type="text"
                value={codigo}
                onChange={handleCodigoChange}
                placeholder="Ingrese el código"
              />
            </Modal.Body>
            <Modal.Footer>
              <button className="BotonModalCancelar" onClick={handleCloseModal}>
                Cancelar
              </button>
              <button className="BotonModalGuardar" onClick={handleSubmit}>
                Guardar
              </button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  );
        }

export default RegistroFormulario;