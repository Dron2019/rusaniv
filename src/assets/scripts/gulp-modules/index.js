/**Menu hover Effect */
let menuButton = document.querySelector('.menu-button'),
    menu = document.querySelector('menu.top-menu'),
    header = document.querySelector('header.header');
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
    menuButton.classList.add('opened');
    if (window.screen.width < 576) menuButton.addEventListener('click', closeMenuOnMobile);

});
menu.querySelector('.close-button').addEventListener('click', function(evt) {
    menu.classList.remove('opened');
    menuButton.classList.remove('opened');
});
/**Menu hover Effect  END*/
document.querySelector('div').__proto__.putTempClass = function(className, timeout = 1000) {
    this.classList.add(className);
    setTimeout(() => {
        this.classList.remove(className);
    }, timeout);
};

function closeMenuOnMobile(evt) {
    menu.classList.remove('opened');
    menuButton.classList.remove('opened');
    menuButton.removeEventListener('click', closeMenuOnMobile, false);
}
/**MASK */
// VMasker(document.querySelector(".inputtelmask")).maskPattern("+99 (999) 999-99-99");
/**MASK END*/
console.log(document.querySelector('.common-form'));
document.querySelector('.common-form .form-close-block').onclick = () => {
    $.magnificPopup.close();
};
$('.call-form-js').magnificPopup({
    items: {
        type: 'inline',
        src: '#common-form',
    },
    callbacks: {
        beforeClose: () => document.querySelector('#common-form').putTempClass('f', 2000),
    },
    showCloseBtn: false,
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


/**checkbox click on label config */

let checkboxes = document.querySelectorAll('.checkbox-group');
checkboxes.forEach(box => {
    box.addEventListener('click', function(evt) {
        box.querySelector('input').checked = true;

        if (box.classList.contains('with-date-js')) {
            let dateInput = box.querySelector('.datetimewrapper') || null;
            dateInput.style.opacity = `1`;
        } else {

            document.querySelector('.datetimewrapper').style.opacity = `0`;
        }
    });
})

/**checkbox click on label config END */