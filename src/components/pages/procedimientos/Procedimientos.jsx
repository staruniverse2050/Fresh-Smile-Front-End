import React from "react";
import './procedimientos.css'
import { Footer } from "../../layouts/footer/Footer";
import { Link } from "react-router-dom";


export const Procedimientos = () => {
    return (
        <>
            <div className="container_proce">
                <div className="container_home1A">
                    <h1>NUESTROS PROCEDIMIENTOS</h1>
                </div>
            </div>
            <div className="barra-procedimientos">
                <h2>Te brindaremos lo mejor para tu salud</h2>
            </div>
            <div className="container-procedimientos">



                {/* Chat WhatsAPP */}
                <div class="space-wpp">
                    <a href="https://api.whatsapp.com/send?phone=3204415807&text=Hola, me gustaría saber mas información." class="float" target="_blank ">
                        <i class="fa fa-whatsapp my-float"></i>
                    </a>
                </div>


                <div className="container-wrapper">
  <div className="container-blog">
    <img
      src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685125232/blanqueamiento-dental_k79oav.png"
      alt=""
    />
    <div className="content">
      <h2>Blanqueamiento dental</h2>
      <p className="p-blog">
        Es un procedimiento estético que busca aclarar el color de los dientes y eliminar las manchas y decoloraciones. Se puede realizar en el consultorio del dentista o mediante el uso de kits de blanqueamiento dental en el hogar bajo la supervisión del dentista.
      </p>
    </div>
  </div>
  <div className="container-blog">
    <img
      src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685125289/implante_m34lfe.png"
      alt=""
    />
    <div className="content">
      <h2>Implantes dentales</h2>
      <p className="p-blog">
        Son dispositivos utilizados para reemplazar las raíces de los dientes perdidos. Los implantes dentales se colocan en el hueso maxilar o mandibular y luego se colocan coronas dentales artificiales sobre ellos para restaurar la función y la apariencia de los dientes perdidos.
      </p>
    </div>
  </div>
  <div className="container-blog">
    <img
      src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685126311/diente_iowcnf.png"
      alt=""
    />
    <div className="content">
      <h2>Prótesis dental</h2>
      <p className="p-blog">
        Las prótesis dentales son reemplazos artificiales de uno o varios dientes perdidos. Pueden ser parciales o completas, removibles o fijas. Incluyen opciones como puentes y dentaduras postizas, así como implantes dentales.
      </p>
    </div>
  </div>
  <div className="container-blog">
    <img
      src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685126397/medico_meiagz.png"
      alt=""
    />
    <div className="content">
      <h2>Cirugía oral</h2>
      <p className="p-blog">
        La cirugía oral incluye una variedad de procedimientos quirúrgicos en la boca y los maxilares. Puede involucrar extracciones complejas, colocación de implantes dentales, cirugía de mandíbula y corrección de deformidades faciales.
      </p>
    </div>
  </div>
  <div className="container-blog">
    <img
      src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685127203/muela-del-juicio_gepql6.png"
      alt=""
    />
    <div className="content">
      <h2>Extracción de muelas del juicio</h2>
      <p className="p-blog">
        La extracción de las muelas del juicio es un procedimiento común para eliminar las muelas que no tienen suficiente espacio para emerger o están causando problemas como dolor, infecciones o daños a los dientes adyacentes. Se realiza bajo anestesia local.
      </p>
    </div>
  </div>
  <div className="container-blog">
    <img
      src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685127204/limpieza-dental_yooh5t.png"
      alt=""
    />
    <div className="content">
      <h2>Limpieza dental profunda</h2>
      <p className="p-blog">
        La limpieza dental profunda, también conocida como raspado y alisado radicular, es un procedimiento para eliminar la placa bacteriana, el sarro y las toxinas de las superficies de los dientes y las raíces. Ayuda a prevenir la enfermedad periodontal y mantener las encías saludables.
      </p>
    </div>
  </div>
  <div className="container-blog">
    <img
      src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685127203/corona-dental_j2kdj1.png"
      alt=""
    />
    <div className="content">
      <h2>Coronas dentales</h2>
      <p className="p-blog">
        Las coronas dentales son fundas que se colocan sobre dientes dañados, debilitados o restaurados. Proporcionan protección y mejoran la apariencia de los dientes. Las coronas pueden ser de metal, porcelana, porcelana fusionada a metal o materiales cerámicos de alta resistencia.
      </p>
    </div>
  </div>
  <div className="container-blog">
    <img
      src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685124831/ortodoncista_tlq9k3.png"
      alt=""
    />
    <div className="content">
      <h2>Ortodoncia</h2>
      <p className="p-blog">
      Tratamiento utilizado para corregir la posición de los dientes y la mandíbula, mejorando la estética y la función de la dentadura. Puede incluir el uso de brackets, alineadores transparentes u otros dispositivos para alinear los dientes correctamente.      </p>
      {/* <button className="btn-blog">
        <Link to="/Blog">
          <a className="linksblog" href="#blog">
            Leer más
          </a>
        </Link>
      </button> */}
    </div>
  </div>
  <div className="container-blog">
    <img
      src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685125116/cepillo-de-dientes_1_d1q7ii.png"
      alt=""
    />
    <div className="content">
      <h2>Limpieza dental</h2>
      <p className="p-blog">
        También conocida como profilaxis dental, es un procedimiento en el que se eliminan la placa y el sarro de los dientes para prevenir enfermedades dentales y mantener una buena salud bucal.
      </p>
      {/* <button className="btn-blog">
        <Link to="/Blog">
          <a className="linksblog" href="#blog">
            Leer más
          </a>
        </Link>
      </button> */}
    </div>
  </div>
  <div className="container-blog">
    <img
      src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685125346/endodoncia_n5itxb.png"
      alt=""
    />
    <div className="content">
      <h2>Endodoncia</h2>
      <p className="p-blog">
      La endodoncia, o tratamiento de conducto, es un procedimiento para tratar y salvar dientes con pulpa dental dañada o infectada. Consiste en eliminar el tejido pulpar afectado, limpiar los conductos radiculares y sellarlos para prevenir futuras infecciones.
      </p>
      {/* <button className="btn-blog">
        <Link to="/Blog">
          <a className="linksblog" href="#blog">
            Leer más
          </a>
        </Link>
      </button> */}
    </div>
  </div>
  <div className="container-blog" id="extraccion-dental">
  <img
    src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685125180/extraccion_jn5wxt.png"
    alt="extraccion-dental"
  />
  <div className="content">
    <h2>Extracción dental</h2>
    <p className="p-blog">
      Consiste en la remoción de un diente dañado, infectado o afectado por una enfermedad periodontal. Las extracciones dentales también se realizan en casos de dientes de sabiduría impactados o cuando hay una superpoblación dental en la boca.
    </p>
  </div>
</div>

  <div className="container-blog">
    <img
      src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1685127846/sonrisa_naagzz.png"
      alt=""
    />
    <div className="content">
      <h2>Diseño de sonrisa</h2>
      <p className="p-blog">
      El diseño de sonrisa es un procedimiento estético que busca mejorar la apariencia de la sonrisa y los dientes. Consiste en un análisis detallado de la forma, el color, el tamaño y la posición de los dientes, así como de la armonía facial en general. Con el diseño de sonrisa, se pueden corregir problemas estéticos como dientes desalineados, manchas, fracturas o desgaste dental.

      </p>
      {/* <button className="btn-blog">
        <Link to="/Blog">
          <a className="linksblog" href="#blog">
            Leer más
          </a>
        </Link>
      </button> */}
    </div>
  </div>
</div>
</div>
            <Footer />
        </>
    );
};
