/**Choose floore page setup */
document.querySelectorAll('.floor-svg-js path').forEach(element => {
    element.classList.add('floor-path-js');
});

let pathesList = document.querySelectorAll('.floor-path-js'),
    infoWindow = document.querySelector('.floor-info-window-js'),
    helpTitle = document.querySelector('.help-title-js'),
    filterLinks = document.querySelector('.filter-links'),
    genPlan = document.querySelector('.genplan');
genPlan.insertAdjacentElement('afterEnd', filterLinks);



// infoWindow.style.transition = `.2s`;
let gradient = document.createElement('div');
gradient.classList.add('choose-build-gradient');
gradient.style.cssText = `
background: linear-gradient(0deg, rgba(52,82,136,0.9023984593837535) 48%, rgba(167,206,217,1) 100%);
position: absolute;
width: 100%;
height: 165px;
top: 0;
left: 0;

`;
document.body.append(gradient);
if (window.screen.width < 769) {
    let link = document.createElement('a');
    link.classList.add('button');
    link.classList.add('mobile-plan-watch-button');
    link.innerHTML = `Перейти на поверх `;
    infoWindow.append(link);
    pathesList.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            link.href = item.parentElement.getAttribute('xlink:href');
            console.log(item.getBoundingClientRect());

            infoWindow.style.right = `${item.getBoundingClientRect().left/10}px`;

            // console.log(item.parentElement);


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