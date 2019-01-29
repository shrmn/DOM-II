// Your code goes here

// Event the first
let logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseenter', event => {
    logoHeading.textContent = "Fun Bus is REALLY fun!";
});

// Event the second
logoHeading.addEventListener('mouseleave', event => {
    logoHeading.textContent = "Fun Bus";
});

let navLink = document.querySelectorAll('.nav-link');
console.log(navLink);

// Event the third
let growNavLinks = function(e) {
    e.currentTarget.style.fontSize = '2rem';
}
for(var i = 0; i < navLink.length; i++){
    navLink[i].addEventListener('click', growNavLinks, false);
}

// purely for my own peace of mind, added to revert nav-link font-size
let shrinkNavLinks = function(e) {
    e.currentTarget.style.fontSize = '1.6rem';
}
for(var i = 0; i < navLink.length; i++){
    navLink[i].addEventListener('mouseleave', shrinkNavLinks, false);
}

// Event the fourth
let 