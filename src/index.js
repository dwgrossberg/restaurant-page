import './style.css';
import faviconImg from './assets/favicon.ico';
// import loadGoogleMapsApi from './contact.js';

// Display control module

// Set the favicon on start
const faviconDOM = document.querySelector('link[rel~="icon"]');
faviconDOM.href = faviconImg;

function initMap() {
    const bangkok = { lat: 13.7563, lng: 100.5018 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: bangkok,
    });
    const marker = new google.maps.Marker({
        position: bangkok,
        map: map,
    });
}

window.initMap = initMap;