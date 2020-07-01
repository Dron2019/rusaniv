$('.slider').slick({
    slidesToShow: 3,
    nextArrow: '.slider-arrows .next',
    prevArrow: '.slider-arrows .prev',
    dots: true,
    appendDots: '.slider-arrows .dots',
    responsive: [{
        breakpoint: 769,
        settings: {
            // rows: 2,
            // slidesPerRow: 2,
            slidesToShow: 2,
        }
    }, ]
});