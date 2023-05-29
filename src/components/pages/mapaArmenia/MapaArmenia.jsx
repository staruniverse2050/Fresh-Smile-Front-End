import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

const MapaArmenia = () => {
  
  const odontologias = [
    { lat: 4.537163, lng: -75.675416, nombre: 'Odontología 1' },
    { lat: 4.537874, lng: -75.677238, nombre: 'Odontología 2' },
    { lat: 4.534769, lng: -75.675480, nombre: 'Odontología 3' }
    // Agrega más ubicaciones según sea necesario
  ];

  // Define el ícono personalizado para los marcadores
  const consultorioMarkerIcon = new Icon({
    iconUrl: 'https://res.cloudinary.com/dexfjrgyw/image/upload/v1685325361/cuidado-dental_wmiath.png',
    iconSize: [32, 32], // Tamaño del ícono en píxeles
    iconAnchor: [16, 32] // Punto de anclaje del ícono relativo a su posición
  });

  return (
    <div style={{ height: '400px', width: '100%' }}>
    <MapContainer center={[4.537, -75.665]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        {odontologias.map(odontologia => (
          <Marker
            key={odontologia.nombre}
            position={[odontologia.lat, odontologia.lng]}
            icon={consultorioMarkerIcon} // Usa el ícono personalizado para el marcador
          >
            <Popup>{odontologia.nombre}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapaArmenia;
