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
var calfa

function painting_slider_facebook() {

    var val = (this.value - this.min) / (this.max - this.min);
    var percent = val * 100;
    var gradient = "-webkit-gradient(linear, left top, right top, color-stop(" + percent + "%, #FF9300), color-stop(" + percent + "%, #EFEFEF))"

    this.style.background = gradient;

    var cals = percent - 150 / 100;
    cal = " " + cals + "%";
    Popup.style.marginLeft = cal;


    this.value_popup = (this.value - this.min)
    document.getElementById('Popup_label').textContent = this.value_popup;


}
var value_popups = 0
var value_popupTwitter = 0
var painting_slider_facebook;

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


    value_popups = (this.value - this.min)
    document.getElementById('Popup_label_Linkedin').innerHTML = value_popups;
    sum()
}

var sumTotal = 0


console.log(value_popupTwitter)

function sum() {
    sumTotal = value_popups + 19;
    var containerQuotation_sumlabel = document.querySelector('.containerQuotation_sumlabel').textContent = this.sumTotal;
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


    value_popup = (this.value - this.min)
    document.getElementById('Popup_label_Twitter').innerHTML = value_popup;

    value_popupTwitter = value_popup
    sum()
        // console.log(cal)
}


// hiden form
function funcionFormTextHide() {

    formTextHide.style.display = 'block'
}

// Facebook slider
function btnFacebook() {
    var btnFacebook = document.getElementById('containerQuotation_parent--facebook')
    if (btnformFacebook.checked == true) {
        btnFacebook.style.display = 'block'
        sumHidenFacebook = true;
        hidenTheSlider()
    } else {
        btnFacebook.style.display = 'none'
        sumHidenFacebook = false
        hidenTheSlider()
    }
}
//Instagram slider
function btnInstagram() {
    var btnInstagram = document.getElementById('containerQuotation_parent--Instagram')
    if (btnformInstagram.checked == true) {
        btnInstagram.style.display = 'block'
        sumHidenInstagram = true;
        hidenTheSlider()
            // console.log(btnFacebook)
    } else {
        btnInstagram.style.display = 'none'
            // sumOfNekworks.style.display = 'none'
        sumHidenInstagram = false;
        hidenTheSlider()
    }
}

//Linkedin slider
function btnLinkedin() {
    var btnLinkedin = document.getElementById('containerQuotation_parent--Linkedin')
    if (btnformLinkedin.checked == true) {
        btnLinkedin.style.display = 'block'
        sumHidenLinkedin = true;
        hidenTheSlider()

    } else {
        btnLinkedin.style.display = 'none'
        sumHidenLinkedin = false;
        hidenTheSlider()
    }
}

//Twitter slider
function btnTwitter() {
    var btnTwitter = document.getElementById('containerQuotation_parent--Twitter')
    if (btnformTwitter.checked == true) {
        btnTwitter.style.display = 'block'
        sumHidenTwitter = true;
        hidenTheSlider()
    } else {
        btnTwitter.style.display = 'none'
        sumHidenTwitter = false;
        hidenTheSlider()
    }
}
//     hide the slider

var sumHidenInstagram, sumHidenLinkedin, sumHidenFacebook, sumHidenTwitter;

function hidenTheSlider() {
    if (((sumHidenInstagram === false) & (sumHidenLinkedin === false)) & ((sumHidenFacebook === false) & (sumHidenTwitter === false))) {

        sumOfNekworks.style.display = 'none'
    } else {
        sumOfNekworks.style.display = 'flex'
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
// ----------------------------------------------------------------------------------------------

//    hiden form

var clickform = document.getElementById('clickform');
var formTextHide = document.getElementById('formTextHide');
clickform.addEventListener('click', funcionFormTextHide)


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

// sum Of Nekworks
var sumOfNekworks = document.getElementById('sumOfNekworks')