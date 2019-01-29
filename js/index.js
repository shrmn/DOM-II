// Your code goes here
let logoHeading = document.querySelector('.logo-heading');

logoHeading.addEventListener('mouseover', event => {
    logoHeading.textContent = "Fun Bus is REALLY fun!";
});

logoHeading.addEventListener('mouseleave', event => {
    logoHeading.textContent = "Fun Bus";
});