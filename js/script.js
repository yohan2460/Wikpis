var sumHidenInstagram, sumHidenLinkedin, sumHidenFacebook, sumHidenTwitter,
    value_popupTwitter = 0,
    sumTotal = 0,
    value_popupsLinkedin = 0,
    value_popupInstagram = 0,
    value_popupFacebook = 0,
    moreNetworkSocials = 0,
    lessNetworkSocials = 0,
    lessFlatgraphicNetworkSocials = 0,
    moreFlatgraphicNetworkSocials = 0,
    sumphotography = 0,
    sumflatGraphicPiece = 0,
    sumAnimatedGraphicPiece = 0,
    sumGifs = 0,
    moreAnimatedgraphicNetworkSocials = 0,
    lessAnimatedgraphicNetworkSocials = 0,
    moreGIFS = 0,
    value_FollowersInstagram = 0,
    value_FollowerFacebook = 0,
    value_FollowerTwitter = 0,
    value_FollowerLinkedin = 0,
    lessGIFS = 0,
    // fotografia
    moreNumberPhotograph = 0,
    lessNumberPhotograph = 0,
    sumNumberphotography = 0,
    sumAccompanyingHours = 0,
    moreAccompanyingHours = 0,
    moresumAccompanyingHours = 0,
    value_Accompaniment = 0,

    lessAccompanyingHours = 0;
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
    const FollowerFacebook = document.getElementById('FollowerFacebook')

    if (btnformFacebook.checked == true) {
        btnFacebook.style.display = 'block'
        FollowerFacebook.style.display = 'flex'
        sumHidenFacebook = true;
        hidenTheSlider()

    } else {
        btnFacebook.style.display = 'none'
        FollowerFacebook.style.display = 'none'
        sumHidenFacebook = false
        hidenTheSlider()
    }
}







//Instagram slider
function btnInstagram() {
    var btnInstagram = document.getElementById('containerQuotation_parent--Instagram')
    const FollowersInstagram = document.getElementById('FollowersInstagram')
    if (btnformInstagram.checked == true) {
        btnInstagram.style.display = 'block'
        FollowersInstagram.style.display = 'flex'
        sumHidenInstagram = true;
        hidenTheSlider()
    } else {
        btnInstagram.style.display = 'none'
        FollowersInstagram.style.display = 'none'
        sumHidenInstagram = false;
        hidenTheSlider()
    }
}

//Linkedin slider
function btnLinkedin() {
    const btnLinkedin = document.getElementById('containerQuotation_parent--Linkedin')
    const FollowerLinkedin = document.getElementById('FollowerLinkedin')
    if (btnformLinkedin.checked == true) {
        btnLinkedin.style.display = 'block'
        FollowerLinkedin.style.display = 'flex'
        sumHidenLinkedin = true;
        hidenTheSlider()

    } else {
        btnLinkedin.style.display = 'none'
        FollowerLinkedin.style.display = 'none'
        sumHidenLinkedin = false;
        hidenTheSlider()
    }
}

//Twitter slider
function btnTwitter() {
    const btnTwitter = document.getElementById('containerQuotation_parent--Twitter')
    const FollowerTwitter = document.getElementById('FollowerTwitter')
    if (btnformTwitter.checked == true) {
        btnTwitter.style.display = 'block'
        FollowerTwitter.style.display = 'flex'
        sumHidenTwitter = true;
        hidenTheSlider()
    } else {
        btnTwitter.style.display = 'none'
        FollowerTwitter.style.display = 'none'
        sumHidenTwitter = false;
        hidenTheSlider()
    }
}
//     hide the slider


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
    sumNekworkSocial()
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

// <!-- ======= Flat graphic piece========= -->

function funSumGraphic() {
    sumflatGraphicPiece = moreFlatgraphicNetworkSocials + lessFlatgraphicNetworkSocials
    flatGraphicPiece.textContent = sumflatGraphicPiece
    flatGraphicPiece.textContent = sumflatGraphicPiece
    sumNekworkSocial()
}

function funMoreflatgraphicNetworkSocial() {
    moreFlatgraphicNetworkSocials++
    funSumGraphic()
}

function funLessflatgraphicNetworkSocial() {
    if (sumflatGraphicPiece >= 1) {
        lessFlatgraphicNetworkSocials--
        funSumGraphic()
    }
}
// <!-- ======= Animated graphic piece========= -->

function funSumAnimated() {
    sumAnimatedGraphicPiece = moreAnimatedgraphicNetworkSocials + lessAnimatedgraphicNetworkSocials
    animatedGraphicPiece.textContent = sumAnimatedGraphicPiece
    animatedGraphicPiece.textContent = sumAnimatedGraphicPiece
    sumNekworkSocial()
}

function funMoreAnimatedGraphicPiece() {
    moreAnimatedgraphicNetworkSocials++
    funSumAnimated()
}

function funlessAnimatedGraphicPiece() {
    if (sumAnimatedGraphicPiece >= 1) {
        lessAnimatedgraphicNetworkSocials--
        funSumAnimated()
    }
}

// <!-- ======= GIFS========= -->

