import React from "react";
 import './procedimientos.css'
//  import { Footer } from "../../layouts/footer/Footer";
import { Link } from "react-router-dom";





export const Procedimientos = () => {
    return (
        <>
            <body className="mio">
                
           
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

                {/* segunda card */}
                <div className="card-container2">

                    <div className="image-container2">
                        <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852197/Fresh_Smile_Cmills/card2_fadzq5.jpg"/>
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


                {/* tercera card */}

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

                  
                  {/* cuarta card */}

                  <div className="card-container4">

                    <div className="image-container4">
                        <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852198/Fresh_Smile_Cmills/cariesni%C3%B1o_y5ohrg.webp"/> 
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


                {/* quinta card */}


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
                        <button>
                            <a>
                                ver mas
                            </a>
                        </button>
                    </div>

                </div>


                {/* sexta card */}


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
                        <button>
                            <a>
                                ver mas
                            </a>
                        </button>
                    </div>

                </div>



                 {/* septima card */}


                  <div className="card-container7">

                    <div className="image-container7">
                        <img src="https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852211/Fresh_Smile_Cmills/invisible_x9gjmc.jpg"/>
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
                        <button>
                            <a>
                                ver mas
                            </a>
                        </button>
                    </div>

                </div>



                
                 {/* octava card */}


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
                        <button>
                            <a>
                                ver mas
                            </a>
                        </button>
                    </div>

                </div>


                
                {/* <Footer /> */}
           
                </body>
        </>
    );
};
