import React, { useEffect, useState } from 'react'
import './Especialistas.css'
import { DoctorCard } from './DoctorCard'
import axios from 'axios';

function Especialistas() {
    const [especialistas, setEspecialistas] = useState([]);
    const [especialistasVC, setEspecialistasVC] = useState([]);

    const getEspecialistas = () => {
            axios.get("https://freshsmile.azurewebsites.net/FreshSmile/Especialistas/ConsultarEspecialista").then(res => setEspecialistas(res.data))
    }

    const getEspecialistasVC = () => {
        axios.get("https://freshsmile.azurewebsites.net/FreshSmile/Especialistas/ConsultarRating").then(res => setEspecialistasVC(res.data));
    }

    useEffect(()=> {
        getEspecialistas();
        getEspecialistasVC();
    },[])

    useEffect(() => {
        console.log(especialistasVC);
        console.log(especialistas);
    },[especialistasVC, especialistas])

  return (
    <main className='main'>
        <h1>Nuestros especialistas</h1>
        <div className='doctor-card-container'>
            {especialistasVC.length > 0 && especialistas.map((especialista, i) => {
                return <DoctorCard 
                key={i}
                data={especialista}
                valoracion={especialistasVC.find(esp => esp.identificacion_especialista == especialista.identificacion_especialista).valoracion}
                comentarios={especialistasVC.find(esp => esp.identificacion_especialista == especialista.identificacion_especialista).comentarios}
                votos={especialistasVC.find(esp => esp.identificacion_especialista == especialista.identificacion_especialista).votos}
                ratingId = {especialistasVC.find(esp => esp.identificacion_especialista == especialista.identificacion_especialista).id}
                />
            })}
        </div>
    </main>
  )
}

export default Especialistas