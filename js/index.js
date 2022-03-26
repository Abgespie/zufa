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
