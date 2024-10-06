import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import ClinicCard from './ClinicCard';

// Fix for default marker icons in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

interface Clinic {
  name: string;
  image: string;
  rating: string;
  type: string;
  price: string;
  distance: string;
  description: string;
}

const clinics: Clinic[] = [
  // ... your existing clinics data
];

const MainContent: React.FC = () => {
  const [geoJsonData, setGeoJsonData] = useState(null);
  const mapCenter: [number, number] = [40.730610, -73.935242];

  const styleSouth = {
    fillColor: "purple",
    weight: 3,
    color: "purple",
    fillOpacity: 0.3,
    stroke: true,
  };

  const styleEast = {
    fillColor: "blue",
    weight: 3,
    color: "blue",
    fillOpacity: 0.3,
    stroke: false,
  };

  useEffect(() => {
    const loadGeoJSON = async () => {
      try {
        const response = await fetch('../new_york_zips.geojson');
        const data = await response.json();
        setGeoJsonData(data);
      } catch (error) {
        console.error('Error loading GeoJSON:', error);
      }
    };

    loadGeoJSON();
  }, []);

  return (
    <main className="flex flex-col grow shrink-0 self-end mt-9 basis-0 w-fit max-md:max-w-full">
      <h1 className="z-10 self-center font-size:30px font-Archivo italic -mt-1.5 text-5xl leading-none text-center text-black">
        Air Aware
      </h1>

      <div className="flex flex-col mt-7 w-full bg-white rounded-3xl min-h-[669px] max-md:max-w-full">
        <div className="flex gap-1 max-w-full bg-fuchsia-50 min-h-[26px] w-[809px]" />
        <div className="flex flex-col pr-5 pl-3 mt-1 w-full min-h-[330px] max-md:max-w-full">
          <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
            <MapContainer
              center={mapCenter}
              zoom={10}
              style={{ height: '100%', width: '100%' }}
              minZoom={0}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {geoJsonData && (
                <GeoJSON
                  data={geoJsonData}
                  style={styleSouth}
                />
              )}
              <Marker position={[37.36524801165674, -121.89022565537691]}>
                <Popup>Purple Lotus Patient Center</Popup>
              </Marker>
            </MapContainer>
          </div>

          <div className="flex justify-center items-start px-4 py-2 mt-3 w-full text-sm font-medium tracking-normal leading-5 text-center whitespace-nowrap max-md:max-w-full">
            {/* ... existing visited/not visited section ... */}
          </div>
        </div>
        <div className="flex flex-col px-2 mt-1 w-full h-[210px] max-md:max-w-full">
          {clinics.map((clinic, index) => (
            <ClinicCard key={index} clinic={clinic} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainContent;