import React from "react";
import './procedimientos.css'
import { Footer } from "../../layouts/footer/Footer";
import { Link } from "react-router-dom";


export const Procedimientos = () => {
  return (
    <>
      <div className="container_proce">
        <div className="container_home1A">
          <h1>CONOCE UN POCO SOBRE NUESTROS PROCEDIMIENTOS</h1>
        </div>
      </div>
      <div className="barra-procedimientos">
        <h2>Te brindaremos lo mejor para tu salud</h2>
      </div>
      {/* Chat WhatsAPP */}
      <div class="space-wpp">
        <a href="https://api.whatsapp.com/send?phone=3204415807&text=Hola, me gustaría saber mas información." class="float" target="_blank ">
          <i class="fa fa-whatsapp my-float"></i>
        </a>
      </div>
      
      <div className="contenedor-procedimientos">
        <div className="card-procedimientos">
          <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852202/Fresh_Smile_Cmills/carillas_hbazmk.jpg" alt="Imagen de la tarjeta" />
          <div className="contenido-procedimientos">
            <h2>Blanqueamiento Dental</h2>
            <p className="p-contenido-procedimientos">Es un procedimiento estético que busca aclarar el color de los dientes y eliminar las manchas y decoloraciones. Se puede realizar en el consultorio del dentista o mediante el uso de kits de blanqueamiento dental en el hogar bajo la supervisión del dentista.
              </p>
          </div>
        </div>

        <div className="card-procedimientos">
          <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852210/Fresh_Smile_Cmills/implantes_keq38a.jpg" alt="Imagen de la tarjeta" />
          <div className="contenido-procedimientos">
            <h2>Implantes Dentales</h2>
            <p className="p-contenido-procedimientos">Son dispositivos utilizados para reemplazar las raíces de los dientes perdidos. Los implantes dentales se colocan en el hueso maxilar o mandibular y luego se colocan coronas dentales artificiales sobre ellos para restaurar la función y la apariencia de los dientes perdidos.
              </p>
          </div>
        </div>

        <div className="card-procedimientos">
          <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852210/Fresh_Smile_Cmills/implantesss_deur5s.jpg" alt="Imagen de la tarjeta" />
          <div className="contenido-procedimientos">
            <h2>Prótesis Dental</h2>
            <p className="p-contenido-procedimientos">Las prótesis dentales son reemplazos artificiales de uno o varios dientes perdidos. Pueden ser parciales o completas, removibles o fijas. Incluyen opciones como puentes y dentaduras postizas, así como implantes dentales.
              </p>
          </div>
        </div>

        <div className="card-procedimientos">
          <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852212/Fresh_Smile_Cmills/cards1_s5fs46.jpg" alt="Imagen de la tarjeta" />
          <div className="contenido-procedimientos">
            <h2>Cirugía Oral</h2>
            <p className="p-contenido-procedimientos">La cirugía oral incluye una variedad de procedimientos quirúrgicos en la boca y los maxilares. Puede involucrar extracciones complejas, colocación de implantes dentales, cirugía de mandíbula y corrección de deformidades faciales.
             </p>
          </div>
        </div>

        <div className="card-procedimientos">
          <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1684268627/Fresh_Smile_Cmills/jonathan-borba-v_2FRXEba94-unsplash_cth93o.jpg" alt="Imagen de la tarjeta" />
          <div className="contenido-procedimientos">
            <h2>Extracción de Muelas del Juicio</h2>
            <p className="p-contenido-procedimientos">La extracción de las muelas del juicio es un procedimiento común para eliminar las muelas que no tienen suficiente espacio para emerger o están causando problemas como dolor, infecciones o daños a los dientes adyacentes. Se realiza bajo anestesia local.
             </p>
          </div>
        </div>
        
        <div className="card-procedimientos">
          <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1684269551/Fresh_Smile_Cmills/caroline-lm-8BkF0sTC6Uo-unsplash_efkumb.jpg" alt="Imagen de la tarjeta" />
          <div className="contenido-procedimientos">
            <h2>Limpieza Dental Profunda</h2>
            <p className="p-contenido-procedimientos">La limpieza dental profunda, también conocida como raspado y alisado radicular, es un procedimiento para eliminar la placa bacteriana, el sarro y las toxinas de las superficies de los dientes y las raíces. Ayuda a prevenir la enfermedad periodontal y mantener las encías saludables.
              </p>
          </div>
        </div>

        <div className="card-procedimientos">
          <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1684268377/Fresh_Smile_Cmills/jonathan-borba-W9YEY6G8LVM-unsplash_qpfaed.jpg" alt="Imagen de la tarjeta" />
          <div className="contenido-procedimientos">
            <h2>Coronas Dentales</h2>
            <p className="p-contenido-procedimientos">Las coronas dentales son fundas que se colocan sobre dientes dañados, debilitados o restaurados. Proporcionan protección y mejoran la apariencia de los dientes. Las coronas pueden ser de metal, porcelana, porcelana fusionada a metal o materiales cerámicos de alta resistencia.
              </p>
          </div>
        </div>

        <div className="card-procedimientos">
          <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1684268332/Fresh_Smile_Cmills/enis-yavuz-4u2fG9mqGvQ-unsplash_saf7yd.jpg" alt="Imagen de la tarjeta" />
          <div className="contenido-procedimientos">
            <h2>Ortodoncia</h2>
            <p className="p-contenido-procedimientos">Tratamiento utilizado para corregir la posición de los dientes y la mandíbula, mejorando la estética y la función de la dentadura. Puede incluir el uso de brackets, alineadores transparentes u otros dispositivos para alinear los dientes correctamente. </p>
          </div>
        </div>

        <div className="card-procedimientos">
          <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852203/Fresh_Smile_Cmills/endodoncia_n1qzcw.png" alt="Imagen de la tarjeta" />
          <div className="contenido-procedimientos">
            <h2>Endodoncia</h2>
            <p className="p-contenido-procedimientos">La endodoncia, o tratamiento de conducto, es un procedimiento para tratar y salvar dientes con pulpa dental dañada o infectada. Consiste en eliminar el tejido pulpar afectado, limpiar los conductos radiculares y sellarlos para prevenir futuras infecciones.
              </p>
          </div>
        </div>

       
        
      </div>
      <Footer />
    </>
  );
}