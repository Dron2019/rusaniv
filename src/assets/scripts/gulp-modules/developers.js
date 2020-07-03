const WIDTH = window.screen.width;

$('.projects-slider').on('init', (e, t) => {
    // console.log(e, t);
    document.querySelector('.projects .total').innerHTML = t.slideCount;
})
$('.projects-slider').on('beforeChange', (e, t, f) => {
    // console.log(e, t, f);
    document.querySelector('.projects .current').innerHTML = f + 1;
    console.log(t);

    document.querySelector('.slide-title-show').innerHTML = document.querySelector('.slick-active:not(li)').dataset.project;
    console.log(document.querySelector('.slick-active'));

})

$('.projects-slider').slick({
    slide: '.project-slide',
    nextArrow: '.developers-arrow-js',
    prevArrow: false,
    fade: true,
    adaptiveHeight: false,
    responsive: [{
        breakpoint: 769,
        settings: {
            slide: '.project-slide',
            nextArrow: '#developers  .next',
            prevArrow: '#developers  .prev',
            appendDots: '#developers .dots',
            dots: true
        }
    }, ],
});


/**********************************/
/*
 * mobile elements move start
 */
if (WIDTH < 576) {

    let $sliderNumbers = document.querySelector('.projects .slider-numbers'),
        $sliderArrowsBlock = document.querySelector('.projects .mobile-arrows'),
        $projectBlock = document.querySelector('.projects'),
        $slideTitleShow = document.querySelector('.slide-title-show');
    $sliderArrowsBlock.classList.remove('white');
    $sliderArrowsBlock.prepend($sliderNumbers);
    $projectBlock.append($slideTitleShow);
    $projectBlock.append($sliderArrowsBlock);
}
/*
 * mobile elements move end
 */
/**********************************/