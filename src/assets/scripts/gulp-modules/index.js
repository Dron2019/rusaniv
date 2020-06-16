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

let tempForm = new FormCreater('.common-form-js', {
    fields: [{
            name: 'name',
            label: langObject.name[lang],
            type: 'text',
            requried: true
        }, {
            name: 'telephone',
            label: langObject.telephone[lang],
            type: 'text',
            customClass: 'inputtelmask',
            requried: true
        },

        {
            name: 'time',
            label: langObject.callNow[lang],
            type: 'checkbox'
        }, {
            name: 'time',
            label: langObject.otherTime[lang],
            type: 'checkbox',
            selectItems: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']
        },
    ],
    color: '',
    url: 'static/application1.php',
    sendButton: {
        innerText: langObject.leaveRequest[lang],
        customClass: 'button',
    },
    legend: 'Замовити дзвінок',
    // subLegend: 'Залиште заявку і наш менеджер обовязково звяжеться з Вами',

});
tempForm.init();
/**MASK */
// VMasker(document.querySelector(".inputtelmask")).maskPattern("+99 (999) 999-99-99");
/**MASK END*/
console.log(document.querySelector('.common-form'));

$('.call-form-js').magnificPopup({
    src: '#common-form',
    type: 'inline',
    // other options
});