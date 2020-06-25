/**Menu hover Effect */
let menuButton = document.querySelector('.menu-button'),
    menu = document.querySelector('menu.top-menu');
menuButton.querySelectorAll('rect').forEach(rect => {
    rect.dataset.startHeight = rect.getAttribute('width');
})
menuButton.addEventListener('mouseover', (evt) => {
    menuButton.querySelectorAll('rect').forEach(rect => {
        rect.setAttribute('width', '36');
    })
});
menuButton.addEventListener('mouseout', function(evt) {
    menuButton.querySelectorAll('rect').forEach(rect => {
        rect.setAttribute('width', rect.dataset.startHeight);
    })
});
menuButton.addEventListener('click', function(evt) {
    menu.classList.add('opened');
});
menu.querySelector('.close-button').addEventListener('click', function(evt) {
    menu.classList.remove('opened');
});
/**Menu hover Effect  END*/


/**MASK */
// VMasker(document.querySelector(".inputtelmask")).maskPattern("+99 (999) 999-99-99");
/**MASK END*/
console.log(document.querySelector('.common-form'));

$('.call-form-js').magnificPopup({
    src: '#common-form',
    type: 'inline',
    // other options
});

$('.datetimepicker').datetimepicker({
    //            theme:'dark',
    // value: 'trololo',
    // value: new Date(),
    minDate: new Date(),
    maxTime: '20:00',
    yearStart: 2019,
    yearEnd: 2019,
    dayOfWeekStart: 1,

});