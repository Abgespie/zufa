// reviews slick-slider 

$('.reviews-slider').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '-10px',
    draggable: false,
    prevArrow: '<div class="reviews-slider-arrowPrev"><img src="img/reviews/arrow-left.svg" alt="" class="reviews-slider-arrowPrev__img"></div>',
    nextArrow: '<div class="reviews-slider-arrowNext"><img src="img/reviews/arrow-right.svg" alt="" class="reviews-slider-arrowNext__img"></div>',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,

    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: false,
            draggable: true,
        }
        }
    ]
});

// age-video

$('.age-box-content-video-play').on("click", function() {
    $('.age-box-content-video-play').addClass("age-box-content-video__video--none");
    $('.age-box-content-video__img').addClass("age-box-content-video__video--none");
    $('.age-box-content-video__video').removeClass("age-box-content-video__video--none");
});

// questions-list

$('.questions-list-item-marks--1').on("click", function() {
    $('.questions-list-item-marks__vertical--1').toggleClass("questions-list-item-marks__vertical--none");
    $('.questions-list-item__desc--1').toggleClass("questions-list-item__desc--closed");
    $('.questions-list-item--1').toggleClass("questions-list-item--closed");
    $('.questions-list-item--1').toggleClass("questions-list-item-active");
});

$('.questions-list-item-marks--2').on("click", function() {
    $('.questions-list-item-marks__vertical--2').toggleClass("questions-list-item-marks__vertical--none");
    $('.questions-list-item__desc--2').toggleClass("questions-list-item__desc--closed");
    $('.questions-list-item--2').toggleClass("questions-list-item--closed");
    $('.questions-list-item--2').toggleClass("questions-list-item-active");
});

$('.questions-list-item-marks--3').on("click", function() {
    $('.questions-list-item-marks__vertical--3').toggleClass("questions-list-item-marks__vertical--none");
    $('.questions-list-item__desc--3').toggleClass("questions-list-item__desc--closed");
    $('.questions-list-item--3').toggleClass("questions-list-item--closed");
    $('.questions-list-item--3').toggleClass("questions-list-item-active");
});

$('.questions-list-item-marks--4').on("click", function() {
    $('.questions-list-item-marks__vertical--4').toggleClass("questions-list-item-marks__vertical--none");
    $('.questions-list-item__desc--4').toggleClass("questions-list-item__desc--closed");
    $('.questions-list-item--4').toggleClass("questions-list-item--closed");
    $('.questions-list-item--4').toggleClass("questions-list-item-active");
});

$('.questions-list-item-marks--5').on("click", function() {
    $('.questions-list-item-marks__vertical--5').toggleClass("questions-list-item-marks__vertical--none");
    $('.questions-list-item__desc--5').toggleClass("questions-list-item__desc--closed");
    $('.questions-list-item--5').toggleClass("questions-list-item--closed");
    $('.questions-list-item--5').toggleClass("questions-list-item-active");
});

$('.questions-list-item-marks--6').on("click", function() {
    $('.questions-list-item-marks__vertical--6').toggleClass("questions-list-item-marks__vertical--none");
    $('.questions-list-item__desc--6').toggleClass("questions-list-item__desc--closed");
    $('.questions-list-item--6').toggleClass("questions-list-item--closed");
    $('.questions-list-item--6').toggleClass("questions-list-item-active");
});

$('.questions-list-item-marks--7').on("click", function() {
    $('.questions-list-item-marks__vertical--7').toggleClass("questions-list-item-marks__vertical--none");
    $('.questions-list-item__desc--7').toggleClass("questions-list-item__desc--closed");
    $('.questions-list-item--7').toggleClass("questions-list-item--closed");
    $('.questions-list-item--7').toggleClass("questions-list-item-active");
});

// scrolls

$('.puzzle-button').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.choose').offset().top
    });
});
$('.header-bottom-nav__desc--catalog').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.choose').offset().top
    });
});
$('.header-bottom-nav__desc--video').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.age').offset().top
    });
});
$('.header-bottom-navn__desc--production').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.production').offset().top
    });
});
$('.header-bottom-nav__desc--reviews').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.reviews').offset().top
    });
});
$('.header-bottom-nav__desc--delivery').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.questions').offset().top
    });
});
$('.production-button--active').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.choose').offset().top
    });
});
$('.footer-nav__main').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.header').offset().top
    });
});
$('.footer-nav__catalog').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.choose').offset().top
    });
});
$('.footer-nav__production').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.production').offset().top
    });
});
$('.footer-nav__reviews').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.reviews').offset().top
    });
});

