import React from "react";
import './procedimientos.css'
import dientes from '../procedimientos/assets/img/dientes.png'
import card2 from '../procedimientos/assets/img/card2.png'


export const Procedimientos = () => {
    return (
      <>
      <div>
     <div className="card-container">

      <div className="image-container">
      <img src={dientes} />
      </div>
      
     <div className="card-content">

     <div className="title">
     <h2>Blanqueamiento dental</h2>
      </div>
      <div className="text">
       <p>Las encías y los dientes sanos hacen que sea más fácil comer bien y disfrutar de la buena comida. Hay una variedad de problemas que pueden afectar la salud oral, pero un buen cuidado mantendrá los dientes y las encías fuertes a medida que envejece.</p>
      </div>

     </div>

     <div className="btns">
           <button>
            <a>
                ver mas
            </a>
           </button>
        </div>

      </div>

     {/* segunda card */}
      <div className="card-container2">

<div className="image-container2">
<img src={card2} />
</div>

<div className="card-content2">

<div className="titles">
<h2>La importancia de usar brackets</h2>
</div>

<div className="text2">
<p>La ortodoncia es importante para la salud dental porque soluciona de forma definitiva problemas de maloclusión y malposición. Además, con el paso del tiempo, estos pueden empeorar y degenerar en otras enfermedades y consecuencias negativas para la salud general del paciente.</p>
</div>

</div>

<div className="btn2">
 <button>
  <a>
      ver mas
  </a>
 </button>
</div>

</div>


{/* tercera card */}

<div className="card-container3">

<div className="image-container3">
<img src={dientes} />
</div>

<div className="card-content3">

<div className="title3">
<h2>Blanqueamiento dental</h2>
</div>
<div className="text3">
<p>Las encías y los dientes sanos hacen que sea más fácil comer bien y disfrutar de la buena comida. Hay una variedad de problemas que pueden afectar la salud oral, pero un buen cuidado mantendrá los dientes y las encías fuertes a medida que envejece.</p>
</div>

</div>

<div className="btn3">
 <button>
  <a>
      ver mas
  </a>
 </button>
</div>

</div>

      </div>
      </>
  );
};
