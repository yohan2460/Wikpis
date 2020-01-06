"use strict";
// ===========Hover In  & Out Events ==================
function mouseHoverIn(image, bullet, caption, radio, completePath){  // Color the caption an change image
     if (!radio.checked){
        bullet.style.color = ' #FF9300';
        image.src = completePath;
        caption.style.color = '#FFF';
     }
};

function mouseHoverOut(image, bullet, caption, radio, completePath){ // Restore Default values
    if (!radio.checked){
        bullet.style.color = '#33ADB9';
        image.src = completePath;
        caption.style.color = '#33ADB9';
    }
};

function radioChecked(){
    console.log(this.value);
    for(let i=0; i<radio.length; i++){
        if (!radio[i].checked){
            bullets[i].style.color = '#33ADB9';
            images[i].src = pathSource + sourceHoverOut[i];
            images_caption[i].style.color = '#33ADB9';
        }
    }
}
    //____________________________________________

var figures = document.querySelectorAll('.option')  
var images = document.querySelectorAll('.image');
var bullets = document.querySelectorAll('.mainContent__grid__list');
var images_caption = document.querySelectorAll('.image_caption');
var radio = document.querySelectorAll('input[type="radio"]');

var sourceHoverIn = ['marketingdigital-hover.png',
    'desarrollo-hover.png',
    'admin-hover.png',
    'consultoria-hover.png'
];
var sourceHoverOut = ['marketingdigital.png',
    'desarrollo.png',
    'admin.png',
    'consultoria.png'
];
var pathSource = "../IMAGES/mas-recuros/";

for (let i = 0; i < figures.length; i++) {
    figures[i].addEventListener('mouseover', function() {
        mouseHoverIn(images[i], bullets[i], images_caption[i], radio[i], pathSource + sourceHoverIn[i]);
    });
    figures[i].addEventListener('mouseout', function() {
        mouseHoverOut(images[i], bullets[i], images_caption[i], radio[i], pathSource + sourceHoverOut[i]);
    });  
    radio[i].addEventListener('click', radioChecked);
}
//====== Init Script ======================================

var container = document.querySelector(".container");
container.style.height = String(window.innerHeight) + "px";
console.log("hola");