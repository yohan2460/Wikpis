// Hover Images
function mouseHoverIn(image, bullet, completePath){
    bullet.style.color = ' #FF9300';
    image.src = completePath;
};

function mouseHoverOut(image, bullet, completePath){
    bullet.style.color = ' #33ADB9';
    image.src = completePath;
};

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


// completePath = pathSource + sourceHoverIn[0];
// for ( i = 0; i< 2; i++){
//     figures[i].addEventListener('mouseover', function() {
//             mouseHoverIn(images[i], bullets[i], pathSource + sourceHoverIn[i]);
//         });
//     figures[i].addEventListener('mouseout', function() {
//             mouseHoverOut(images[i], bullets[i], pathSource + sourceHoverOut[i]);
//         });
// };


// // Hover Images 
// function mouseOverFunction(id1, id2, source) {
//     console.log(bullet, source);
//     bullet.style.color = ' #33ADB9';
//     this.src = source;
//     document.getElementById(id1).style.color = ' #FF9300';
//     document.getElementById(id2).src = source;

// }

// function mouseOutFunction(bullet, source) {
//     console.log(bullet, source);
//     bullet.style.color = ' #33ADB9';
//     this.src = source;
// }


// var bulletsId = ['list1', 'list2', 'list3', 'list4'];
// var imagesId = ['img1', 'img2', 'img3', 'img4'];
// var source = ['marketingdigital-hover.png',
//     'desarrollo-hover-active.png',
//     'administracion-hover-active.png',
//     'consultorias-hover-active.png'
// ];
// var pathSource = "../IMAGES/mas-recuros/";

// for (var i = 0; i < imagesId.length; i++) {
//     var bullet = document.getElementById(bulletsId[i]);
//     var image = document.getElementById(imagesId[i]);
//     var completePath = pathSource + source[i];
//     image.addEventListener('mouseover', function() {
//         mouseOverFunction(bullet, completePath);
//     });

//  }
// Main Container
var container = document.querySelector(".container");
container.style.height = String(window.innerHeight) + "px";