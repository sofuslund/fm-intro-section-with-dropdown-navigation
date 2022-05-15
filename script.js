function addProperEventListerners() {
    let menuIcon = document.getElementsByClassName("nav__menu-icon")[0];
    let darkOverlay = document.getElementsByClassName("dark-overlay")[0];
    let menu = document.getElementsByClassName("nav__menu")[0];
    let submenus = document.querySelectorAll(".nav__submenu");
    if(window.innerWidth < 769){
        menuIcon.onclick = darkOverlay.onclick = () => {
            if(!menu.classList.contains("nav__menu--expanded")) {
                darkOverlay.classList.add("dark-overlay--show");
                menuIcon.src = "images/icon-close-menu.svg";
                menu.classList.add("nav__menu--expanded");
            } else {
                darkOverlay.classList.remove("dark-overlay--show");
                menuIcon.src = "images/icon-menu.svg";
                menu.classList.remove("nav__menu--expanded");
                document.querySelectorAll(".nav__submenu").forEach(elm => {
                    elm.classList.remove("nav__submenu--expanded");
                });
            }
        }

        document.querySelectorAll(".submenu__link, .submenu__arrow").forEach(submenuTrigger => {
            submenuTrigger.onclick = () => {
                let submenu = submenuTrigger.parentElement.parentElement;
                let icon = submenu.querySelector(".submenu__arrow");
                if(submenu.classList.contains("nav__submenu--expanded")) {
                    submenu.classList.remove("nav__submenu--expanded");
                } else {
                    submenu.classList.add("nav__submenu--expanded");
                }
            }
        });

        submenus.forEach(submenu => {submenu.onmouseover = null; submenu.onmouseout = null;});
    } else {
        for(let submenu of submenus) {
            submenu.querySelector(".submenu__list").style.display = "none";
            submenu.querySelector(".submenu__wrapper").style.display = "none";
            submenu.onmouseover = () => {
                submenu.querySelector(".submenu__list").style.display = "block";
                submenu.querySelector(".submenu__wrapper").style.display = "inline-block";
            }
            submenu.onmouseout = () => {
                submenu.querySelector(".submenu__list").style.display = "none";
                submenu.querySelector(".submenu__wrapper").style.display = "none";
            }
        }

        menuIcon.onclick = null;
        document.querySelectorAll(".submenu__link, .submenu__arrow").forEach(submenuTrigger => {
            submenuTrigger.onclick = null;
        });
    }
}

addProperEventListerners();
window.addEventListener('resize', function(){
    addProperEventListerners();
});