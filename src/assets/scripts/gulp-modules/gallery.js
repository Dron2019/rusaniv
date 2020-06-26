$('.gallery-slider-js').on('init', (e, t) => {
    // console.log(e, t);
    document.querySelector('#gallery .total').innerHTML = t.slideCount;
})
$('.gallery-slider-js').on('beforeChange', (e, t, f) => {
    // console.log(e, t, f);
    document.querySelector('#gallery .current').innerHTML = f + 1;
})

$('.gallery-slider-js').slick({
    // nextArrow: '.gallery-arrow-js',
    prevArrow: false,
    nextArrow: false,
    fade: true,
    speed: 1000,
});


const arrow = document.querySelector('.gallery-arrow-js');
arrow.dataset.side = `leftSide`
window.addEventListener('mousemove', function(evt) {


    arrow.style.position = `fixed`;
    arrow.style.left = evt.screenX - 50 + 'px';
    arrow.style.top = evt.screenY - 80 + 'px';
    getCursorSide(evt.screenX);
});
const mediumCordValue = document.documentElement.clientWidth / 2;

function getCursorSide(x, y) {
    if (x < (mediumCordValue)) {
        arrow.classList.add('left-side');
        arrow.dataset.side = `leftSide`;
        // switchGallerySlide('leftSide');
    } else {
        arrow.classList.remove('left-side');
        arrow.dataset.side = `rightSide`;
        // switchGallerySlide('rightSide')
    }


};
arrow.addEventListener('click', function(evt) {
    switchGallerySlide(arrow.dataset.side);
});

let navigate = {
    'leftSide': 'slickPrev',
    'rightSide': 'slickNext',
};

function switchGallerySlide(side) {

    console.log(navigate[side]);
    $('.gallery-slider-js').slick(navigate[side]);
    // return navigate.side;
};

function handleArrow() {
    // arrow.style.display = `none`;
}