const WINDOW_WIDTH = window.screen.width;

if (WINDOW_WIDTH > 576) {
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