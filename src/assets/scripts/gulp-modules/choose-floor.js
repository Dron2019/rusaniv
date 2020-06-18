/**Choose floore page setup */
document.querySelectorAll('.floor-svg-js path').forEach(element => {
    element.classList.add('floor-path-js');
});

let pathesList = document.querySelectorAll('.floor-path-js'),
    infoWindow = document.querySelector('.floor-info-window-js'),
    helpTitle = document.querySelector('.help-title-js');
// infoWindow.style.transition = `.2s`;

if (window.screen.width < 769) {
    let link = document.createElement('a');
    link.classList.add('button');
    link.classList.add('mobile-plan-watch-button');
    link.innerHTML = langObject.goToFloor[lang];
    infoWindow.append(link);
    pathesList.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            link.href = item.parentElement.getAttribute('xlink:href');
            infoWindow.style.right = `${item.getBoundingClientRect().left}px`;

            console.log(item.parentElement);


        })
    })
}
pathesList.forEach(function(path, index) {
    path.style.animationDelay = `${index/10}s`;
    path.addEventListener('mouseover', () => {
        infoWindow.querySelector('.floor-number-js').innerText = path.dataset.floor;
        infoWindow.querySelector('.flat-on-floor-js').innerText = `${path.dataset.flats} `;
        infoWindow.style.display = `initial`;
        infoWindow.style.position = 'fixed';
        infoWindow.style.visibility = `visible`;
        infoWindow.style.top = `${path.getBoundingClientRect().top}px`;
        if (window.screen.width > 768) infoWindow.style.left = `${path.getBoundingClientRect().left - 200}px`;
        infoWindow.style.opacity = `1`;

    });
    path.addEventListener('mouseout', function() {
        infoWindow.style.opacity = `0`;
        infoWindow.style.visibility = `hidden`;

    });
});

/**Вывод надписи про Второй дом */
// let $buildLink = document.querySelector('.not-for-sale-js');
// $notForSaleTitle = document.querySelector('.not-for-sale-title');
// $buildLink.onmouseover = () => {
//     $notForSaleTitle.classList.add('active');
// };
// $buildLink.onmouseout = () => {
//     $notForSaleTitle.classList.remove('active');
// };