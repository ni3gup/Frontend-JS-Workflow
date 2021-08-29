import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/mapbox-gl/dist/mapbox-gl.css";

import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/mapbox-gl/dist/mapbox-gl.js";

import mapboxgl, { Map } from 'mapbox-gl';

import App from './App';

const app = async () => {
    mapboxgl.accessToken = '';

    document.getElementById('app')!.appendChild(await App());

    // Map
    new Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-71.060982, 42.35725],
        zoom: 18
    });
}

// Load app
app()