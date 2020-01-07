"use strict";
// ===========Hover In  & Out Events ==================
function mouseHoverIn(image, caption, checkBox, completePath){  // Color the caption an change image
     if (!checkBox.checked){
        image.src = completePath;
        caption.style.color = '#FFF';
     }
};

function mouseHoverOut(image, caption, checkBox, completePath){ // Restore Default values
    if (!checkBox.checked){
        image.src = completePath;
        caption.style.color = '#33ADB9';
    }
};

function checkBoxChecked(){

    for(let i=0; i<checkBox.length; i++){
        if (!checkBox[i].checked){
            images[i].src = pathSource + sourceHoverOut[i];
            images_caption[i].style.color = '#33ADB9';
        }
        else{
            console.log(checkBox[i].value);
        }
    }
}
    //____________________________________________

var figures = document.querySelectorAll('.option')  
var images = document.querySelectorAll('.image');
var images_caption = document.querySelectorAll('.image_caption');
var checkBox = document.querySelectorAll('input[type="checkbox"]');

var sourceHoverIn = ['redessociales-hover.png',
    'sem-hover.png',
    'seo-hover.png',
    'email-hover.png'
];
var sourceHoverOut = ['redessociales.png',
    'sem.png',
    'seo.png',
    'email.png'
];
var pathSource = "../IMAGES/mas-recuros/";

for (let i = 0; i < figures.length; i++) {
    figures[i].addEventListener('mouseover', function() {
        mouseHoverIn(images[i], images_caption[i], checkBox[i], pathSource + sourceHoverIn[i]);
    });
    figures[i].addEventListener('mouseout', function() {
        mouseHoverOut(images[i], images_caption[i], checkBox[i], pathSource + sourceHoverOut[i]);
    });  
    checkBox[i].addEventListener('click', checkBoxChecked);
}
//====== Init Script ======================================

var container = document.querySelector(".container");
container.style.height = String(window.innerHeight) + "px";