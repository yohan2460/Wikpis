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

    let nextEnable= false;
    for(let i=0; i<checkBox.length; i++){
        if (!checkBox[i].checked){
            if (i==0 || i ==3){
            images[i].src = pathSource + sourceHoverOut[i];
            images_caption[i].style.color = '#33ADB9';
            }

        }
        else{
            images[i].src = pathSource + sourceHoverIn[i];
            images_caption[i].style.color = '#FFF';
            nextEnable= true;
            console.log(checkBox[i].value);
        }
    }

    if (nextEnable){ //Enable Next Button 
        nextButton.style.color = '#FFF';
        nextButton.style.background = '#33ADB9';
        nextButton.href = "customize.html";
    }
    else{ //Disaeble Next Button 
        nextButton.style.color = '#33ADB9';
        nextButton.style.background = '#FFF';
        nextButton.href = "javascript: categoryNextAnchor()";
    }

}

function categoryNextAnchor(){
    popupAlert.style.display ='flex';
    document.querySelector('.alertOverlay').style.display = 'flex';
}

function closeAlert(){
    popupAlert.style.display ='none';
    document.querySelector('.alertOverlay').style.display = 'none';
}

function closeAlert(){
    popupAlert.style.display ='none';
    document.querySelector('.alertOverlay').style.display = 'none';
}
    //____________________________________________

var popupAlert = document.querySelector('.alertContainer');  
var buttonAlert = document.querySelector('.alertSubmit');  
var nextButton = document.querySelector('.next');  

var figures = document.querySelectorAll('.option');  
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
    if (i==0 || i ==3){ 
        figures[i].addEventListener('mouseover', function() {
            mouseHoverIn(images[i], images_caption[i], checkBox[i], pathSource + sourceHoverIn[i]);
        });
        figures[i].addEventListener('mouseout', function() {
            mouseHoverOut(images[i], images_caption[i], checkBox[i], pathSource + sourceHoverOut[i]);
        });  
        checkBox[i].addEventListener('click', checkBoxChecked);
    }
}

nextButton.href = "javascript: categoryNextAnchor()";
buttonAlert.addEventListener('click', closeAlert);
//====== Init Script ======================================

var container = document.querySelector(".container");
container.style.height = String(window.innerHeight) + "px";