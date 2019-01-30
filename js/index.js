// Your code goes here

// Event 1
window.addEventListener('load', () => {    
    alert("All aboard the Fun Bus!");
  });

// Event 2
let logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseenter', () => {
    logoHeading.textContent = "Fun Bus is REALLY fun!";
});

// Event 3
logoHeading.addEventListener('mouseleave', () => {
    logoHeading.textContent = "Fun Bus";
});

let navLink = document.querySelectorAll('.nav-link');

// Event 4

let growNavLinks = (event) => {
    event.currentTarget.style.fontSize = '2rem';
    event.stopPropagation();
}
for(var i = 0; i < navLink.length; i++){
    navLink[i].addEventListener('click', growNavLinks);
}

// Nesting click event on window to demonstrat stoppropagation
let header = document.querySelector('header');
header.addEventListener('click', () => {
    console.log('You should not see this if you click on a nav link.');
})

// purely for my own peace of mind, added to revert nav-link font-size
let shrinkNavLinks = (event) => {
    event.currentTarget.style.fontSize = '1.6rem';
}
for(var i = 0; i < navLink.length; i++){
    navLink[i].addEventListener('mouseleave', shrinkNavLinks);
}

// Event 5

// NOTE: For some reason, the alert created by this cannot be dismissed.
window.addEventListener('resize', () => {    
    alert('The window has been resized!')
})

// Event 6
let button = document.querySelectorAll('.btn');

let growButton = (event) => {  
    event.target.style.width = '250px';
    event.target.style.height = '60px';
}

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('wheel', growButton);
}

// button size reset

let shrinkButton = (event) => {
    event.target.style.width = '200px';
    event.target.style.height = '45px';
}

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('mouseleave', shrinkButton);
}

// Event 7

let ps = document.querySelectorAll('p');
for (var i = 0; i < ps.length; i++) {
    ps[i].addEventListener('focus', (event) => {
        console.log(event.target);
        event.target.style.backgroundColor = 'blue';
    });
}
