import React from 'react';
import './Contacto.css'


const Contacto = () => {
    return (
    <>
     <section className="contact">
      <div className="content">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nihil
          odit adipisci illo inventore eum, corrupti commodi delectus.
        </p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>
                1234 Pachora Road,
                <br />
                Pune,India,
                <br />
                14568
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa fa-phone" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>12345678</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>abc@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" required="required" />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" required="required" />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea name="" id="" required="required"></textarea>
              <span>Type your Message...</span>
            </div>
            <div className="inputBox">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </section>
      </>
       );
};

export default Contacto;