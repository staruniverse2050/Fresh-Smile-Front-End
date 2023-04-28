import React from "react";
import './Clinica.css'


export const Clinica = () => {
  return (

    <div className="card-text-center">


      <div className="overflow">
        <img src="./public/sede.jpg" />
        {/* <img src="./public/armenia.jpg" alt="armenia" /> */}
      </div>

<div className="card-body text-dark">
<h4 className="card-title">sede armenia</h4>
  <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nesciunt, tempore libero provident accusamus hic voluptatum facilis molestiae unde nam exercitationem suscipit odio excepturi dolor rem veritatis est omnis ea.
  </p>
  <a href="#" className="btn btn-outline-success"> agenda tu cita</a>
</div>

      </div>

  );
}


export default Clinica;