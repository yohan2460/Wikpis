function mouseOverFunction(id1, id2, source) {
    document.getElementById(id1).style.color = ' #FF9300';
    document.getElementById(id2).src = source;

}

function mouseOutFunction(id1, id2, source) {
    document.getElementById(id1).style.color = ' #33ADB9';
    document.getElementById(id2).src = source;
}


// ==== SOCIAL NETWORK MODIFIERS===//

var contentContainer = document.querySelector("#contentContainer");
var ball = document.querySelector("#ball");
contentContainer.addEventListener("click", getClickposition, false);

function getClickposition(e) {
    var xposition = e.clientX;
    var yposition = e.clientY;

    var translate3dValue = "translate3d(" + xposition + "xp," + yposition + "px, 0)";
    console.log(translate3dValue)
    ball.style.transform = translate3dValue;
}