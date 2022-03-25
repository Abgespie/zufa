// slick-slider 

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

//