// popups

let licenseIsFirst = true;
let photosIsFirst = true;
let lookIsFirst = true;

$('.choose-puzzle-content-button').on('click', function() {
    $('.plug').removeClass("popups--none");
    $('body').addClass("body--nonscroll");

    function showPop() {
        $('.plug').removeClass("popups--bright");
        $('.plug-close').removeClass("popups--closed");
        $('.plug-box').removeClass("popups--closed");
    }
    setTimeout(showPop, 10);
});
$('.choose-puzzle-content__more').on('click', function() {
    $('.look').removeClass("popups--none");
    $('body').addClass("body--nonscroll");

    function showPop() {
        $('.look-close').removeClass("popups--closed");
        $('.look-box').removeClass("popups--closed");

        /*if(lookIsFirst) {
            // $('.look-box-content-complect-slider-slide__img').slick({
            //     slidesToShow: 1,
            //     slidesToScroll: 1,
            //     arrows: false,
            //     fade: true,
            //     asNavFor: '.look-box-content-complect-slider'
            // });
            $('.look-box-content-complect-slider').slick({
                infinite: true,
                centerMode: true,
                centerPadding: '150px',
                vertical: true,
                // asNavFor: '.look-box-content-complect-slider-slide__img',
                draggable: false,
                prevArrow: '<div class="look-box-content-complect-slider-arrowPrev"><img src="img/license/arrowPrev.svg" alt="" class="look-box-content-complect-slider-arrowPrev__img"></div>',
                nextArrow: '<div class="look-box-content-complect-slider-arrowNext"><img src="img/license/arrowNext.svg" alt="" class="look-box-content-complect-slider-arrowNext__img"></div>',
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
            
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        draggable: true,
                    }
                    }
                ]
            });
            lookIsFirst = false;
        }*/
        
        $('.look').removeClass("popups--bright");
    }
    setTimeout(showPop, 10);
});
$('.juridical-box-button').on('click', function() {
    $('.plug').removeClass("popups--none");
    $('body').addClass("body--nonscroll");

    function showPop() {
        $('.plug').removeClass("popups--bright");
        $('.plug-close').removeClass("popups--closed");
        $('.plug-box').removeClass("popups--closed");
    }
    setTimeout(showPop, 10);
});
$('.production-button--1').on('click', function() {
    $('.license').removeClass("popups--none");
    $('body').addClass("body--nonscroll");

    function showPop() {
        $('.license-close').removeClass("popups--closed");
        $('.license-box').removeClass("popups--closed");

        if(licenseIsFirst) {
            $('.license-box-slider').slick({
                infinite: true,
                centerMode: true,
                centerPadding: '-10px',
                draggable: false,
                prevArrow: '<div class="license-box-slider-arrowPrev"><img src="img/license/arrowPrev.svg" alt="" class="license-box-slider-arrowPrev__img"></div>',
                nextArrow: '<div class="license-box-slider-arrowNext"><img src="img/license/arrowNext.svg" alt="" class="license-box-slider-arrowNext__img"></div>',
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
            
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        draggable: true,
                    }
                }]
            });
            licenseIsFirst = false;
        }
        $('.license').removeClass("popups--bright");
    }
    setTimeout(showPop, 10);
});
$('.production-button--3').on('click', function() {
    $('.photos').removeClass("popups--none");
    $('body').addClass("body--nonscroll");

    function showPop() {
        $('.photos-close').removeClass("popups--closed");
        $('.photos-box').removeClass("popups--closed");

        if(photosIsFirst) {
            $('.photos-box-slider').slick({
                infinite: true,
                centerMode: true,
                centerPadding: '-10px',
                draggable: false,
                prevArrow: '<div class="photos-box-slider-arrowPrev"><img src="img/license/arrowPrev.svg" alt="" class="photos-box-slider-arrowPrev__img"></div>',
                nextArrow: '<div class="photos-box-slider-arrowNext"><img src="img/license/arrowNext.svg" alt="" class="photos-box-slider-arrowNext__img"></div>',
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
            
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        draggable: true,
                    }
                    }
                ]
            });
            photosIsFirst = false;
        }
        $('.photos').removeClass("popups--bright");
    }
    setTimeout(showPop, 10);
});
$('.reviews-slider-slide-box-content__more').on('click', function() {
    $('.plug').removeClass("popups--none");
    $('body').addClass("body--nonscroll");

    function showPop() {
        $('.plug').removeClass("popups--bright");
        $('.plug-close').removeClass("popups--closed");
        $('.plug-box').removeClass("popups--closed");
    }
    setTimeout(showPop, 10);
});
$('.footer-data__IP').on('click', function() {
    $('.plug').removeClass("popups--none");
    $('body').addClass("body--nonscroll");

    function showPop() {
        $('.plug').removeClass("popups--bright");
        $('.plug-close').removeClass("popups--closed");
        $('.plug-box').removeClass("popups--closed");
    }
    setTimeout(showPop, 10);
});
$('.footer-data__OGRN').on('click', function() {
    $('.plug').removeClass("popups--none");
    $('body').addClass("body--nonscroll");

    function showPop() {
        $('.plug').removeClass("popups--bright");
        $('.plug-close').removeClass("popups--closed");
        $('.plug-box').removeClass("popups--closed");
    }
    setTimeout(showPop, 10);
});
$('.footer-data__confidence').on('click', function() {
    $('.plug').removeClass("popups--none");
    $('body').addClass("body--nonscroll");

    function showPop() {
        $('.plug').removeClass("popups--bright");
        $('.plug-close').removeClass("popups--closed");
        $('.plug-box').removeClass("popups--closed");
    }
    setTimeout(showPop, 10);
});
$('.footer-feedback-button').on('click', function() {
    $('.feedback').removeClass("popups--none");
    $('body').addClass("body--nonscroll");

    function showPop() {
        $('.feedback').removeClass("popups--bright");
        $('.feedback-close').removeClass("popups--closed");
        $('.feedback-box').removeClass("popups--closed");
    }
    setTimeout(showPop, 10);
});
$('.owner-button').on('click', function() {
    $('.feedback').removeClass("popups--none");
    $('body').addClass("body--nonscroll");

    function showPop() {
        $('.feedback').removeClass("popups--bright");
        $('.feedback-close').removeClass("popups--closed");
        $('.feedback-box').removeClass("popups--closed");
    }
    setTimeout(showPop, 10);
});
$('.plug-close').on('click', function() {
    $('.plug').addClass("popups--bright");
    $('.plug-close').addClass("popups--closed");
    $('.plug-box').addClass("popups--closed");
    $('body').removeClass("body--nonscroll");

    function hidePop() {
        $('.plug').addClass("popups--none");
    }
    setTimeout(hidePop, 601);
});
$('.look-close').on('click', function() {
    $('.look').addClass("popups--bright");
    $('.look-close').addClass("popups--closed");
    $('.look-box').addClass("popups--closed");
    $('body').removeClass("body--nonscroll");

    function hidePop() {
        $('.look').addClass("popups--none");
    }
    setTimeout(hidePop, 601);
});
$('.license-close').on('click', function() {
    $('.license').addClass("popups--bright");
    $('.license-close').addClass("popups--closed");
    $('.license-box').addClass("popups--closed");
    $('body').removeClass("body--nonscroll");

    function hidePop() {
        $('.license').addClass("popups--none");
    }
    setTimeout(hidePop, 601);
});
$('.photos-close').on('click', function() {
    $('.photos').addClass("popups--bright");
    $('.photos-close').addClass("popups--closed");
    $('.photos-box').addClass("popups--closed");
    $('body').removeClass("body--nonscroll");

    function hidePop() {
        $('.photos').addClass("popups--none");
    }
    setTimeout(hidePop, 601);
});
$('.feedback-close').on('click', function() {
    $('.feedback').addClass("popups--bright");
    $('.feedback-close').addClass("popups--closed");
    $('.feedback-box').addClass("popups--closed");
    $('body').removeClass("body--nonscroll");

    function hidePop() {
        $('.feedback').addClass("popups--none");
    }
    setTimeout(hidePop, 601);
});
$('.feedback-box-content-button').on('click', function() {
    $('.feedback-box-content__sent').removeClass("feedback-box-content__sent--closed");

    function hidePop() {
        $('.feedback').addClass("popups--bright");
        $('.feedback-close').addClass("popups--closed");
        $('.feedback-box').addClass("popups--closed");
        $('body').removeClass("body--nonscroll");
        $('.feedback-box-content__sent').addClass("feedback-box-content__sent--closed");

        function hidePop() {
            $('.feedback').addClass("popups--none");
        }
        setTimeout(hidePop, 601);
    }
    setTimeout(hidePop, 1201);
});

