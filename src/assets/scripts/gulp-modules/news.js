const WIDTH = window.screen.width;
$yearsWrapper = document.querySelector('.years-slider'),
    newsList = document.querySelectorAll('.news-article');
let currentFilterData = {
    month: '',
    year: '',
}
$yearsWrapper.querySelectorAll('li').forEach((year, index) => {
    year.dataset.index = index;
    year.addEventListener('click', function(evt) {
        $yearsWrapper.querySelector('li.active').classList.remove('active');
        year.classList.add('active');
        setCurrentFilterDate()
    });
});
document.querySelector('.years-arrows .next').addEventListener('click', function(evt) {
    let currentActiveIndex = +$yearsWrapper.querySelector('li.active').dataset.index;
    let nextActiveIndex = 0;
    nextActiveIndex = currentActiveIndex + 1;
    if (currentActiveIndex === ($yearsWrapper.querySelectorAll('li').length - 1)) nextActiveIndex = 0;
    $yearsWrapper.querySelector('li.active').classList.remove('active');
    $yearsWrapper.querySelector(`li[data-index='${nextActiveIndex}']`).classList.add('active');
    setCurrentFilterDate()
});
document.querySelector('.years-arrows .prev').addEventListener('click', function(evt) {
    let currentActiveIndex = +$yearsWrapper.querySelector('li.active').dataset.index;
    let nextActiveIndex = 0;
    nextActiveIndex = currentActiveIndex - 1;
    if (currentActiveIndex === 0) nextActiveIndex = $yearsWrapper.querySelectorAll('li').length - 1;
    $yearsWrapper.querySelector('li.active').classList.remove('active');
    $yearsWrapper.querySelector(`li[data-index='${nextActiveIndex}']`).classList.add('active');
    setCurrentFilterDate()
});


function setCurrentFilterDate() {

    currentFilterData.month = document.querySelector(`input[name='month']:checked`).value;
    currentFilterData.year = $yearsWrapper.querySelector('li.active').dataset.value;
    filterNews(newsList, currentFilterData)
    console.log(currentFilterData);
}


function filterNews(list, datObject) {
    list.forEach(block => {
        if (block.dataset.month === datObject.month && block.dataset.year === datObject.year) {
            block.style.display = 'flex';
        } else if (datObject.month === 'null') {
            block.style.display = 'flex';
        } else {
            block.style.display = 'none';
        }

    })
}
document.querySelector('.select-box').addEventListener('click', function(evt) {
    evt.stopPropagation();
    setCurrentFilterDate();
});



/**MOBILE */
if (WIDTH < 576) {
    document.querySelector('.years-slider-js').addEventListener('click', function(evt) {
        this.style.overflow = `visible`;
        console.log(evt.target);
        if (evt.target.tagName === 'LI') {
            this.style.overflow = `hidden`;
        }
    });
}