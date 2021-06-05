let menuIcon = document.querySelector(".menu-icon");
let menuIconOpen = document.querySelector(".menu-icon-open");
let headerNav = document.querySelector(".header-nav");

menuIcon.onclick = function() {
    headerNav.style['display'] = 'block';
}

menuIconOpen.onclick = function() {
    headerNav.style['display'] = 'none';
}