function funSumGifs() {
    sumGifs = moreGIFS + lessGIFS
    gifs.textContent = sumGifs
    gifs.textContent = sumGifs
    sumNekworkSocial()
}

function funMoreGifs() {
    moreGIFS++
    funSumGifs()
}

function funLessGifs() {
    if (sumGifs >= 1) {
        lessGIFS--
        funSumGifs()
    }
}
var sumTotalNekworkSocial = 0;

function sumNekworkSocial() {
    sumTotalNekworkSocial = sumGifs + sumAnimatedGraphicPiece + sumphotography + sumflatGraphicPiece;
    var y = sumTotal - sumTotalNekworkSocial;
    console.log(y)
    if (y >= 0 & y < sumTotal) {
        remainingPosts.textContent = y
    }

}
//   ============= number of current followers  instagram============ 

function funNumFollowersInstagram() {

    var val = (this.value - this.min) / (this.max - this.min);
    var percent = val * 100;
    var gradient = "-webkit-gradient(linear, left top, right top, color-stop(" + percent + "%, #FF9300), color-stop(" + percent + "%, #EFEFEF))"

    this.style.background = gradient;

    var cals = percent - 150 / 100;
    var cal = " " + cals + "%";
    PopupFollowersInstagram.style.marginLeft = cal;


    value_FollowersInstagram = (this.value - this.min)
    document.getElementById('Popup_label_FollowersInstagram').innerHTML = value_FollowersInstagram;
}
//   ============= number of current followers  facebook============ 

function funnumFollowersFacebook() {

    var val = (this.value - this.min) / (this.max - this.min);
    var percent = val * 100;
    var gradient = "-webkit-gradient(linear, left top, right top, color-stop(" + percent + "%, #FF9300), color-stop(" + percent + "%, #EFEFEF))"

    this.style.background = gradient;

    var cals = percent - 150 / 100;
    var cal = " " + cals + "%";
    PopupFollowersFacebook.style.marginLeft = cal;


    value_FollowerFacebook = (this.value - this.min)
    document.getElementById('Popup_label_FollowersFacebook').innerHTML = value_FollowerFacebook;
}

//   ============= number of current followers  Linkedin============ 

function funNumFollowersLinkedin() {

    var val = (this.value - this.min) / (this.max - this.min);
    var percent = val * 100;
    var gradient = "-webkit-gradient(linear, left top, right top, color-stop(" + percent + "%, #FF9300), color-stop(" + percent + "%, #EFEFEF))"

    this.style.background = gradient;

    var cals = percent - 150 / 100;
    var cal = " " + cals + "%";
    PopupFollowersLinkedin.style.marginLeft = cal;


    value_FollowerLinkedin = (this.value - this.min)
    document.getElementById('Popup_label_FollowersLinkedin').innerHTML = value_FollowerLinkedin;
}
//   ============= number of current followers  Twitter============ 

function funNumFollowersTwitter() {

    var val = (this.value - this.min) / (this.max - this.min);
    var percent = val * 100;
    var gradient = "-webkit-gradient(linear, left top, right top, color-stop(" + percent + "%, #FF9300), color-stop(" + percent + "%, #EFEFEF))"

    this.style.background = gradient;

    var cals = percent - 150 / 100;
    var cal = " " + cals + "%";
    PopupFollowersTwitter.style.marginLeft = cal;


    value_FollowerTwitter = (this.value - this.min)
    document.getElementById('Popup_label_FollowersTwitter').innerHTML = value_FollowerTwitter;
}

//=============== professional photography =============


function funSumNumberPhotograph() {
    sumNumberphotography = moreNumberPhotograph + lessNumberPhotograph
        // console.log(sumNumberphotography)
    numPhotographs.textContent = sumNumberphotography
    numPhotographs.textContent = sumNumberphotography
}

function funMoreNumberPhotographs() {
    moreNumberPhotograph++
    funSumNumberPhotograph()
}

function funLessNumberPhotographs() {
    if (sumNumberphotography >= 1) {
        lessNumberPhotograph--
        funSumNumberPhotograph()
    }
}


function funProfessionalPhotographyNO() {
    if (ProfessionalPhotographyNO.checked === true) {
        hidenNumberPhotographs.style.display = 'none'
        console.log('none')

    }
}

function funProfessionalPhotographyYes() {
    if (ProfessionalPhotographyYes.checked === true) {
        hidenNumberPhotographs.style.display = 'flex'
    }
}

// <!-- ========= Accompaniment in cities ==========-->


function funhidenOtros() {
    if (hidenOtros.checked === true) {
        citiesInput.style.display = 'block'
    } else {
        citiesInput.style.display = 'none'
    }
}
// <!-- =============accompanying hours========== -->


function funSumAccompanyingHours() {
    sumAccompanyingHours = moresumAccompanyingHours + lessAccompanyingHours
        // console.log(sumNumberphotography)
    labelAccompanyingHours.textContent = sumAccompanyingHours
    labelAccompanyingHours.textContent = sumAccompanyingHours
}

function funLessAccompanyingHoursless() {
    if (sumAccompanyingHours >= 1) {
        lessAccompanyingHours--
        funSumAccompanyingHours()
    }
}

