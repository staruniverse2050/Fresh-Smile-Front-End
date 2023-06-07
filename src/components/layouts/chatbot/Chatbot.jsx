import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isChatOpen, setChatOpen] = useState(false);

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Lógica para buscar y mostrar la respuesta según el número de pregunta
    switch (question) {
      case "1":
        setAnswer(
          "Los horarios de atención de la clínica dental pueden variar. Te recomendamos comunicarte con nuestra clínica para obtener información específica sobre los horarios de atención."
        );
        break;
      case "2":
        setAnswer(
          "El tiempo de espera para obtener una cita puede depender de la disponibilidad y la demanda. Te recomendamos contactar a nuestra clínica lo antes posible para programar una cita."
        );
        break;
      case "3":
        setAnswer(
          "Para programar una cita dental, generalmente se requiere proporcionar tu nombre completo, número de teléfono, dirección de correo electrónico y cualquier información relevante sobre tu historial dental. Es posible que también se te solicite información sobre tu seguro dental, si corresponde."
        );
        break;
      case "4":
        setAnswer(
          "La duración de una consulta dental puede variar dependiendo del tipo de tratamiento y de tus necesidades específicas. En promedio, una consulta dental puede durar entre 30 minutos y una hora."
        );
        break;
      case "5":
        setAnswer(
          "El tiempo de espera promedio en la sala de espera puede variar. Nuestro objetivo es brindarte un servicio eficiente y minimizar los tiempos de espera. Sin embargo, en ocasiones puede haber retrasos debido a la atención de casos imprevistos o situaciones de emergencia."
        );
        break;
      case "6":
        setAnswer(
          "Sí, puedes cancelar o reprogramar una cita dental. Te recomendamos contactar a nuestra clínica con anticipación para informar sobre cualquier cambio en tu cita programada."
        );
        break;
      case "7":
        setAnswer(
          "Nuestra clínica dental tiene una política para casos de llegadas tardías a una cita. Te recomendamos comunicarte con nosotros para obtener información detallada sobre nuestra política y las opciones disponibles en caso de retraso."
        );
        break;
      case "8":
        setAnswer(
          "En nuestra clínica dental, ofrecemos una amplia gama de servicios de odontología, que incluyen limpiezas dentales, tratamientos de conducto, extracciones dentales, restauraciones dentales, ortodoncia, implantes dentales y más. Te invitamos a comunicarte con nosotros para obtener información más específica sobre los servicios que brindamos."
        );
        break;
      case "9":
        setAnswer(
          "Aceptamos seguro dental en nuestra clínica. Los planes de seguro aceptados pueden variar, por lo que te recomendamos proporcionarnos los detalles de tu seguro dental al programar la cita para verificar la cobertura."
        );
        break;
      case "10":
        setAnswer(
          "En nuestra clínica dental, seguimos protocolos y medidas de seguridad estrictas para proteger la salud de nuestros pacientes y el personal. Esto incluye el uso de equipos de protección personal, esterilización adecuada de instrumentos y superficies, y cumplimiento de pautas de higiene y prevención de infecciones. Tu seguridad es nuestra prioridad."
        );
        break;
      default:
        setAnswer("No se encontró una respuesta para esa pregunta.");
        break;
    }
  };

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  return (
    <div className="chatbot-container">
      <img
        src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685387974/chat_tiohnk.png"
        alt="Chatbot"
        onClick={toggleChat}
        className="imagen"
      />
      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            Fresh Smile Cmills
            <button className="close-button" onClick={toggleChat}>
              &#10006;
            </button>
          </div>
          <div className="chat-body">
            <div className="chatbot-questions">
            <p>Bienvenido ¿que pregunta tienes?</p>
              <ul className="chatbotpreguntas">
                <li>
                  1. ¿Cuáles son los horarios de atención de la clínica dental?
                </li>
                <li>
                  2. ¿Cuánto tiempo debo esperar para obtener una cita dental?
                </li>
                <li>
                  3. ¿Qué información se requiere para programar una cita dental?
                </li>
                <li>
                  4. ¿Cuánto tiempo dura una consulta dental en promedio?
                </li>
                <li>
                  5. ¿Cuál es el tiempo de espera promedio en la sala de espera?
                </li>
                <li>
                  6. ¿Puedo cancelar o reprogramar una cita dental?
                </li>
                <li>
                  7. ¿Cuál es la política en caso de llegar tarde a una cita dental?
                </li>
                <li>
                  8. ¿Qué servicios de odontología ofrecen en la clínica?
                </li>
                <li>
                  9. ¿Aceptan seguro dental en la clínica?
                </li>
                <li>
                  10. ¿Cuáles son las medidas de seguridad en la clínica dental?
                </li>
              </ul>
            </div>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                value={question}
                onChange={handleInputChange}
              />
              <button type="submit">Enviar</button>
            </form>
            <div className="chatbot-response">{answer}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;