import React from "react";
import './procedimientos.css'
 import { Footer } from "../../layouts/footer/Footer";
import { Link } from "react-router-dom";





export const Procedimientos = () => {
    return (
        <>
            <div className="barra5">
                <h2>Nuestros Procedimientos</h2>
            </div>
            <div className="container-procedimientos">

                <div class="card">
                    <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1684268332/Fresh_Smile_Cmills/enis-yavuz-4u2fG9mqGvQ-unsplash_saf7yd.jpg" alt="Imagen de la tarjeta" class="card-image" />
                    <div class="card-content">
                        <h3 class="card-title">Blanqueamiento Dental</h3>
                        <p class="card-description">
                            El blanqueamiento dental es un procedimiento de odontología estética que busca aclarar el color de los dientes para obtener una sonrisa más blanca y brillante. </p>
                    </div>
                </div>

                <div class="card">
                    <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1684268611/Fresh_Smile_Cmills/enis-yavuz-iGf7CfWgjTI-unsplash_zktstf.jpg" alt="Imagen de la tarjeta" class="card-image" />
                    <div class="card-content">
                        <h3 class="card-title">Brackets</h3>
                        <p class="card-description">El tratamiento de brackets es un procedimiento ortodóntico utilizado para corregir la alineación y posición de los dientes. </p>
                    </div>
                </div>

                <div class="card">
                    <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1684268627/Fresh_Smile_Cmills/jonathan-borba-v_2FRXEba94-unsplash_cth93o.jpg" alt="Imagen de la tarjeta" class="card-image" />
                    <div class="card-content">
                        <h3 class="card-title">Extracción de Cordales</h3>
                        <p class="card-description">La extracción de las cordales es un procedimiento común y seguro, y suele ser necesario cuando las muelas del juicio causan dolor o pueden afectar la salud bucal en general </p>
                    </div>
                </div>
            </div>


            <div className="container-procedimientos">

                <div class="card">
                    <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852212/Fresh_Smile_Cmills/cards1_s5fs46.jpg" alt="Imagen de la tarjeta" class="card-image" />
                    <div class="card-content">
                        <h3 class="card-title">Diseño de Sonrisa</h3>
                        <p class="card-description">
                            El diseño de sonrisa es un proceso estético y personalizado en odontología que busca mejorar la apariencia de la sonrisa de una persona. </p>
                    </div>
                </div>

                <div class="card">
                    <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1684269175/Fresh_Smile_Cmills/umanoide-KeVKEs1_RDU-unsplash_lh8obx.jpg" alt="Imagen de la tarjeta" class="card-image" />
                    <div class="card-content">
                        <h3 class="card-title">Fractura Dental</h3>
                        <p class="card-description">El tratamiento de fractura dental en odontología es un procedimiento que se realiza para reparar un diente dañado debido a una fractura o una fisura. </p>
                    </div>
                </div>

                <div class="card">
                    <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1684270420/Fresh_Smile_Cmills/peter-kasprzyk-U1gvhqVQ2kQ-unsplash_db0rfk.jpg" alt="Imagen de la tarjeta" class="card-image" />
                    <div class="card-content">
                        <h3 class="card-title">Implantes Dentales</h3>
                        <p class="card-description">El tratamiento de implantes dentales es un procedimiento odontológico utilizado para reemplazar dientes perdidos o extraídos. </p>
                    </div>
                </div>
            </div>

            <div className="container-procedimientos">


                <div class="card">
                    <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1684268377/Fresh_Smile_Cmills/jonathan-borba-W9YEY6G8LVM-unsplash_qpfaed.jpg" alt="Imagen de la tarjeta" class="card-image" />
                    <div class="card-content">
                        <h3 class="card-title">Caries</h3>
                        <p class="card-description">El tratamiento de caries es un procedimiento dental utilizado para eliminar y tratar las cavidades o deterioro de los dientes causados por la caries dental. </p>
                    </div>
                </div>

                <div class="card">
                    <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1684270398/Fresh_Smile_Cmills/yingpis-kalayom-By1szZOVpHg-unsplash_wvbwd5.jpg" alt="Imagen de la tarjeta" class="card-image" />
                    <div class="card-content">
                        <h3 class="card-title">Frenos Dentales</h3>
                        <p class="card-description">
                            Los frenos dentales son dispositivos utilizados en odontología para corregir la posición y alineación de los dientes. </p>
                    </div>
                </div>

                <div class="card">
                    <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1684269551/Fresh_Smile_Cmills/caroline-lm-8BkF0sTC6Uo-unsplash_efkumb.jpg" alt="Imagen de la tarjeta" class="card-image" />
                    <div class="card-content">
                        <h3 class="card-title">Cirugia de Encias</h3>
                        <p class="card-description">La cirugía de encías es un procedimiento dental que se realiza para tratar y corregir problemas en las encías y estructuras de soporte de los dientes. </p>
                    </div>
                </div>
            </div>



            {/* <body className="mio">


                <div className="card-container">

                    <div className="image-container">
                        <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852202/Fresh_Smile_Cmills/dientes_zqji6a.jpg" />
                    </div>

                    <div className="card-content">

                        <div className="title">
                            <h2>Blanqueamiento dental</h2>
                        </div>
                        <div className="textt">
                            <p>Las encías y los dientes sanos hacen que sea más fácil comer bien y disfrutar de la buena comida. Hay una variedad de problemas que pueden afectar la salud oral, pero un buen cuidado mantendrá los dientes y las encías fuertes a medida que envejece.</p>
                        </div>

                    </div>

                    <div className="btns">
                        <Link to={'/Informacion1'}><button><a>ver mas</a></button></Link>
                    </div>

                </div>


                <div className="card-container2">

                    <div className="image-container2">
                        <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852197/Fresh_Smile_Cmills/card2_fadzq5.jpg" />
                    </div>

                    <div className="card-content2">

                        <div className="titles">
                            <h2>La importancia de usar brackets</h2>
                        </div>

                        <div className="text2">
                            <p>La ortodoncia es importante para la salud dental porque soluciona de forma definitiva problemas de maloclusión y malposición. Además, con el paso del tiempo, estos pueden empeorar y degenerar otras enfermedades .</p>
                        </div>

                    </div>

                    <div className="btn2">
                        <Link to={'/Informacion2'}><button><a>ver más</a></button></Link>
                    </div>

                </div>

                <div className="card-container3">

                    <div className="image-container3">
                        <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852213/Fresh_Smile_Cmills/muela-del-juicio-3_kbhmxa.jpg" />
                    </div>

                    <div className="card-content3">

                        <div className="title3">
                            <h2>Extracción de muelas del juicio</h2>
                        </div>
                        <div className="text3">
                            <p> A medida que va pasando el tiempo, muchas veces se necesita extraer algunas piezas bucales ya sea por infección o porque genera molestia o malestar.</p>
                        </div>

                    </div>

                    <div className="btn3">
                        <Link to={'/Informacion3'}><button><a>ver más</a></button></Link>
                    </div>

                </div>

                <div className="card-container4">

                    <div className="image-container4">
                        <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852198/Fresh_Smile_Cmills/cariesni%C3%B1o_y5ohrg.webp" />
                    </div>

                    <div className="card-content4">

                        <div className="title4">
                            <h2> Caries dental infantil</h2>
                        </div>
                        <div className="text4">
                            <p> Esto es debido principalmente a un alto consumo de productos azucarados, combinando con algunas deficiencias en los hábitos de higiene bucodental.</p>
                        </div>

                    </div>

                    <div className="btn4">
                        <Link to={'/Informacion4'}><button><a>ver más</a></button></Link>
                    </div>

                </div>


                <div className="card-container5">

                    <div className="image-container5">
                        <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852202/Fresh_Smile_Cmills/fractura_xtyyhc.jpg" />
                    </div>

                    <div className="card-content5">

                        <div className="title5">
                            <h2>Fracturas en los dientes</h2>
                        </div>
                        <div className="text5">
                            <p>En medio de algún juego o trastada, sufran un golpe en la boca que les provoque la rotura o un traumatismo de alguna pieza dental.</p>
                        </div>

                    </div>

                    <div className="btn5">
                        <Link to={'/Informacion5'}><button><a>ver más</a></button></Link>
                    </div>

                </div>



                <div className="card-container6">

                    <div className="image-container6">
                        <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852210/Fresh_Smile_Cmills/implantesss_deur5s.jpg" />
                    </div>

                    <div className="card-content6">

                        <div className="title6">
                            <h2>Implantes dentales</h2>
                        </div>
                        <div className="text6">
                            <p>Un implante dental es una solución para reponer un diente perdido, se trata de un dispositivo médico con una forma que imita a la de la raíz del diente.</p>
                        </div>

                    </div>

                    <div className="btn6">
                        <Link to={'/Informacion6'}><button><a>ver más</a></button></Link>
                    </div>

                </div>


                <div className="card-container7">

                    <div className="image-container7">
                        <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852211/Fresh_Smile_Cmills/invisible_x9gjmc.jpg" />
                    </div>

                    <div className="card-content7">

                        <div className="title7">
                            <h2>Ortodoncia invisible</h2>
                        </div>
                        <div className="text7">
                            <p> Es la corrección de la posición de los huesos y los dientes mediante aparatos que no son perceptibles a la vista.</p>
                        </div>

                    </div>

                    <div className="btn7">
                        <Link to={'/Informacion7'}><button><a>ver más</a></button></Link>
                    </div>

                </div>



                <div className="card-container8">

                    <div className="image-container8">
                        <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852197/Fresh_Smile_Cmills/sonrisa_ci42oe.jpg" />
                    </div>

                    <div className="card-content8">

                        <div className="title8">
                            <h2>Diseño de sonrisa</h2>
                        </div>
                        <div className="text8">
                            <p>Sabemos la importancia de una sonrisa y por eso entendemos que el diseño de esta debe ser acorde a lo que quieres.</p>
                        </div>

                    </div>

                    <div className="btn8">
                        <Link to={'/Informacion8'}><button><a>ver más</a></button></Link>
                    </div>

                </div>

                <div className="card-container9">

                    <div className="image-container9">
                        <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683929523/images_qkdvah.jpg" />
                    </div>

                    <div className="card-content9">

                        <div className="title9">
                            <h2>Coronas dentales</h2>
                        </div>
                        <div className="text9">
                            <p>Una corona es una cofia con forma de diente que reemplaza su diente normal sobre la encía</p>
                        </div>

                    </div>

                    <div className="btn9">
                        <Link to={'/Informacion9'}><button><a>ver más</a></button></Link>
                    </div>

                </div>

            </body> */}
            <Footer />
        </>
    );
};
