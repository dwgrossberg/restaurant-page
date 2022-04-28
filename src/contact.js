

const contactDisplay = (() => {

    const runDisplay = () => {
        const mainContent = document.getElementById('main-content');
        // <div class="contact"></div>
        const contactDiv1 = document.createElement('div');
        contactDiv1.classList.add('contact');
        mainContent.appendChild(contactDiv1);
        // <div class="contact welcome-text">
        const contactDiv2 = document.createElement('div');
        contactDiv2.classList.add('contact', 'welcome-text');
            // Contact Info
            const div2H4 = document.createElement('h4');
            const nodeH4 = document.createTextNode('Drop Us a Line');
            div2H4.appendChild(nodeH4);
            contactDiv2.appendChild(div2H4);
            // Phone
            const div2P1 = document.createElement('p');
            const nodeP1 = document.createTextNode('Phone Number');
            div2P1.appendChild(nodeP1);
            div2P1.classList.add('phone');
            contactDiv2.appendChild(div2P1);
            // WhatsApp
            const div2P2 = document.createElement('p');
            const nodeP2 = document.createTextNode('WhatsApp');
            div2P2.appendChild(nodeP2);
            div2P2.classList.add('whats-app');
            contactDiv2.appendChild(div2P2);
            // Fax
            const div2P3 = document.createElement('p');
            const nodeP3 = document.createTextNode('Fax Number');
            div2P3.appendChild(nodeP3);
            div2P3.classList.add('fax');
            contactDiv2.appendChild(div2P3);
            // Email
            const div2P4 = document.createElement('p');
            const nodeP4 = document.createTextNode('Email');
            div2P4.appendChild(nodeP4);
            div2P4.classList.add('email');
            contactDiv2.appendChild(div2P4);
            // Direct-Mail
            const div2P5 = document.createElement('p');
            const nodeP5 = document.createTextNode('Direct Mail');
            div2P5.appendChild(nodeP5);
            div2P5.classList.add('direct-mail');
            contactDiv2.appendChild(div2P5);
        mainContent.appendChild(contactDiv2);    
        // <div class="contact"></div>
        const contactDiv3 = document.createElement('div');
        contactDiv3.classList.add('contact');
        mainContent.appendChild(contactDiv3);
        // <div class="contact" id="map"></div>
        const contactDiv4 = document.createElement('div');
        contactDiv4.classList.add('contact');
        contactDiv4.setAttribute('id', 'map');
        mainContent.appendChild(contactDiv4);
        // <script src="https:..."
        const script = document.createElement('script');
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly";
        script.defer = true;
        mainContent.appendChild(script);
    }

    // Google Map embed setup
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



    return {

        runDisplay

    }


})();

export default contactDisplay;