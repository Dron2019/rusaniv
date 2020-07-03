const $sections = document.querySelectorAll('.build-section-js'),
    $sectionsNavList = document.querySelectorAll('.section-choose-js li'),
    sectionContainer = document.querySelector('.build-sections-wrap-js'),
    sectionNavContainer = document.querySelector('.section-choose-js'),
    WIDTH = window.screen.width;
// console.log(sectionContainer.querySelector('.active'));
$sectionsNavList.forEach(section => {
        section.addEventListener('click', function(evt) {
            sectionContainer.querySelector('.build-section-js.active').classList.remove('active');
            sectionContainer.querySelector(`[data-section="${section.dataset.section}"]`).classList.add('active');
            sectionNavContainer.querySelector('li.active').classList.remove('active');
            sectionNavContainer.querySelector(`li[data-section="${section.dataset.section}"]`).classList.add('active');

        });
    })
    // console.log($sections);

let sectionSliders = {};
$sections.forEach(buildSection => {
    let thisSectionSelector = `.build-section-js[data-section="${buildSection.dataset.section}"]`;

    handleSectionSliderFilter(buildSection);
    $(`${thisSectionSelector} .build-progress-section-slider`).on('init', (init, init1) => {
        document.querySelector(`${thisSectionSelector} .slider-numbers .total`).innerHTML = init1.slideCount;
    });
    $(`${thisSectionSelector} .build-progress-section-slider`).on('reInit', (init, init1) => {
        document.querySelector(`${thisSectionSelector} .slider-numbers .total`).innerHTML = init1.slideCount;
    });

    sectionSliders[`slider${buildSection.dataset.section}`] = $(`${thisSectionSelector} .build-progress-section-slider`).slick({
        nextArrow: `${thisSectionSelector} .slider-arrows .next`,
        prevArrow: `${thisSectionSelector} .slider-arrows .prev`,
        dots: true,
        appendDots: `${thisSectionSelector}  .slider-arrows .dots`,
        infinite: false,
        speed: 1000,
    });

    sectionSliders[`slider${buildSection.dataset.section}`].on('beforeChange', (slick, slick1, cur, next) => {
        // document.querySelector(`${thisSectionSelector} [data-slick-index='${cur}']`).classList.add('exit-slide-animate');
        // document.querySelector(`${thisSectionSelector} [data-slick-index='${cur}']`).addEventListener('animationend', function(evt) {
        //     evt.target.classList.remove('exit-slide-animate');
        // });
        if (WIDTH < 576) {
            document.querySelector(`${thisSectionSelector} .slider-numbers .current`).innerHTML = next + 1;
        }
    });
    // console.log(sectionSliders);
});



/**Фильтрация слайдер в секции по гадом и месяцам */

// $yearsWrapper = document.querySelector('.years-slider');

function handleSectionSliderFilter($yearsWrapper) {
    let currentFilterData = {
        month: '',
        year: '',
    }
    $yearsWrapper.querySelectorAll('.years-slider li').forEach((year, ind) => {
        year.dataset.index = ind;
        // console.log(ind);

        year.addEventListener('click', function(evt) {
            $yearsWrapper.querySelector('.years-slider li.active').classList.remove('active');
            year.classList.add('active');
            setCurrentFilterDate(evt.target)
        });
    });
    $yearsWrapper.querySelector('.years-arrows .next').addEventListener('click', function(evt) {
        let currentActiveIndex = +$yearsWrapper.querySelector('.years-slider li.active').dataset.index;
        let nextActiveIndex = 0;
        nextActiveIndex = currentActiveIndex + 1;
        if (currentActiveIndex === ($yearsWrapper.querySelectorAll('.years-slider  li').length - 1)) nextActiveIndex = 0;
        $yearsWrapper.querySelector('.years-slider li.active').classList.remove('active');
        $yearsWrapper.querySelector(`.years-slider li[data-index='${nextActiveIndex}']`).classList.add('active');
        setCurrentFilterDate(evt.target)
    });
    $yearsWrapper.querySelector('.years-arrows .prev').addEventListener('click', function(evt) {
        let currentActiveIndex = +$yearsWrapper.querySelector('.years-slider li.active').dataset.index;
        let nextActiveIndex = 0;
        nextActiveIndex = currentActiveIndex - 1;
        if (currentActiveIndex === 0) nextActiveIndex = $yearsWrapper.querySelectorAll('.years-slider li').length - 1;
        $yearsWrapper.querySelector('.years-slider li.active').classList.remove('active');
        $yearsWrapper.querySelector(`.years-slider li[data-index='${nextActiveIndex}']`).classList.add('active');
        setCurrentFilterDate(evt.target);
    });


    function setCurrentFilterDate(target) {
        currentFilterData.month = $yearsWrapper.querySelector(`input[name^='month']:checked`).value;
        currentFilterData.year = $yearsWrapper.querySelector('li.active').dataset.value;
        // console.log(currentFilterData);
        filterSlides(target, currentFilterData);
    }

    $yearsWrapper.querySelector('.select-box').addEventListener('click', function(evt) {
        evt.stopPropagation();
        setCurrentFilterDate(evt.target);
    });

}

/**
 * 
 * фильтрует слайдер
 * target - елемент внутри блока по которому прошли изменения
 * filterData - текущие данные обьекта с месяцем и годом
 */

function filterSlides(target, filterData) {
    let sectionNumber = target.closest('.build-section').dataset.section;
    document.querySelector(`[data-section='${sectionNumber}'] .build-progress-section-slider`).style.opacity = `0`;
    sectionSliders[`slider${sectionNumber}`].slick('slickUnfilter');
    sectionSliders[`slider${sectionNumber}`].slick('slickFilter', `[data-month=${filterData.month}][data-yeasr=${filterData.year}]`);

    document.querySelector(`[data-section='${sectionNumber}'] .build-progress-section-slider`).style.opacity = `1`;

}
/**Фильтрация слайдер в секции по гадом и месяцам Конец */

/**********************************/
/*
 * mobile start
 */
/**MOBILE */
// const WIDTH = window.screen.width;
if (WIDTH < 576) {
    document.querySelectorAll('.years-slider-js').forEach(yearSelect => {
        yearSelect.addEventListener('click', function(evt) {
            this.style.overflow = `visible`;
            // console.log(evt.target);
            if (evt.target.tagName === 'LI') {
                this.style.overflow = `hidden`;
            }
        });
    })
}
/*
 * mobile end
 */
/**********************************/