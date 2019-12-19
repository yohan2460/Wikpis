function mouseOverFunction(id1, id2, source) {
    document.getElementById(id1).style.color = ' #FF9300';
    document.getElementById(id2).src = source;

}

function mouseOutFunction(id1, id2, source) {
    document.getElementById(id1).style.color = ' #33ADB9';
    document.getElementById(id2).src = source;
}

function painting_slider(){

    var val = (this.value - this.min)/(this.max - this.min);
    var percent = val * 100;
    var gradient = "-webkit-gradient(linear, left top, right top, color-stop("+percent+"%, #FF9300), color-stop("+percent+"%, #EFEFEF))"
    console.log(gradient);
    this.style.background = gradient;
}
var slider = document.getElementById("slider");
slider.addEventListener('input', painting_slider);

