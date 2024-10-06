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
  {
    name: "Washington Heights Asthma Clinic",
    image: "https://www.bmcofny.com/wp-content/uploads/2023/02/How-To-Choose-The-Right-Medical-Clinic-In-NYC-For-Your-Needs.jpg",
    rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/2499e588c271a000795c69608b52311c0cbb6a357032ba4c81a8f52ae30ea0e9?placeholderIfAbsent=true&apiKey=0339c476d92443ac95849fae30c5eeb3",
    type: "Clinc",
    price: "$",
    distance: "1.2 miles away",
    description: "Clinic that can provide asthma medication and assistance"
  },
  {
    name: "Bronx Cardiovascular Practice",
    image: "https://health.ucdavis.edu/media-resources/family-medicine/images/Images/Main%20Images/How-Are-Clinic-Works.jpg",
    rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/52bfcefdb29b52f5728ed4b88c74e6d098a6835ec4342cc39f53809fb15b35a3?placeholderIfAbsent=true&apiKey=0339c476d92443ac95849fae30c5eeb3",
    type: "Clinic",
    price: "$$",
    distance: "2.2 miles away",
    description: "Supporting line text lorem ipsum dolor sit amet, consectetur."
  }
]

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

      <div className="flex flex-col mt-7 self-center w-full bg-white rounded-3xl padding:10px max-md:max-w-full">
        <div className="flex gap-1 max-w-full bg-fuchsia-50 h-[26px] w-[809px]" />
        <div className="flex flex-col pr-5 pl-3 mt-1 w-full max-md:max-w-full">
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

          <div className="flex justify-center items-center mt-2 w-full">
            <div className="flex w-[172px] h-[40px]">
              <div className="flex-1 text-zinc-600">
                <div className="h-full flex items-center bg-purple-200 border border-solid border-zinc-500 rounded-l-full">
                  <div className="flex items-center px-3 gap-2 padding:20px">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8a8e59ef746e52c12db73b8bef64362a2437d6c56f80c33c086be1976e0e552?placeholderIfAbsent=true&apiKey=0339c476d92443ac95849fae30c5eeb3"
                      alt=""
                      className="w-[18px] h-[18px] object-contain"
                    />
                    <span className="text-sm font-medium">Visited</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-zinc-900">
                <div className="h-full flex items-center border border-solid border-zinc-500 padding:10px">
                  <div className="text-sm font-medium padding-left:40px">
                    Not Visited
                  </div>
                </div>
              </div>
            </div>
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