import './style.css';
import faviconImg from './assets/favicon.ico';
import homeDisplay from './home.js';
import menuDisplay from './menu';



const displayController = (() => {

    const onLoad = () => {
        // Set the favicon on start
        const faviconDOM = document.querySelector('link[rel~="icon"]');
        faviconDOM.href = faviconImg;
        // Append html for the header/nav
        // Indentations are made as a visual reference to html only 
        // <div class="content-inner">
        const content = document.getElementById('content');
        const contentInner = document.createElement('div');
        contentInner.classList.add('content-inner');
            //<div class="header">
            const header = document.createElement('div');
            header.classList.add('header');
            contentInner.appendChild(header);
                //<div class="title"><h1>Midnight's Noodle Bar</h1></div>
                const title = document.createElement('div');
                title.classList.add('title');
                const titleH1 = document.createElement('h1');
                const titleText = document.createTextNode("Midnight's Noodle Bar");
                titleH1.appendChild(titleText);
                title.appendChild(titleH1);
                header.appendChild(title);
                    //<div class="menu">
                    const menu = document.createElement('div');
                    menu.classList.add('menu');
                        //<div class="nav">Home</div>...
                        const navHome = document.createElement('div');
                        navHome.classList.add('nav');
                        const navHomeText = document.createTextNode('Home');
                        navHome.appendChild(navHomeText);
                        menu.appendChild(navHome);
                        // navMenu
                        const navMenu = document.createElement('div');
                        navMenu.classList.add('nav');
                        const navMenuText = document.createTextNode('Menu');
                        navMenu.appendChild(navMenuText);
                        menu.appendChild(navMenu);
                        // navContact
                        const navContact = document.createElement('div');
                        navContact.classList.add('nav');
                        const navContactText = document.createTextNode('Contact');
                        navContact.appendChild(navContactText);
                        menu.appendChild(navContact);
                    header.appendChild(menu);
        // Add the whole header/nav to the DOM
        content.appendChild(contentInner);
        // Add the main-content div - where the 'tabbed browsing' will occur
        const mainContent = document.createElement('div');
        mainContent.setAttribute('id', 'main-content');
        content.appendChild(mainContent);
        // Add the 'made-by' div to the bottom of the page
        const madeBy = document.createElement('div');
        madeBy.classList.add('made-by');
            // Link to theOdinProject
            const odinLink = document.createElement('a');
            odinLink.href = 'https://www.theodinproject.com/';
            odinLink.target = '_blank'
            const odinLinkP = document.createElement('p');
            const odinLinkText = document.createTextNode('The Odin Project');
            odinLinkP.appendChild(odinLinkText);
            odinLink.appendChild(odinLinkP);
            madeBy.appendChild(odinLink);
            // Link to gitHub
            const gitHubLink = document.createElement('a');
            gitHubLink.href = 'https://github.com/dwgrossberg';
            const gitHubIcon = document.createElement('img');
            gitHubIcon.id = 'githubIcon';
            gitHubIcon.alt = 'git hub icon';
            gitHubLink.appendChild(gitHubIcon);
            madeBy.appendChild(gitHubLink);
            // Add Name
            const myName = document.createTextNode('Dan Grossberg');
            madeBy.appendChild(myName);
        content.appendChild(madeBy);

        // Run the home module on load
        homeDisplay.runDisplay();
    }

    const nav = document.getElementsByClassName('nav');

    const clearContent = () => {
        for (let i = 0; i < nav.length; i++) {
            if (nav[i].classList[1]) {
                nav[i].classList.remove('menu-focus');
            }
        }
        console.log(nav[0].classList[1], nav.length);
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = '';
    }
    
    const tabbedBrowsing = () => {
        Array.from(nav).forEach(div => div.addEventListener('mousedown', (e) => {
            if (e.target.innerText === 'Home') {
                clearContent();
                // Update the nav icon
                nav[0].classList.add('menu-focus');
                homeDisplay.runDisplay();
            } else if (e.target.innerText === 'Menu') {
                clearContent();
                nav[1].classList.add('menu-focus');
                menuDisplay.runDisplay();
            } else if (e.target.innerText === 'Contact') {
                clearContent();
                nav[2].classList.add('menu-focus');

            }
        }));

    }


    return {

        onLoad,
        tabbedBrowsing

    };

})();

displayController.onLoad();
displayController.tabbedBrowsing();

