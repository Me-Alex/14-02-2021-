let menue = document.querySelector(".logo-img");
let navLinks = document.querySelector(".nav-links-for-mobile");
let container = document.querySelector(".container");
let footer = document.querySelector(".footer-container");
let close1 = document.querySelector(".img-close");
let mobileMenu = document.querySelector(".for-mobile");
menue.onclick = () => {
    close1.style.display = "inherit";
    menue.style.display = "none";
    container.style.display = "none";
    footer.style.display = "none";
    // navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
    mobileMenu.style.display = "flex";
}
close1.onclick = () => {
    mobileMenu.style.display = "none";
    menue.style.display = "";
    container.style.display = "";
    footer.style.display = "";

}