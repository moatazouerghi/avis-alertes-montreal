import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScriptNext, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '8px',
};

// Position par défaut si aucune adresse
const defaultCenter = {
  lat: 45.5017, // Montréal
  lng: -73.5673,
};

const MapContainer = ({ address }) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const [coordinates, setCoordinates] = useState(null);

  const geocodeAddress = async (address) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`
      );
      const data = await response.json();

      if (data.status === 'OK') {
        const location = data.results[0].geometry.location;
        setCoordinates(location);
      } else {
        console.error('Erreur Geocoding:', data.status);
      }
    } catch (error) {
      console.error('Erreur lors de la requête Geocoding:', error);
    }
  };

  useEffect(() => {
    if (address) {
      geocodeAddress(address);
    }
  }, [address]);

  return (
    <LoadScriptNext googleMapsApiKey={apiKey}>
      {coordinates ? (
        <GoogleMap
          key={`${coordinates.lat}-${coordinates.lng}`} // Force le re-render
          mapContainerStyle={containerStyle}
          center={coordinates}
          zoom={15}
        >
          <Marker position={coordinates} />
        </GoogleMap>
      ) : (
        <p>Chargement de la carte...</p>
      )}
    </LoadScriptNext>
  );
};

export default MapContainer;
