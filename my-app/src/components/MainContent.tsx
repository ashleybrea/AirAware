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

 const zips: { [key: string]: number } = {"10033": 1, '10451': 1, '10452': 1, '11103': 1, '11220': 1, '10172': 1, '11106': 1, '10047': 1, '10118': 1, '10120': 1, '10020': 1, '10158': 1, '11101': 1, '11211': 1, '11212': 1, '11356': 1, '11697': 1, '11229': 1, '10154': 1, '10196': 1, '10470': 1, '10153': 1, '10455': 1, '11378': 1, '10303': 1, '11691': 1, '11365': 1, '10169': 1, '10155': 1, '10122': 1, '11201': 1, '11354': 1, '10029': 1, '10309': 1, '10032': 1, '11432': 1, '10308': 1, '11361': 1, '11357': 1, '10018': 1, '10021': 1, '10175': 1, '11426': 1, '11374': 1, '11371': 1, '10119': 1, '11693': 1, '11226': 1, '11368': 1, '10011': 1, '10165': 1, '11355': 1, '11225': 1, '10014': 1, '10106': 1, '10453': 1, '10305': 1, '11104': 1, '11436': 1, '10474': 1, '10301': 1, '11362': 1, '10473': 1, '10312': 1, '10024': 1, '10307': 1, '10040': 1, '10460': 1, '10454': 1, '11435': 1, '10310': 1, '11427': 1, '11213': 1, '10282': 1, '11223': 1, '10055': 1, '10176': 1, '10271': 1, '11375': 1, '10044': 1, '11369': 1, '10463': 1, '10096': 1, '11217': 1, '10035': 1, '11412': 1, '10007': 1, '10152': 1, '10105': 1, '10026': 1, '10022': 1, '10006': 1, '10260': 1, '11209': 1, '11215': 1, '11109': 1, '11239': 1, '10080': 1, '11417': 1, '10111': 1, '10170': 1, '10003': 1, '11236': 1, '11692': 1, '10019': 1, '10034': 1, '10039': 1, '10306': 1, '11232': 1, '10167': 1, '10038': 1, '11040': 1, '10462': 1, '10016': 1, '10041': 1, '11366': 1, '11005': 1, '11238': 1, '10173': 1, '11373': 1, '11415': 1, '10475': 1, '11422': 1, '11096': 1, '10468': 1, '11105': 1, '11414': 1, '11423': 1, '11222': 1, '11221': 1, '10123': 1, '10456': 1, '11204': 1, '11231': 1, '11360': 1, '10009': 1, '11001': 1, '11224': 1, '10004': 1, '10162': 1, '11421': 1, '10128': 1, '10461': 1, '11418': 1, '10464': 1, '10065': 1, '10471': 1, '11451': 1, '10279': 1, '11416': 1, '11218': 1, '11364': 1, '11216': 1, '11367': 1, '10177': 1, '10005': 1, '11429': 1, '10302': 1, '10286': 1, '10048': 1, '11359': 1, '10031': 1, '10028': 1, '10166': 1, '10285': 1, '11230': 1, '10457': 1, '10010': 1, '11102': 1, '11377': 1, '11208': 1, '10121': 1, '10081': 1, '10027': 1, '11251': 1, '11235': 1, '10314': 1, '10466': 1, '11428': 1, '10168': 1, '10001': 1, '10171': 1, '10467': 1, '11203': 1, '10069': 1, '10023': 1, '10045': 1, '10030': 1, '11420': 1, '10270': 1, '11385': 1, '11419': 1, '11434': 1, '10036': 1, '11411': 1, '10304': 1, '10017': 1, '11207': 1, '11413': 1, '11228': 1, '11219': 1, '10472': 1, '10465': 1, '11205': 1, '10174': 1, '10259': 1, '10037': 1, '10025': 1, '10469': 1, '10104': 1, '10278': 1, '10203': 1, '11358': 1, '10107': 1, '11233': 1, '10151': 1, '10275': 1, '11430': 1, '11370': 1, '10280': 1, '11433': 1, '11363': 1, '10281': 1, '10265': 1, '10103': 1, '11206': 1, '11210': 1, '10012': 1, '11379': 1, '10043': 1, '10459': 1, '11372': 1, '10458': 1, '11234': 1, '10115': 1, '10075': 1, '10112': 1, '11237': 1, '11694': 1, '10110': 1, '11004': 1, '10013': 1, '10178': 1, '10002': 1, '11214': 1}

const MainContent: React.FC = () => {
  const [geoJsonData, setGeoJsonData] = useState(null);
  const mapCenter: [number, number] = [40.730610, -73.935242];


const unique_zips = ["10033", "10451", "10452", "11103", "11220", "10172", "11106", "10047", "10118", "10120", "10020", "10158", "11101", "11211", "11212", "11356", "11697", "11229", "10154", "10196", "10470", "10153", "10455", "11378", "10303", "11691", "11365", "10169", "10155", "10122", "11201", "11354", "10029", "10309", "10032", "11432", "10308", "11361", "11357", "10018", "10021", "10175", "11426", "11374", "11371", "10119", "11693", "11226", "11368", "10011", "10165", "11355", "11225", "10014", "10106", "10453", "10305", "11104", "11436", "10474", "10301", "11362", "10473", "10312", "10024", "10307", "10040", "10460", "10454", "11435", "10310", "11427", "11213", "10282", "11223", "10055", "10176", "10271", "11375", "10044", "11369", "10463", "10096", "11217", "10035", "11412", "10007", "10152", "10105", "10026", "10022", "10006", "10260", "11209", "11215", "11109", "11239", "10080", "11417", "10111", "10170", "10003", "11236", "11692", "10019", "10034", "10039", "10306", "11232", "10167", "10038", "11040", "10462", "10016", "10041", "11366", "11005", "11238", "10173", "11373", "11415", "10475", "11422", "11096", "10468", "11105", "11414", "11423", "11222", "11221", "10123", "10456", "11204", "11231", "11360", "10009", "11001", "11224", "10004", "10162", "11421", "10128", "10461", "11418", "10464", "10065", "10471", "11451", "10279", "11416", "11218", "11364", "10097", "11216", "11367", "10177", "10005", "11429", "10302", "10286", "10048", "11359", "10031", "10028", "10166", "10285", "11230", "10457", "10010", "11102", "11377", "11208", "10121", "10081", "10027", "11251", "11235", "10314", "10466", "11428", "10168", "10001", "10171", "10467", "11203", "10069", "10023", "10045", "10030", "11420", "10270", "11385", "11419", "11434", "10036", "11411", "10304", "10017", "11207", "11413", "11228", "11219", "10472", "10465", "11205", "10174", "10259", "10037", "00083", "10025", "10469", "10104", "10278", "10203", "11358", "10107", "11233", "10151", "10275", "11430", "11370", "10280", "11433", "11363", "10281", "10265", "10103", "11206", "11210", "10012", "11379", "10043", "10459", "11372", "10458", "11234", "10115", "10075", "10112", "11237", "11694", "10110", "11004", "10013", "10178", "10002", "11214"]


const getStyle = (feature: any) => {
  const zip = feature.properties.postalCode; // Access the specific value
  const pollutionLevel = zips[zip] / 7
  return {
    fillColor: "purple", // Fixed color
    weight: 3,
    color: "purple",
    fillOpacity: Math.min(pollutionLevel, 1), // Adjust opacity based on value (e.g., scale between 0 and 1)
    stroke: true,
  };
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
                  style={getStyle}
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