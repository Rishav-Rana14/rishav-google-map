mapboxgl.accessToken = 'pk.eyJ1IjoiYXNodXRvc2gyODAzIiwiYSI6ImNrb3R2MDA1NzBmMzkzMWxsN2pmdmhsOGoifQ.IACDRQfTOH2dSAoZ3Ch3wA';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation,
    { enableHighAccuracy: true }
);

function successLocation(position) {
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
    setupMap([-122.083851, 37.386052])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });
    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav);
    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      });
      map.addControl(directions, "top-left");
      
}