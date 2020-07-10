const WINDOW_WIDTH = window.screen.width;

if (WINDOW_WIDTH > 576) {
    $('.slider').on('init', () => {
        document.querySelector('.slick-track').style.height = getComputedStyle(document.querySelector('.slick-track')).height;
    })
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

}


if (WINDOW_WIDTH < 576) {
    let breadCrumbLink = document.querySelector('.breadcrumbs-wrapper .link-standart'),
        documentsPage = document.querySelector('.documents-page');
    breadCrumbLink.classList.add('transfered-js');
    documentsPage.append(breadCrumbLink);
}