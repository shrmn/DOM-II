// Your code goes here

// Event the first
window.addEventListener('load', () => {    
    alert("All abord the Fun Bus!");
  });

// Event the second
let logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseenter', () => {
    logoHeading.textContent = "Fun Bus is REALLY fun!";
});

// Event the third
logoHeading.addEventListener('mouseleave', () => {
    logoHeading.textContent = "Fun Bus";
});

let navLink = document.querySelectorAll('.nav-link');

// Event the fourth
let growNavLinks = (event) => {
    event.currentTarget.style.fontSize = '2rem';
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

// Event the fifth

// NOTE: For some reason, the alert created by this cannot be dismissed.
window.addEventListener('resize', () => {
    alert('The window has been resized!')
})

// Event the sixth
