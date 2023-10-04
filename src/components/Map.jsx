import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import flagEmojiToPNG from "../functions/flagEmojiToPNG";

const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mapPosition, setMapPosition] = useState([41, 29]);
  const { cities } = useCities();
  const navigate = useNavigate();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  useEffect(() => {
    if(lat && lng) setMapPosition([lat, lng])
  }, [lat, lng])
  

  return (
    <div
      className={styles.mapContainer}
      // onClick={() => navigate('form')}
    >
      <MapContainer
        // center={mapPosition}
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution=""
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=b37f0f2c-146f-4044-8c25-f6630572ed42"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{flagEmojiToPNG(city.emoji)}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeVision position={mapPosition} />
        <OnMapClick />
      </MapContainer>
    </div>
  );
};

function ChangeVision ({position}) {
  const map = useMap();
  map.setView(position)
  return null;
}

function OnMapClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

export default Map;
