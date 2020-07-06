const WIDTH = window.screen.width;

$('.projects-slider').on('init', (e, t) => {
    // console.log(e, t);
    document.querySelector('.projects .total').innerHTML = t.slideCount;
    document.querySelector('.projects .current').innerHTML = 1;
})
$('.projects-slider').on('afterChange', (e, t, f) => {
    // console.log(e, t, f);
    document.querySelector('.projects .current').innerHTML = f + 1;
    console.log(t);

    document.querySelector('.slide-title-show').innerHTML = document.querySelector('.slick-active:not(li)').dataset.project;
    console.log(document.querySelector('.slick-active'));

})

let projectSlickSlider = $('.projects-slider').slick({
    slide: '.project-slide',
    nextArrow: '.developers-arrow-js',
    prevArrow: false,
    // fade: true,
    adaptiveHeight: false,
    speed: 1200,
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

const sliderArrow = document.querySelector('.developers-arrow-js'),
    sliderBlock = document.querySelector('.projects-slider');
let sliderBlockWidth = +getComputedStyle(sliderBlock).width.replace(/px/, '');
let arrowTransformation = {
    left: `rotate(180deg)`,
    right: `rotate(0deg)`
};
let sliderSwitch = {
    left: function() { projectSlickSlider.slick('slickPrev') },
    right: function() { projectSlickSlider.slick('slickNext') },
};


function rotateArrow(arrow, evtCords) {
    arrow.style.cssText = `position:fixed; top:${sliderBlock.getBoundingClientRect().top +  evtCords.layerY - 30}px;
    left:${sliderBlock.getBoundingClientRect().left +  evtCords.layerX - 30}px`;
    if (sliderBlockWidth / 2 > evtCords.layerX) {
        sliderArrow.style.transform = arrowTransformation.left;
        sliderArrow.position = `left`;
    } else {
        sliderArrow.style.transform = arrowTransformation.right;
        sliderArrow.position = `right`;
    }
}



sliderBlock.addEventListener('mousemove', function(evt) {
    rotateArrow(sliderArrow, evt);
    console.log(sliderArrow.position);
});

sliderBlock.addEventListener('mousedown', function(evt) {
    sliderArrow.style.transition = 'transform 1s';
    sliderArrow.style.transform = `${arrowTransformation[sliderArrow.position]} scale(1.2)`;
});
sliderBlock.addEventListener('mouseout', function(evt) {
    sliderArrow.style.opacity = 0;
});

sliderBlock.addEventListener('click', function(evt) {
    // console.log(sliderArrow.position);
    sliderSwitch[sliderArrow.position]();
    // console.log(sliderSwitch[sliderArrow.position]);

    // sliderSwitch[sliderArrow.position]()

    // console.log(sliderBlockWidth / 2 > evt.layerX);
    // console.log(evt);

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