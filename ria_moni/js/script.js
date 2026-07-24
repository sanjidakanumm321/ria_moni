// ===== ABOUT TABS =====
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, element) {

    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    element.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// ===== MOBILE MENU =====
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ===== CLOSE MENU ON SCROLL =====
window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};