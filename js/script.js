function mouseOverFunction(id1, id2, source) {
    document.getElementById(id1).style.color = ' #FF9300';
    document.getElementById(id2).src = source;

}

function mouseOutFunction(id1, id2, source) {
    document.getElementById(id1).style.color = ' #33ADB9';
    document.getElementById(id2).src = source;
}

// Socail nekworks

// facebook
function painting_slider_facebook() {

    var val = (this.value - this.min) / (this.max - this.min);
    var percent = val * 100;
    var gradient = "-webkit-gradient(linear, left top, right top, color-stop(" + percent + "%, #FF9300), color-stop(" + percent + "%, #EFEFEF))"

    this.style.background = gradient;

    var cals = percent - 150 / 100;
    var cal = " " + cals + "%";
    Popup.style.marginLeft = cal;


    var value_popup = (this.value - this.min)
    document.getElementById('Popup_label').innerHTML = value_popup;

    console.log(Popup_label)


}

// Instagram
function painting_slider_instagram() {

    var val = (this.value - this.min) / (this.max - this.min);
    var percent = val * 100;
    var gradient = "-webkit-gradient(linear, left top, right top, color-stop(" + percent + "%, #FF9300), color-stop(" + percent + "%, #EFEFEF))"

    this.style.background = gradient;

    var cals = percent - 150 / 100;
    var cal = " " + cals + "%";
    PopupInstagram.style.marginLeft = cal;


    var value_popup = (this.value - this.min)
    document.getElementById('Popup_label_Instagram').innerHTML = value_popup;

    console.log(Popup_label_Instagram)


}

// Linkedin
function painting_slider_Linkedin() {

    var val = (this.value - this.min) / (this.max - this.min);
    var percent = val * 100;
    var gradient = "-webkit-gradient(linear, left top, right top, color-stop(" + percent + "%, #FF9300), color-stop(" + percent + "%, #EFEFEF))"

    this.style.background = gradient;

    var cals = percent - 150 / 100;
    var cal = " " + cals + "%";
    PopupLinkedin.style.marginLeft = cal;


    var value_popup = (this.value - this.min)
    document.getElementById('Popup_label_Linkedin').innerHTML = value_popup;

    console.log(Popup_label_Linkedin)


}
// Twitter
function painting_slider_Twitter() {

    var val = (this.value - this.min) / (this.max - this.min);
    var percent = val * 100;
    var gradient = "-webkit-gradient(linear, left top, right top, color-stop(" + percent + "%, #FF9300), color-stop(" + percent + "%, #EFEFEF))"

    this.style.background = gradient;

    var cals = percent - 150 / 100;
    var cal = " " + cals + "%";
    PopupTwitter.style.marginLeft = cal;


    var value_popup = (this.value - this.min)
    document.getElementById('Popup_label_Twitter').innerHTML = value_popup;

    console.log(Popup_label_Twitter)

    console.log(cal)
}

// Facebook slider
function btnFacebook() {
    var btnFacebook = document.getElementById('containerQuotation_parent--facebook')
    if (btnformFacebook.checked == true) {
        btnFacebook.style.display = 'block'
        console.log(btnFacebook)
    } else {
        btnFacebook.style.display = 'none'
    }
}

//Instagram slider
function btnInstagram() {
    var btnInstagram = document.getElementById('containerQuotation_parent--Instagram')
    if (btnformInstagram.checked == true) {
        btnInstagram.style.display = 'block'
        console.log(btnFacebook)
    } else {
        btnInstagram.style.display = 'none'
    }
}

//Linkedin slider
function btnLinkedin() {
    var btnLinkedin = document.getElementById('containerQuotation_parent--Linkedin')
    if (btnformLinkedin.checked == true) {
        btnLinkedin.style.display = 'block'
        console.log(btnFacebook)
    } else {
        btnLinkedin.style.display = 'none'
    }
}

//Twitter slider
function btnTwitter() {
    var btnTwitter = document.getElementById('containerQuotation_parent--Twitter')
    if (btnformTwitter.checked == true) {
        btnTwitter.style.display = 'block'
        console.log(btnFacebook)
    } else {
        btnTwitter.style.display = 'none'
    }
}


// facebook
var Popup = document.getElementById('Popup')
var Popup_label = document.getElementById('Popup_label')
var slider = document.getElementById("slider");
slider.addEventListener('input', painting_slider_facebook);

// Instagram
var PopupInstagram = document.getElementById('PopupInstagram')
var Popup_label_Instagram = document.getElementById('Popup_label_Instagram')
var sliderInstagram = document.getElementById("sliderInstagram");
sliderInstagram.addEventListener('input', painting_slider_instagram);

// Linkedin
var PopupLinkedin = document.getElementById('PopupLinkedin')
var Popup_label_Linkedin = document.getElementById('Popup_label_Linkedin')
var sliderLinkedin = document.getElementById("sliderLinkedin");
sliderLinkedin.addEventListener('input', painting_slider_Linkedin);

// Twitter
var PopupTwitter = document.getElementById('PopupTwitter')
var Popup_label_Twitter = document.getElementById('Popup_label_Twitter')
var sliderTwitter = document.getElementById("sliderTwitter");
sliderTwitter.addEventListener('input', painting_slider_Twitter);

// ------------------------------------------------------------------------------

// Facebook slider
var btnformFacebook = document.getElementById('btnFacebook')
btnformFacebook.addEventListener('click', btnFacebook)

//Instagram slider
var btnformInstagram = document.getElementById('btnInstagram')
btnformInstagram.addEventListener('click', btnInstagram)

//Linkedin slider
var btnformLinkedin = document.getElementById('btnLinkedin')
btnformLinkedin.addEventListener('click', btnLinkedin)

//Twitter slider
var btnformTwitter = document.getElementById('btnTwitter')
btnformTwitter.addEventListener('click', btnTwitter)