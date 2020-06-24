var advSlider = $('.advantage-slider-js');
$('.advantage-slider-js').on('init', (slick) => {
    console.log(slick);
    transformSlickTrack();
});
$('.advantage-slider-js').on('beforeChange', (slick, r, current, next) => {
    console.log(next);
    switchDot(next);
    // transformSlickTrack();
});
$('.advantage-slider-js').slick({
    arrows: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    infinite: false,
});

function transformSlickTrack() {
    document.querySelector('.slick-track').style.position = `relative`;
    // let slickSlideWidth = +getComputedStyle(document.querySelector('.slick-slide')).width.replace(/px/, '');
    let slickSlideWidth = +document.querySelector('.slick-slide').getAttribute('style').split(';')[0].replace(/[^0-9]|/gi, '');
    console.log(slickSlideWidth);
    document.querySelector('.slick-track').style.left = -(slickSlideWidth * 2) * 0.5 - 40 + 'px';
    console.log();
}

function switchDot(slideIndex) {
    if (+slideIndex === 0) return;
    let dotsContainer = document.querySelector('.navigation');
    dotsContainer.querySelector('.active').classList.remove('active');
    dotsContainer.querySelector(`[data-dot-index="${slideIndex}"]`).classList.add('active');
}

document.querySelectorAll('.navigation-dot').forEach(dot => {
    dot.addEventListener('click', () => {
        advSlider[0].slick.slickGoTo(+dot.dataset.dotIndex);
        switchDot(+dot.dataset.dotIndex);
    });
})