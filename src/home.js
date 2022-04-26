

const homeDisplay = (() => {

    const runDisplay = () => {
        // Set the nav bar icon
        const nav = document.getElementsByClassName('nav');
        console.log(nav, nav.length);
        for (let i = 0; i < nav.length; i++) {
            console.log(nav[0]);
            nav[0].classList.add('menu-focus');
        }
    
    

    }
    // 

    return {

        runDisplay,

    };
})();

export default homeDisplay;