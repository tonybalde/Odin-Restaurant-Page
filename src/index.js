import { initialLoad } from "./loadPage";
import { menu } from "./menu";
import { contact } from "./contact";

initialLoad();

// Tab switching module

let tabSwitchingModule = (function(){

    const homeTab = document.querySelector(".home");
    homeTab.addEventListener("click", initialLoad);

    const menuTab = document.querySelector(".menu");
    menuTab.addEventListener("click", menu);

    const contactTab = document.querySelector(".contact");
    contactTab.addEventListener("click", contact);

})();
