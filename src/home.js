

const homeDisplay = (() => {

    const runDisplay = () => {
        // Set the nav bar icon
        const nav = document.getElementsByClassName('nav');
        console.log(nav, nav.length);
        nav[0].classList.add('menu-focus');
        // Homepage setup
        //<div class="home">
        const mainContent = document.getElementById('main-content');
        const home1 = document.createElement('div');
        home1.classList.add('home');
        //<div class="welcome-text">
        const welcomeText = document.createElement('div');
        welcomeText.classList.add('welcome-text');
            const welcomeTextH3 = document.createElement('h3');
            const welcomeTextH3Node = document.createTextNode("Welcome to Chef Midnight's Noodle Bar");
            welcomeTextH3.appendChild(welcomeTextH3Node);
            welcomeText.appendChild(welcomeTextH3);
            const welcomeTextP1 = document.createElement('p');
            const welcomeTextP1Node = document.createTextNode("Deep in the heart of Bangkok's urban jungle there lives a noodle restaurant with the audacity to dream.");
            welcomeTextP1.appendChild(welcomeTextP1Node);
            welcomeText.appendChild(welcomeTextP1);
            const welcomeTextP2 = document.createElement('p');
            const welcomeTextP2Node = document.createTextNode("Noodles anytime, noodles anywhere? You got it.");
            welcomeTextP2.appendChild(welcomeTextP2Node);
            welcomeText.appendChild(welcomeTextP2);
            const welcomeTextP3 = document.createElement('p');
            const welcomeTextP3Node = document.createTextNode("Noodles in a variety of sweet, salty, spicy, and/or sour flavor profiles? Absolutely.");
            welcomeTextP3.appendChild(welcomeTextP3Node);
            welcomeText.appendChild(welcomeTextP3);
            const welcomeTextP4 = document.createElement('p');
            const welcomeTextP4Node = document.createTextNode("Noodles in a hat or a chair? Why not.");
            welcomeTextP4.appendChild(welcomeTextP4Node);
            welcomeText.appendChild(welcomeTextP4);
            const welcomeTextP5 = document.createElement('p');
            const welcomeTextP5Node = document.createTextNode("Noodles, noodles everywhere.");
            welcomeTextP5.appendChild(welcomeTextP5Node);
            welcomeText.appendChild(welcomeTextP5);
        home1.appendChild(welcomeText);
        //<div class="welcome-chef">
        const welcomeChef = document.createElement('div');
        welcomeChef.classList.add('welcome-chef');
            //<div id="chef-img"></div>
            const chefImg = document.createElement('img');
            chefImg.setAttribute('id', 'chef-img');
            welcomeChef.appendChild(chefImg);
            // <div class="chef-text">
            const chefText = document.createElement('div');
            chefText.classList.add('chef-text');
            const chefTextP = document.createElement('p');
            chefTextP.classList.add('welcome-text');
            const chefTextNode = document.createTextNode("Chef Miko 'Midnight' Mitsuki prepares her signature Umami Eel Noodle Bowl");
            chefTextP.appendChild(chefTextNode);
            welcomeChef.appendChild(chefText);
        home1.appendChild(welcomeChef);
        mainContent.appendChild(home1);
        //<div class="home"></div>
        for (let i = 0; i < 5; i++) {
            const home = document.createElement('div');
            home.classList.add('home');
            mainContent.appendChild(home);
        }

    }
    

    return {

        runDisplay,

    };
})();

export default homeDisplay;