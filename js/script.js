var value_popupTwitter = 0
var sumTotal = 0
var value_popupsLinkedin = 0
var value_popupInstagram = 0
var value_popupFacebook = 0
var moreNetworkSocials = 0
var lessNetworkSocials = 0
var sumphotography = 0


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
    cal = " " + cals + "%";
    Popup.style.marginLeft = cal;


    value_popupFacebook = (this.value - this.min)
    document.getElementById('Popup_label').textContent = value_popupFacebook;
    sum()


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


    value_popupInstagram = (this.value - this.min)
    document.getElementById('Popup_label_Instagram').innerHTML = value_popupInstagram;
    sum()

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


    value_popupsLinkedin = (this.value - this.min)
    document.getElementById('Popup_label_Linkedin').innerHTML = value_popupsLinkedin;
    sum()
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

//  sum Of Nekworks
function sum() {
    sumTotal = value_popupTwitter + value_popupsLinkedin + value_popupInstagram + value_popupFacebook;
    var containerQuotation_sumlabel = document.querySelector('.containerQuotation_sumlabel').textContent = this.sumTotal;

}

//   <!-- ======= Photography or image without design========= -->

function funSumPhotography() {
    sumphotography = moreNetworkSocials + lessNetworkSocials
    photography.textContent = sumphotography
    photography.textContent = sumphotography

}

function functionmoreNetworkSocial() {
    moreNetworkSocials++
    funSumPhotography()
}

function functionlessNetworkSocial() {
    if (sumphotography >= 1) {
        lessNetworkSocials--
        funSumPhotography()
    }
}

var sumflatGraphicPiece = 0
    // <!-- ======= Flat graphic piece========= -->

function funSumPhotography() {
    sumflatGraphicPiece = moreNetworkSocials + lessNetworkSocials
    flatGraphicPiece.textContent = sumflatGraphicPiece
    flatGraphicPiece.textContent = sumflatGraphicPiece

}

function funMoreflatgraphicNetworkSocial() {
    moreNetworkSocials++
    funSumPhotography()
}

function funLessflatgraphicNetworkSocial() {
    if (sumphotography >= 1) {
        lessNetworkSocials--
        funSumPhotography()
    }
}


// facebook
const Popup = document.getElementById('Popup')
const Popup_label = document.getElementById('Popup_label')
const slider = document.getElementById("slider");
slider.addEventListener('input', painting_slider_facebook);

// Instagram
const PopupInstagram = document.getElementById('PopupInstagram')
const Popup_label_Instagram = document.getElementById('Popup_label_Instagram')
const sliderInstagram = document.getElementById("sliderInstagram");
sliderInstagram.addEventListener('input', painting_slider_instagram);

// Linkedin
const PopupLinkedin = document.getElementById('PopupLinkedin')
const Popup_label_Linkedin = document.getElementById('Popup_label_Linkedin')
const sliderLinkedin = document.getElementById("sliderLinkedin");
sliderLinkedin.addEventListener('input', painting_slider_Linkedin);

// Twitter
const PopupTwitter = document.getElementById('PopupTwitter')
const Popup_label_Twitter = document.getElementById('Popup_label_Twitter')
const sliderTwitter = document.getElementById("sliderTwitter");
sliderTwitter.addEventListener('input', painting_slider_Twitter);
// ----------------------------------------------------------------------------------------------

//    hiden form

const clickform = document.getElementById('clickform');
const formTextHide = document.getElementById('formTextHide');
clickform.addEventListener('click', funcionFormTextHide)


// Facebook slider
const btnformFacebook = document.getElementById('btnFacebook')
btnformFacebook.addEventListener('click', btnFacebook)

//Instagram slider
const btnformInstagram = document.getElementById('btnInstagram')
btnformInstagram.addEventListener('click', btnInstagram)

//Linkedin slider
const btnformLinkedin = document.getElementById('btnLinkedin')
btnformLinkedin.addEventListener('click', btnLinkedin)

//Twitter slider
const btnformTwitter = document.getElementById('btnTwitter')
btnformTwitter.addEventListener('click', btnTwitter)

// sum Of Nekworks
const sumOfNekworks = document.getElementById('sumOfNekworks')


// Reparticion de las redes sociales

const flatGraphicPiece = document.getElementById('flatGraphicPiece');
const animatedGraphicPiece = document.getElementById('animatedGraphicPiece');
const gifs = document.getElementById('gifs');

// buttons for number of photo publications
const moreNetworkSocial = document.getElementById('moreNetworkSocial')
moreNetworkSocial.addEventListener('click', functionmoreNetworkSocial)
const lessNetworkSocial = document.getElementById('lessNetworkSocial')
lessNetworkSocial.addEventListener('click', functionlessNetworkSocial)

//buttons for quantity of publications of graphic pieces
const moreflatgraphicNetworkSocial = document.getElementById('moreflatgraphicNetworkSocial')
moreflatgraphicNetworkSocial.addEventListener('click', funMoreflatgraphicNetworkSocial)
const lessflatgraphicNetworkSocial = document.getElementById('lessflatgraphicNetworkSocial')
lessflatgraphicNetworkSocial.addEventListener('click', funLessflatgraphicNetworkSocial)


const remainingPosts = document.getElementById('remainingPosts')