// ===========Hover In  & Out Events ==================
function mouseHoverIn(image, bullet, completePath){  // Color the caption an change image
    bullet.style.color = ' #FF9300';
    image.src = completePath;
};

function mouseHoverOut(image, bullet, completePath){ // Restore Default values
    bullet.style.color = ' #33ADB9';
    image.src = completePath;
};
    //____________________

var figures = document.querySelectorAll('.option')  
var images = document.querySelectorAll('.image');
var bullets = document.querySelectorAll('.mainContent__grid__list');

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
        mouseHoverIn(images[i], bullets[i], pathSource + sourceHoverIn[i]);
    });
    figures[i].addEventListener('mouseout', function() {
        mouseHoverOut(images[i], bullets[i], pathSource + sourceHoverOut[i]);
    });
    
}
//====== Init Script ======================================
var container = document.querySelector(".container");
container.style.height = String(window.innerHeight) + "px";