var advSlider = $('.advantage-slider-js');
$('.advantage-slider-js').on('init', (slick) => {
    console.log(slick);
    transformSlickTrack();
    alignSlides('.advantage-slide');
});
$('.advantage-slider-js').on('beforeChange', (slick, r, current, next) => {
    console.log(next);
    switchDot(next);
    // transformSlickTrack();
});
$('.advantage-slider-js').slick({
    arrows: false,
    speed: 1500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    infinite: false,
    responsive: [{
            breakpoint: 769,
            settings: {
                variableWidth: true,
                slidesToShow: 1.5,
                centerMode: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1,
                speed: 750,
                variableWidth: true,
            }
        }
    ]
});

function alignSlides(selector) {
    let maxArray = [];
    document.querySelectorAll(selector).forEach((el) => {
        maxArray.push(+getComputedStyle(el).height.replace(/px/, ''));
    });
    console.log(maxArray);
    maxArray = Math.max.apply(null, maxArray);
    for (i = 1; i < document.querySelectorAll(selector).length; i++) {
        document.querySelectorAll(selector)[i].style.height = `${maxArray}px`;
    }


}

function transformSlickTrack() {
    document.querySelector('.slick-track').style.position = `relative`;
    // let slickSlideWidth = +getComputedStyle(document.querySelector('.slick-slide')).width.replace(/px/, '');
    let slickSlideWidth = +document.querySelector('.slick-slide').getAttribute('style').split(';')[0].replace(/[^0-9]|/gi, '');
    if (window.screen.width > 575) document.querySelector('.slick-track').style.left = -(slickSlideWidth * 2) * 0.5 + 'px';


    console.log();
}

function changePseudoProperties(container, cssText, pseudoType) {
    let containerSelector = '';
    if (pseudoType === undefined) {
        console.warn(`Pseudo element is not defined, ${changePseudoProperties.name} is stopping`);
        return;
    }
    if (typeof container === 'string') {
        containerSelector = container;
        container = document.querySelector(container);
    } else {
        containerSelector = `.${container.classList[0]}`;
    }
    let style = document.createElement('style');
    style.innerHTML = `
    ${containerSelector}:${pseudoType}{
        ${cssText}
    } `;
    container.append(style);
}

function switchDot(slideIndex) {
    if (+slideIndex === 0) return;
    let dotsContainer = document.querySelector('.navigation');
    if (document.querySelector('.advantage-slider style') === null && window.screen.width < 576) {
        changePseudoProperties('.advantage-slider', 'opacity:0', 'after');

    }
    if (window.screen.width > 575) changePseudoProperties('.advantage-slider', 'opacity:1', 'before');
    dotsContainer.querySelector('.active').classList.remove('active');
    dotsContainer.querySelector(`[data-dot-index="${slideIndex}"]`).classList.add('active');
}

document.querySelectorAll('.navigation-dot').forEach(dot => {
    dot.addEventListener('click', () => {
        advSlider[0].slick.slickGoTo(+dot.dataset.dotIndex);
        switchDot(+dot.dataset.dotIndex);
    });
});