// look look-box-content-complect image-swap

let currentImg = 1;

$('#look-box-content-complect-prelook-unit--1').on('click', function() {
    if(currentImg != 1) {
        $('.look-box-content-complect-prelook-unit--active').removeClass('look-box-content-complect-prelook-unit--active');
        $('#look-box-content-complect-prelook-unit--1').addClass('look-box-content-complect-prelook-unit--active');

        $('#look-box-content-complect-focus-unit--' + currentImg).addClass('look-box-content-complect-focus-unit--closed');
        $('#look-box-content-complect-focus-unit--1').removeClass('look-box-content-complect-focus-unit--closed');
        currentImg = 1;
    }
});
$('#look-box-content-complect-prelook-unit--2').on('click', function() {
    if(currentImg != 2) {
        $('.look-box-content-complect-prelook-unit--active').removeClass('look-box-content-complect-prelook-unit--active');
        $('#look-box-content-complect-prelook-unit--2').addClass('look-box-content-complect-prelook-unit--active');

        $('#look-box-content-complect-focus-unit--' + currentImg).addClass('look-box-content-complect-focus-unit--closed');
        $('#look-box-content-complect-focus-unit--2').removeClass('look-box-content-complect-focus-unit--closed');
        currentImg = 2;
    }
});
$('#look-box-content-complect-prelook-unit--3').on('click', function() {
    if(currentImg != 3) {
        $('.look-box-content-complect-prelook-unit--active').removeClass('look-box-content-complect-prelook-unit--active');
        $('#look-box-content-complect-prelook-unit--3').addClass('look-box-content-complect-prelook-unit--active');

        $('#look-box-content-complect-focus-unit--' + currentImg).addClass('look-box-content-complect-focus-unit--closed');
        $('#look-box-content-complect-focus-unit--3').removeClass('look-box-content-complect-focus-unit--closed');
        currentImg = 3;
    }
});
$('#look-box-content-complect-prelook-unit--4').on('click', function() {
    if(currentImg != 4) {
        $('.look-box-content-complect-prelook-unit--active').removeClass('look-box-content-complect-prelook-unit--active');
        $('#look-box-content-complect-prelook-unit--4').addClass('look-box-content-complect-prelook-unit--active');

        $('#look-box-content-complect-focus-unit--' + currentImg).addClass('look-box-content-complect-focus-unit--closed');
        $('#look-box-content-complect-focus-unit--4').removeClass('look-box-content-complect-focus-unit--closed');
        currentImg = 4;
    }
});
$('.look-box-content-complect-prelook-arrowPrev').on('click', function() {
    if(currentImg == 1) {
        $('#look-box-content-complect-prelook-unit--1').removeClass('look-box-content-complect-prelook-unit--active');
        $('#look-box-content-complect-prelook-unit--4').addClass('look-box-content-complect-prelook-unit--active');

        $('#look-box-content-complect-focus-unit--4').removeClass('look-box-content-complect-focus-unit--closed');
        $('#look-box-content-complect-focus-unit--1').addClass('look-box-content-complect-focus-unit--closed');
        currentImg = 4;
    }
    else {
        $('#look-box-content-complect-prelook-unit--' + currentImg).removeClass('look-box-content-complect-prelook-unit--active');
        $('#look-box-content-complect-focus-unit--' + currentImg).addClass('look-box-content-complect-focus-unit--closed');
        currentImg--;
        $('#look-box-content-complect-prelook-unit--' + currentImg).addClass('look-box-content-complect-prelook-unit--active');
        $('#look-box-content-complect-focus-unit--' + currentImg).removeClass('look-box-content-complect-focus-unit--closed');
    }
});
$('.look-box-content-complect-prelook-arrowNext').on('click', function() {
    if(currentImg == 4) {
        $('#look-box-content-complect-prelook-unit--4').removeClass('look-box-content-complect-prelook-unit--active');
        $('#look-box-content-complect-prelook-unit--1').addClass('look-box-content-complect-prelook-unit--active');

        $('#look-box-content-complect-focus-unit--1').removeClass('look-box-content-complect-focus-unit--closed');
        $('#look-box-content-complect-focus-unit--4').addClass('look-box-content-complect-focus-unit--closed');
        currentImg = 1;
    }
    else {
        $('#look-box-content-complect-prelook-unit--' + currentImg).removeClass('look-box-content-complect-prelook-unit--active');
        $('#look-box-content-complect-focus-unit--' + currentImg).addClass('look-box-content-complect-focus-unit--closed');
        currentImg++;
        $('#look-box-content-complect-prelook-unit--' + currentImg).addClass('look-box-content-complect-prelook-unit--active');
        $('#look-box-content-complect-focus-unit--' + currentImg).removeClass('look-box-content-complect-focus-unit--closed');
    }
});

