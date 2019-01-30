// Your code goes here

// Event 1
window.addEventListener('load', () => {    
    alert("All aboard the Fun Bus!");
  });

// Event 2 - mousing over h1 adds text
let logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseenter', () => {
    logoHeading.textContent = "Fun Bus is REALLY fun!";
});

// Event 3 - moving mouse off h1 tag restores original text
logoHeading.addEventListener('mouseleave', () => {
    logoHeading.textContent = "Fun Bus";
});

let navLinks = document.querySelectorAll('.nav-link');

// Event 4 - clicking a nav link causes text-size to increase

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

// Event 5 - resize window generates alert

// WARNING: This creates a HUGE number of alerts if you click & drag to resize!
window.addEventListener('resize', () => {    
    alert('The window has been resized!')
}) 

// Event 6 - roll mouse wheel on buttons to make them bigger
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

// Event 7 - pressing mouse button changes paragraph color to red

let ps = document.querySelectorAll('p');

let pColor = (event) => event.target.style.color = 'red';

ps.forEach(paragraph => paragraph.addEventListener('mousedown', pColor));

// Event 8 - releasing mouse restores original color

let pReset = (event) => event.target.style.color = null;

ps.forEach(paragraph => paragraph.addEventListener('mouseup', pReset));

// Event 9 - left click on an image to get an alert

let images = document.querySelectorAll('img');
images.forEach(image => image.addEventListener('auxclick', () => alert('You clicked on an image')))

// Event 10 - double click fun bus image to make it disappear

let funBusImg = document.querySelector('.intro img');
funBusImg.addEventListener('dblclick', () => funBusImg.src = null);


// Greensock animate text

var tl = new TimelineLite, 
    mySplitText = new SplitText("#quote", {type:"words,chars"}), 
    chars = mySplitText.chars; //an array of all the divs that wrap each character

TweenLite.set("#quote", {perspective:400});

tl.staggerFrom(chars, 0.8, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "+=0");



document.getElementById("animate").onclick = function() {
  tl.restart();
}