
// set map center
var map = L.map("map").setView([40.730610,-73.935242], 10);
map.options.minZoom = 0;

// set map tiles and attribution(s)
var tiles = L.tileLayer(
    //"http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
);
tiles.addTo(map);

// add plpc marker
var purpleLotus = L.marker([37.36524801165674, -121.89022565537691]).addTo(map)
    .bindPopup('Purple Lotus Patient Center');


function styleSouth(feature) {
    return {
        fillColor: "purple",
        weight: 3,
        color: "purple",
        fillOpacity: 0.3,
        stroke: true,
        smoothFactor: 1 
    };
}
function styleEast(feature) {
    return {
        fillColor: "blue",
        weight: 3,
        color: "blue",
        fillOpacity: 0.3,
        stroke: false,
        smoothFactor: 1
    };
}

$.getJSON("bay_area.geojson", function (bay) {
    // loop through bay_area json array
    for (var item in bay.features) {
        L.geoJson(bay.features[item], { style: styleSouth }).addTo(map);
    }
});