// look change look-box-content-complect-pay-sizes

$('.look-box-content-complect-pay-sizes-small').on('click', function() {
    if(!$('.look-box-content-complect-pay-sizes-small').hasClass('look-box-content-complect-pay-sizes--active')) {
        $('.look-box-content-complect-pay-sizes--active').removeClass('look-box-content-complect-pay-sizes--active');
        $('.look-box-content-complect-pay-sizes-small').addClass('look-box-content-complect-pay-sizes--active');
    }
});
$('.look-box-content-complect-pay-sizes-middle').on('click', function() {
    if(!$('.look-box-content-complect-pay-sizes-middle').hasClass('look-box-content-complect-pay-sizes--active')) {
        $('.look-box-content-complect-pay-sizes--active').removeClass('look-box-content-complect-pay-sizes--active');
        $('.look-box-content-complect-pay-sizes-middle').addClass('look-box-content-complect-pay-sizes--active');
    }
});
$('.look-box-content-complect-pay-sizes-extralarge').on('click', function() {
    if(!$('.look-box-content-complect-pay-sizes-extralarge').hasClass('look-box-content-complect-pay-sizes--active')) {
        $('.look-box-content-complect-pay-sizes--active').removeClass('look-box-content-complect-pay-sizes--active');
        $('.look-box-content-complect-pay-sizes-extralarge').addClass('look-box-content-complect-pay-sizes--active');
    }
});

