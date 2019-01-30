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

let navLinks = document.querySelectorAll('.nav-link');

// Event 4

let growNavLinks = (event) => {
    event.currentTarget.style.fontSize = '2rem';
    event.stopPropagation();
    event.preventDefault();
}
navLinks.forEach(link => {
    link.addEventListener('click', growNavLinks);
})

// Nesting click event on window to demonstrat stoppropagation
let header = document.querySelector('header');
header.addEventListener('click', () => {
    console.log('You should not see this if you click on a nav link.');
})

// purely for my own peace of mind, added to revert nav-link font-size
let shrinkNavLinks = (event) => {
    event.currentTarget.style.fontSize = '1.6rem';
}
navLinks.forEach(link => {
    link.addEventListener('mouseleave', shrinkNavLinks);
})

// Event 5

// WARNING: This creates a HUGE number of alerts if you click & drag to resize!
window.addEventListener('resize', () => {    
    alert('The window has been resized!')
}) 

// Event 6
let buttons = document.querySelectorAll('.btn');

let growButton = (event) => {  
    event.currentTarget.style.width = '250px';
    event.currentTarget.style.height = '60px';
}

buttons.forEach(button => {
    button.addEventListener('wheel', growButton);
})

// button size reset

let shrinkButton = (event) => {    
    event.target.style.width = '200px';
    event.target.style.height = '45px';
}

buttons.forEach(button => {
    button.addEventListener('mouseleave', shrinkButton);
})

// Event 7

let ps = document.querySelectorAll('p');

let pColor = (event) => event.target.style.color = 'red';

ps.forEach(paragraph => paragraph.addEventListener('mousedown', pColor));

// Event 8

let pReset = (event) => event.target.style.color = null;

ps.forEach(paragraph => paragraph.addEventListener('mouseup', pReset));

// Event 9