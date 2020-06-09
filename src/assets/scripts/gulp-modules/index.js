/**Menu hover Effect */
// let menuButton = document.querySelector('.menu-button');
// menuButton.querySelectorAll('rect').forEach(rect => {
//     rect.dataset.startHeight = rect.getAttribute('width');
// })
// menuButton.addEventListener('mouseover', (evt) => {
//     menuButton.querySelectorAll('rect').forEach(rect => {
//         rect.setAttribute('width', '36');
//     })
// });
// menuButton.addEventListener('mouseout', function(evt) {
//     menuButton.querySelectorAll('rect').forEach(rect => {
//         rect.setAttribute('width', rect.dataset.startHeight);
//     })
// });
/**Menu hover Effect  END*/

let tempForm = new FormCreater('.form-js', {

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
    }, ],
    color: '',
    url: 'static/application.php',
    sendButton: {
        innerText: langObject.leaveRequest[lang],
        customClass: 'button',
    },
    legend: langObject.formSubLegend[lang],
    // subLegend: 'Залиште заявку і наш менеджер обовязково звяжеться з Вами',

});
tempForm.init();
/**MASK */
VMasker(document.querySelector(".inputtelmask")).maskPattern("+99 (999) 999-99-99");
/**MASK END*/