// look count of look-box-content-complect-pay-count

let counter = 1;

function changeCount(counter) {
    counter = document.getElementsByClassName('look-box-content-complect-pay-count-counter-number')[0].value;

    if(counter < 0)
        counter *= -1;

    return counter;
}

$('.look').on('click', function() {
    counter = document.getElementsByClassName('look-box-content-complect-pay-count-counter-number')[0].value;

    if(counter < 0)
        counter *= -1;
});
$('.look-box-content-complect-pay-count-counter__less').on('click', function() {
    counter = changeCount(counter);
    if(counter > 1) {
        counter--; 
        $('.look-box-content-complect-pay-count-counter-number').val(counter);
    }
});
$('.look-box-content-complect-pay-count-counter__more').on('click', function() {
    counter = changeCount(counter);

    counter++; 
    $('.look-box-content-complect-pay-count-counter-number').val(counter);
});


//

/*
//license slick-slider

$('.license-box-slider').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '-10px',
    draggable: false,
    prevArrow: '<div class="license-box-slider-arrowPrev"><img src="img/license/arrowPrev.svg" alt="" class="license-box-slider-arrowPrev__img"></div>',
    nextArrow: '<div class="license-box-slider-arrowNext"><img src="img/license/arrowNext.svg" alt="" class="license-box-slider-arrowNext__img"></div>',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,

    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            draggable: true,
        }
    }]
});

//photos slick-slider

$('.photos-box-slider').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '-10px',
    draggable: false,
    prevArrow: '<div class="photos-box-slider-arrowPrev"><img src="img/license/arrowPrev.svg" alt="" class="photos-box-slider-arrowPrev__img"></div>',
    nextArrow: '<div class="photos-box-slider-arrowNext"><img src="img/license/arrowNext.svg" alt="" class="photos-box-slider-arrowNext__img"></div>',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,

    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            draggable: true,
        }
        }
    ]
});

function hidePop() {
    $('.license-close').addClass("popups--closed");
    $('.license-box').addClass("popups--closed");
    $('.photos-close').addClass("popups--closed");
    $('.photos-box').addClass("popups--closed");

    function hidePop() {
        $('.license').addClass("popups--none");
        $('.photos').addClass("popups--none");
    }
    setTimeout(hidePop, 1);
}
setTimeout(hidePop, 220); */