function funMoreAccompanyingHourss() {
    moresumAccompanyingHours++
    funSumAccompanyingHours()
}
// 

function funNumPopup_label_PopupAccompaniment() {

    var val = (this.value - this.min) / (this.max - this.min);
    var percent = val * 100;
    var gradient = "-webkit-gradient(linear, left top, right top, color-stop(" + percent + "%, #FF9300), color-stop(" + percent + "%, #EFEFEF))"

    this.style.background = gradient;

    var cals = percent - 150 / 100;
    var cal = " " + cals + "%";
    PopupAccompaniment.style.marginLeft = cal;


    value_Accompaniment = (this.value - this.min)
    document.getElementById('Popup_label_PopupAccompaniment').innerHTML = value_Accompaniment;
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
const sliderLinkedin = document.getElementById("sliderLinkedin"); //ssssssssss
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

//buttons for Animated graphic piece
const moreAnimatedGraphicPiece = document.getElementById('moreAnimatedGraphicPiece')
moreAnimatedGraphicPiece.addEventListener('click', funMoreAnimatedGraphicPiece)
const lessAnimatedGraphicPiece = document.getElementById('lessAnimatedGraphicPiece')
lessAnimatedGraphicPiece.addEventListener('click', funlessAnimatedGraphicPiece)

// buttons for GIFS
const moreGifs = document.getElementById('moregifs')
moreGifs.addEventListener('click', funMoreGifs)
const lessGifs = document.getElementById('lessgifs')
lessGifs.addEventListener('click', funLessGifs)

//
const remainingPosts = document.getElementById('remainingPosts')

// =============== number of current followers Instagram =========

const numFollowersInstagram = document.getElementById('numFollowersInstagram')
const PopupFollowersInstagram = document.getElementById('PopupFollowersInstagram')
const FollowersInstagram = document.getElementById('FollowersInstagram')
numFollowersInstagram.addEventListener('input', funNumFollowersInstagram)

// =============== number of current followers facebook =========

const PopupFollowersFacebook = document.getElementById('PopupFollowersFacebook')
const numFollowersFacebook = document.getElementById('numFollowersFacebook')
numFollowersFacebook.addEventListener('input', funnumFollowersFacebook)

// =============== number of current followers Linkedin =========

const PopupFollowersLinkedin = document.getElementById('PopupFollowersLinkedin')
const numFollowersLinkedin = document.getElementById('numFollowersLinkedin')
numFollowersLinkedin.addEventListener('input', funNumFollowersLinkedin)

// =============== number of current followers Twitter =========

const PopupFollowersTwitter = document.getElementById('PopupFollowersTwitter')
const numFollowersTwitter = document.getElementById('numFollowersTwitter')
numFollowersTwitter.addEventListener('input', funNumFollowersTwitter)

//checkbox yes o no of professional photography
const ProfessionalPhotographyNO = document.getElementById('ProfessionalPhotographyNO')
ProfessionalPhotographyNO.addEventListener('click', funProfessionalPhotographyNO)
const ProfessionalPhotographyYes = document.getElementById('ProfessionalPhotographyYes')
ProfessionalPhotographyYes.addEventListener('click', funProfessionalPhotographyYes)


// =============== professional photography =============
const moreNumberPhotographs = document.getElementById('moreNumberPhotographs')
moreNumberPhotographs.addEventListener('click', funMoreNumberPhotographs)
const lessNumberPhotographs = document.getElementById('lessNumberPhotographs')
lessNumberPhotographs.addEventListener('click', funLessNumberPhotographs)
const numPhotographs = document.getElementById('numPhotographs')

const hidenNumberPhotographs = document.getElementById('hidenNumberPhotographs')

//<!-- ========= Accompaniment in cities ==========-->
const hidenOtros = document.getElementById('hidenOtros')
hidenOtros.addEventListener('click', funhidenOtros)
const citiesInput = document.getElementById('citiesInput')


//  <!-- =============accompanying hours========== -->
const moreAccompanyingHourss = document.getElementById('moreAccompanyingHourss')
moreAccompanyingHourss.addEventListener('click', funMoreAccompanyingHourss)
const lessAccompanyingHoursless = document.getElementById('lessAccompanyingHoursless')
lessAccompanyingHoursless.addEventListener('click', funLessAccompanyingHoursless)
const labelAccompanyingHours = document.getElementById('labelAccompanyingHours')


// ======================investment==============
const PopupAccompaniment = document.getElementById('PopupAccompaniment')
const Accompanimenthiden = document.getElementById('Accompanimenthiden')
pauta.addEventListener('click', funPautahiden)
const numPopup_label_PopupAccompaniment = document.getElementById('numPopup_label_PopupAccompaniment')
numPopup_label_PopupAccompaniment.addEventListener('input', funNumPopup_label_PopupAccompaniment)
pauta = document.getElementById('pauta')

function funPautahiden() {
    if (pauta.checked == true) {
        Accompanimenthiden.style.display = 'flex'
    } else {

        Accompanimenthiden.style.display = 'none'
    }
}