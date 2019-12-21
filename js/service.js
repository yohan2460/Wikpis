// Hover Images 
function mouseOverFunction(bullet_func, source_func) {
    console.log(bullet_func, source_func);
    bullet_func.style.color = ' #33ADB9';
    this.src = source_func;
    // document.getElementById(id1).style.color = ' #FF9300';
    // document.getElementById(id2).src = source;

}

function mouseOutFunction(bullet, source) {
    console.log(bullet, source);
    bullet.style.color = ' #33ADB9';
    this.src = source;
}


var bulletsId = ['list1','list2', 'list3','list4'];
var imagesId = ['img1','img2', 'img3','img4']
var source = ['marketingdigital-hover.png',
              'desarrollo-hover-active.png',
              'administracion-hover-active.png',
              'consultorias-hover-active.png']

var pathSource = "../IMAGES/mas-recuros/";
var bullet = document.getElementById(bulletsId[0]);
var image = document.getElementById(imagesId[0]);
var completePath = pathSource+source[0];
image.addEventListener('mouseover', function() {
        mouseOverFunction(bullet, completePath);
      });
// for(var i=0; i<imagesId.length; i++){
//     var bullet = document.getElementById(bulletsId[i])
//     var image = document.getElementById(imagesId[i])
//     var completePath = pathSource+source[i]
//     image.addEventListener('mouseover', function() {
//         mouseOverFunction(bullet, completePath);
//       });
//     console.log(image, bullet , completePath);
    

// }
// Main Container
var container = document.querySelector(".container")
container.style.height = String(window.innerHeight) + "px"; 
