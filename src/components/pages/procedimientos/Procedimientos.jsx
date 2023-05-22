import React from "react";
import './procedimientos.css'
import { Footer } from "../../layouts/footer/Footer";
import { Link } from "react-router-dom";


export const Procedimientos = () => {
    return (
        <>
            <div className="container_proce">
                <div className="container_home1A">
                    <h1>¡Nuestros procedimientos!</h1>
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


                <div class="card">
                    <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1684268332/Fresh_Smile_Cmills/enis-yavuz-4u2fG9mqGvQ-unsplash_saf7yd.jpg" alt="Imagen de la tarjeta" class="card-image" />
                    <div class="card-content">
                        <h3 class="card-title">Blanqueamiento Dental</h3>
                        <p class="card-description">
                            El blanqueamiento dental es un procedimiento de odontología estética que busca aclarar el color de los
                            dientes para obtener una sonrisa más blanca y brillante. </p>
                    </div>
                </div>

                <div class="card">
                    <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1684268611/Fresh_Smile_Cmills/enis-yavuz-iGf7CfWgjTI-unsplash_zktstf.jpg" alt="Imagen de la tarjeta" class="card-image" />
                    <div class="card-content">
                        <h3 class="card-title">Brackets</h3>
                        <p class="card-description">El tratamiento de brackets es un procedimiento ortodóntico utilizado para
                            corregir la alineación y posición de los dientes. </p>
                    </div>
                </div>

                <div class="card">
                    <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1684268627/Fresh_Smile_Cmills/jonathan-borba-v_2FRXEba94-unsplash_cth93o.jpg" alt="Imagen de la tarjeta" class="card-image" />
                    <div class="card-content">
                        <h3 class="card-title">Extracción de Cordales</h3>
                        <p class="card-description">La extracción de las cordales es un procedimiento común y seguro, y
                            suele ser necesario cuando las muelas del juicio causan dolor o pueden afectar la salud bucal en general </p>
                    </div>
                </div>
            </div>

            <div className="container-procedimientos">

                <div class="card">
                    <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852212/Fresh_Smile_Cmills/cards1_s5fs46.jpg" alt="Imagen de la tarjeta" class="card-image" />
                    <div class="card-content">
                        <h3 class="card-title">Diseño de Sonrisa</h3>
                        <p class="card-description">
                            El diseño de sonrisa es un proceso estético y personalizado en odontología que busca mejorar la
                            apariencia de la sonrisa de una persona. </p>
                    </div>
                </div>

                <div class="card">
                    <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1684269175/Fresh_Smile_Cmills/umanoide-KeVKEs1_RDU-unsplash_lh8obx.jpg" alt="Imagen de la tarjeta" class="card-image" />
                    <div class="card-content">
                        <h3 class="card-title">Fractura Dental</h3>
                        <p class="card-description">El tratamiento de fractura dental en odontología es un procedimiento que se realiza
                            para reparar un diente dañado debido a una fractura o una fisura. </p>
                    </div>
                </div>

                <div class="card">
                    <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1684270420/Fresh_Smile_Cmills/peter-kasprzyk-U1gvhqVQ2kQ-unsplash_db0rfk.jpg" alt="Imagen de la tarjeta" class="card-image" />
                    <div class="card-content">
                        <h3 class="card-title">Implantes Dentales</h3>
                        <p class="card-description">El tratamiento de implantes dentales es un procedimiento odontológico
                            utilizado para reemplazar dientes perdidos o extraídos. </p>
                    </div>
                </div>
            </div>

            <div className="container-procedimientos">
                <div class="card">
                    <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1684268377/Fresh_Smile_Cmills/jonathan-borba-W9YEY6G8LVM-unsplash_qpfaed.jpg" alt="Imagen de la tarjeta" class="card-image" />
                    <div class="card-content">
                        <h3 class="card-title">Caries</h3>
                        <p class="card-description">El tratamiento de caries es un procedimiento dental utilizado para eliminar y
                            tratar las cavidades o deterioro de los dientes causados por la caries dental. </p>
                    </div>
                </div>

                <div class="card">
                    <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1684270398/Fresh_Smile_Cmills/yingpis-kalayom-By1szZOVpHg-unsplash_wvbwd5.jpg" alt="Imagen de la tarjeta" class="card-image" />
                    <div class="card-content">
                        <h3 class="card-title">Frenos Dentales</h3>
                        <p class="card-description">
                            Los frenos dentales son dispositivos utilizados en odontología para corregir la posición y alineación de
                            los dientes. </p>
                    </div>
                </div>

                <div class="card">
                    <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1684269551/Fresh_Smile_Cmills/caroline-lm-8BkF0sTC6Uo-unsplash_efkumb.jpg" alt="Imagen de la tarjeta" class="card-image" />
                    <div class="card-content">
                        <h3 class="card-title">Cirugia de Encias</h3>
                        <p class="card-description">La cirugía de encías es un procedimiento dental que se realiza para tratar
                            y corregir problemas en las encías y estructuras de soporte de los dientes. </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
