import React from "react";
import responseObj from './response';
import './Chatbot.css';

const Chatbot = () => {
  const chatBodyRef = React.useRef(null);
  const txtInputRef = React.useRef(null);

  const renderUserMessage = () => {
    const userInput = txtInputRef.current.value;
    renderMessageEle(userInput, "user");
    txtInputRef.current.value = "";
    setTimeout(() => {
      renderChatbotResponse(userInput);
      setScrollPosition();
    }, 600);
  };

  const renderChatbotResponse = (userInput) => {
    const res = getChatbotResponse(userInput);
    renderMessageEle(res);
  };

  const renderMessageEle = (txt, type) => {
    let className = "user-message";
    if (type !== "user") {
      className = "chatbot-message";
    }
    const messageEle = document.createElement("div");
    const txtNode = document.createTextNode(txt);
    messageEle.classList.add(className);
    messageEle.appendChild(txtNode);
    chatBodyRef.current.appendChild(messageEle);
  };

  const getChatbotResponse = (userInput) => {
    return responseObj[userInput] === undefined
      ? "Please try something else"
      : responseObj[userInput];
  };

  const setScrollPosition = () => {
    if (chatBodyRef.current.scrollHeight > 0) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  };

  return (
    <div>
      <div className="boton-imagen" id="botonImagen"></div>
      <div className="chatbot-container" id="chatbotContainer">
        <div className="cerrar" id="cerrarChatbot">
          <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685387974/cerrar_eivqye.png" alt="cerrar" />
        </div>

        <div className="chatbot-header">
          <div className="logo">
            <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685387974/logo_sl6fx8.png" alt="cwt" />
          </div>
          <div className="title">
            <span>C</span>hat <span>F</span>resh <span>S</span>miles
          </div>
        </div>
        <div className="chatbot-body" ref={chatBodyRef}>
          <div className="chatbot-message">
            <p>1: {responseObj[1]}</p>
            <p>2: {responseObj[2]}</p>
            <p>3: {responseObj[3]}</p>
            <p>4: {responseObj[4]}</p>
            <p>5: {responseObj[5]}</p>
            <p>6: {responseObj[6]}</p>
            <p>7: {responseObj[7]}</p>
            <p>8: {responseObj[8]}</p>
            <p>9: {responseObj[9]}</p>
            <p>10: {responseObj[10]}</p>
          </div>
        </div>
        <div className="chatbot-input">
          <div className="input-sec">
            <input
              type="text"
              id="txtinput"
              placeholder="Escribe un mensaje..."
              autoFocus
              ref={txtInputRef}
            />
          </div>
          <div className="send" onClick={renderUserMessage}>
            <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685387974/enviar_qhxnhj.png" alt="send" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
