$('.gallery-slider-js').on('init', (e, t) => {
    // console.log(e, t);
    document.querySelector('#gallery .total').innerHTML = t.slideCount;
});
$('.gallery-slider-js').on('beforeChange', (e, t, f) => {
    console.log(t);
    // document.querySelector('#gallery .current').innerHTML = t.currentSlide + 1;
});
$('.gallery-slider-js').on('afterChange', (slick, currentSlide) => {
    console.log(currentSlide);
    document.querySelector('#gallery .current').innerHTML = currentSlide.currentSlide + 1;
});

$('.gallery-slider-js').slick({
    // nextArrow: '.gallery-arrow-js',
    prevArrow: false,
    nextArrow: false,
    fade: true,
    speed: 1000,
    responsive: [{
        breakpoint: 769,
        settings: {
            nextArrow: '#gallery .next',
            prevArrow: '#gallery .prev',
            appendDots: '#gallery .dots',
            dots: true
        }
    }, ],
});

const mediumCordValue = document.documentElement.clientWidth / 2;
const headBlockYCordValue = 250;
const arrow = document.querySelector('.gallery-arrow-js');

arrow.__proto__.hide = function() {
    this.style.opacity = '0';
    this.style.pointerEvents = 'none';
};
arrow.__proto__.show = function() {
    this.style.opacity = '1';
    this.style.pointerEvents = 'auto';
};
arrow.dataset.side = `leftSide`;

window.addEventListener('mousemove', desktopNavButtonHandler);
if (document.documentElement.clientWidth < 769) {
    window.removeEventListener('mousemove', desktopNavButtonHandler);
    arrow.remove();
}

function desktopNavButtonHandler(evt) {
    arrow.style.position = `fixed`;
    arrow.style.left = evt.screenX - 50 + 'px';
    arrow.style.top = evt.screenY - 80 + 'px';
    // console.log(evt.screenY < headBlockYCordValue);
    getCursorSide(evt.screenX);
    hideArrowOnHeaderBlock(evt.screenY);
}


function hideArrowOnHeaderBlock(yCord) {
    if (yCord < headBlockYCordValue) {
        arrow.hide();
    } else if (yCord >= headBlockYCordValue) {
        arrow.show();

    }
}

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