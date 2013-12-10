var win;

$.fn.teletype = function(opts){
    var $this = this,
        defaults = {
            animDelay: 50
        },
        settings = $.extend(defaults, opts);

    $.each(settings.text.split(''), function(i, letter){
        setTimeout(function(){
            $this.html($this.html() + letter);
        }, settings.animDelay * i);
    });
};

function leftBoxOpen(left, mid, right, text) {
    right.fadeOut(300);
    mid.fadeOut(400);
    left.delay(400).animate({
        width: '1140px'
    }, 800, "easeOutSine", function () {
        text.fadeIn();
    });
}
function leftBoxClose(left, mid, right, text) {
    text.fadeOut(200);
    left.delay(200).animate({
        width: '350px'
    }, 800, "easeInSine", function () {
        mid.fadeIn(300);
        right.fadeIn(300);
    });
}
function leftBoxAnimate(left, mid, right, text) {
    if (left.css('width') === '350px') {
        leftBoxOpen(left, mid, right, text);
        return true;
    } else {
        leftBoxClose(left, mid, right, text);
        return false;
    };

}


function midBoxOpen(left, leftImg, mid, right, textL, textR) {
    left.animate({
        width: '0px'
    }, { duration: 800, queue: false });
    right.animate({
        width: '0px'
    }, { duration: 800, queue: false });
    // mid.css('margin', 'auto');
    mid .animate({
        'margin-left': '0px',
        'width': '1140px'
    }, { duration: 820, queue: false });
    textL.delay(900).fadeIn();
    textR.delay(900).fadeIn();
}
function midBoxClose(left, leftImg, mid, right, textL, textR) {
    textL.fadeOut();
    textR.fadeOut();
    mid.delay(200).animate({
        width: '350px',
        'margin-left': '45px'
    }, { duration: 800, queue: false });
    left.delay(200).animate({
        width: '350px'
    }, { duration: 800, queue: false });
    right.delay(200).animate({
        width: '350px'
    }, { duration: 800, queue: false });
}
function midBoxAnimate(left, leftImg, mid, right, textL, textR) {
    if (mid.css('width') === '350px') {
        midBoxOpen(left, leftImg, mid, right, textL, textR);
        return true;
    } else {
        midBoxClose(left, leftImg, mid, right, textL, textR);
        return false;
    };
}
function rightBoxOpen (left, mid, right, text) {
    left.fadeOut(300);
    mid.fadeOut(400);
    right.delay(400).animate({
        width: '1140px'
    }, 800, "easeInSine", function () {
        text.fadeIn();
    });
}
function rightBoxClose (left, mid, right, text) {
    text.fadeOut();
    right.animate({width:'350px'}, 800, "easeInSine", function () {
        mid.delay(200).fadeIn(300);
        left.delay(200).fadeIn(300);
    });

}
function rightBoxAnimate (left, mid, right, text) {
    if (right.css('width') === '350px') {
        rightBoxOpen(left, mid, right, text);
        return true;
    } else {
        rightBoxClose(left, mid, right, text);
        return false;
    }
}

$(document).ready(function () {
    var myName = $('#my-name');
    var aboutMe = $('#about-me');
    var myWork = $('#my-work');
    var blog = $('#blog');
    var contact = $('#contact');
    var bod = $('body');
    var sigma = $('#sigma');
    var pd = $('#pd');
    var gf = $('#gf');
    var gfText = $('#gf .work-details');
    var banc = $('#banc');
    var mv = $('#mv');
    var psi = $('#psi');
    var sigImg = $('#sigImg');
    var sigText = $('#sigma .work-details');
    var bancImg = $('#b-r');
    var bancText = $('#banc .work-details');
    var psiImg = $('#psiImg');
    var psiText = $('#psi .work-details');
    var pdTextL = $('#ta-details-left');
    var pdTextR = $('#ta-details-right');
    var mvTextL = $('#gf-details-left');
    var mvTextR = $('#gf-details-right');

    var planetaryLink = $('#planetary-link');
    planetaryLink.click(function (e) {
        
    });

    myName.click(function () {
        bod.animate({
            scrollTop: 0
        }, 1000, "easeOutSine");
    });

    aboutMe.click(function () {
        bod.animate({
            scrollTop: 535
        }, 1000, "easeOutSine");
    });
    myWork.click(function () {
        bod.animate({
            scrollTop: 1485
        }, 1000, "easeOutSine");
    });
    blog.click(function () {
        bod.animate({
            scrollTop: 2435
        }, 1250, "easeOutSine");
    });
    contact.click(function () {
        bod.animate({
            scrollTop: 3385
        }, 1500, "easeOutSine");
    });


    sigma.on('click', function (e) {
        leftBoxAnimate(sigma, pd, gf, sigText);
        e.preventDefault();
    });
    banc.on('click', function (e) {
        leftBoxAnimate(banc, mv, psi, bancText);
        e.preventDefault();
    });
    pd.on('click', function (e) {
        midBoxAnimate(sigma, sigImg, pd, gf, pdTextL, pdTextR);
        e.preventDefault();
    });
    mv.on('click', function (e) {
        midBoxAnimate(banc, bancImg, mv, psi, mvTextL, mvTextR);
        e.preventDefault();
    });
     gf.on('click', function (e) {
        rightBoxAnimate(sigma, pd, gf, gfText);
        e.preventDefault();
    });
    psi.on('click', function (e) {
        rightBoxAnimate(banc, mv, psi, psiText);
        e.preventDefault();
    });
});


// function offset(div){
//     // $('body').scrollTop(div.top);
//     $('body').animate({ scrollTop: div.top - 100 }, 700, "easeOutExpo");
// }