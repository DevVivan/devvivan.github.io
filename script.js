let openHam = document.querySelector('#openHam');
let closeHam = document.querySelector('#closeHam');
let navigationItems = document.querySelector('#navigation-items');
let background = document.querySelector(".background")
let body = document.querySelector("body")

const hamburgerEvent = (navigation, close, open) => {
    navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
};

openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));

console.log('hi')

let smallCircle = document.createElement("div")
smallCircle.className = "small-circle"

let bigCircle = document.createElement("div")
bigCircle.className = "big-circle"

window.addEventListener("mousemove",(e) => {
    smallCircle.className = "small-circle"
    smallCircle.style.left = 1/64 * e.x+"px";
    smallCircle.style.top = 1/64 * e.y+"px";
    background.appendChild(smallCircle)

    bigCircle.className = "big-circle"
    bigCircle.style.left = 1/64 * e.x+"px";
    bigCircle.style.top = 1/64 * e.y+"px";
    background.appendChild(bigCircle)
})
