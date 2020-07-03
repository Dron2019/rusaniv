const WIDTH = window.screen.width;

if (WIDTH < 576) {
    let arrowContainer = document.querySelector('.location-wrapper .arrows-container');
    let dots = document.createElement('div');
    dots.classList.add('dots');
    arrowContainer.classList.add('slider-arrows');
    arrowContainer.querySelector('.previous').insertAdjacentElement('afterEnd', dots);
    $('.location-wrapper__slider').slick({
        slide: '.slide',
        vertical: true,
        nextArrow: '.location-wrapper .next',
        prevArrow: '.location-wrapper .previous',
        swipe: true,
        responsive: [{
            breakpoint: 576,
            settings: {
                vertical: false,
                appendDots: '.location-wrapper .dots',
                dots: true
            }
        }, ],
    })
} else {

    $('.location-wrapper__slider').slick({
        slide: '.slide',
        vertical: true,
        nextArrow: '.location-wrapper .next',
        prevArrow: '.location-wrapper .previous',
        swipe: true,
        responsive: [{
            breakpoint: 576,
            settings: {
                vertical: false,
            }
        }, ],
    })
}