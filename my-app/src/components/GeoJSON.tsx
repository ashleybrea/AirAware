import GeoJSON from "geojson";
import { useState } from "react";

const [geoJsonData, setGeoJsonData] = useState(null);

// In your useEffect:
const loadGeoJSON = async () => {
  try {
    const response = await fetch('/bay_area.geojson');
    const data = await response.json();
    setGeoJsonData(data);
  } catch (error) {
    console.error('Error loading GeoJSON:', error);
  }
};

export default GeoJSON;
