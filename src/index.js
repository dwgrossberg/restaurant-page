import './style.css';
import faviconImg from './assets/favicon.ico';

// Set favicon
const faviconDOM = document.querySelector('link[rel~="icon"]');
faviconDOM.href = faviconImg;