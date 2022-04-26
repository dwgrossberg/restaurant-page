import './style.css';
import faviconImg from './assets/favicon.ico';
import homeModule from './home.js';



const displayController = (() => {

    const onLoad = () => {
        // Set the favicon on start
        const faviconDOM = document.querySelector('link[rel~="icon"]');
        faviconDOM.href = faviconImg;


    }
    
    


    return {

        onLoad

    };

})();

displayController.onLoad();


