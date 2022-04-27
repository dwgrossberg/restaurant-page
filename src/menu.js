

const menuDisplay = (() => {

    const runDisplay = () => {
        const mainContent = document.getElementById('main-content');
        // <div class="menu-food"></div>
        for (let i = 0; i < 7; i++) {
            const menuDiv = document.createElement('div');
            menuDiv.classList.add('menu-food');
            mainContent.appendChild(menuDiv);
        }

    }



    return {

        runDisplay

    }


})();

export default menuDisplay;