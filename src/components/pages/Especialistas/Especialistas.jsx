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
  return (
    <main className='main'>
        <h1>Nuestros especialistas</h1>
        <div className='doctor-card-container'>
            {especialistas.map((especialista, i) => {
                return <DoctorCard 
                key={i}
                name={especialista.nombre_completo} 
                specialty={especialista.especialidad} 
                photo={especialista.foto_perfil || 'https://res.cloudinary.com/dexfjrgyw/image/upload/v1683852209/Fresh_Smile_Cmills/cards4_r5phfs.jpg'} 
                valoracion={especialistasVC.find(esp => esp.identificacion_especialista == especialista.identificacion_especialista).valoracion}
                votos={especialistasVC.find(esp => esp.identificacion_especialista == especialista.identificacion_especialista).votos.length}
                />
            })}
        </div>
    </main>
  )
}

export default Especialistas