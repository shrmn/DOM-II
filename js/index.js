// Your code goes here
let logoHeading = document.querySelector('.logo-heading');
console.log(logoHeading);

logoHeading.addEventListener('mouseover', event => {
    console.log(event.type);
    logoHeading.textContent = "Fun Bus is REALLY fun!";
});