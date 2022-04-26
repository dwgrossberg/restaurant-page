const loadGoogleMapsApi = require('load-google-maps-api');

// Contact page Google map embed
function initMap() {
    const bangkok = { lat: 13.7563, lng: 100.5018 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: bangkok,
    });
    const marker = new google.maps.Marker({
        position: bangkok,
        map: map,
    });
}

window.initMap = initMap;