// const $pathes = document.querySelectorAll('.floor-plan-svg path, .floor-plan-svg polygon'),

/* beautify preserve:start */
@@include('../libs/animatenumber/jquery.animateNumber.js')
/* beautify preserve:end */;;;;



const viewParentSelector = '.flat-info-block-js',
    floorInfoBlock = document.querySelector(viewParentSelector),
    seeFlatLink = document.querySelector('.js-see-more-floor'),
    floorLink = $('.floor-plan-svg path, .floor-plan-svg polygon'),
    chooseFloorWrapper = document.querySelector('.choose-floor-wrapper'),
    breadCrumbLink = document.querySelector('.breadcrumbs-wrapper>.link-standart');

// const card = $('.js-floor-info');
const card = $(`${viewParentSelector}`);


(function($) {
    function animNum(elem, num, int = null) {
        var decimal_places = 1;
        var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);

        elem.animateNumber({
            number: num,
            numberStep: function(now, tween) {
                // var floored_number = Math.floor(now) / decimal_factor,
                if (int === null) {
                    var floored_number = now.toFixed(2).toString().replace('.', ',');
                } else {
                    var floored_number = now.toFixed();
                }
                var target = $(tween.elem);

                target.text(floored_number);
            }
        }, {
            easing: 'swing',
            duration: 200,
        });
    }

    function showInfo(e) {
        console.log($(this));
        floorLink.removeClass('active');
        $(this).addClass('active');
        for (const key in this.dataset) {
            if (this.dataset.hasOwnProperty(key)) {
                const element = this.dataset[key];
                let currentClassElement = `${viewParentSelector} span[data-${key}]`;
                let elToView = document.querySelector(`${viewParentSelector} [data-${key}]`);
                if (elToView !== null) elToView.innerHTML = element;
                switch (key) {
                    case 'number':
                        card.find(currentClassElement).text(element)
                        break;
                    case 'tot_square':
                        //									card.find(currentClassElement).text(element);
                        animNum(card.find(currentClassElement), element);
                        animNum($(`${viewParentSelector} [data-${key}]`), element);
                        break;
                    case 'liv_square':
                        //									card.find(currentClassElement).text(element);
                        animNum(card.find(currentClassElement), element);
                        animNum($(`${viewParentSelector} [data-${key}]`), element);

                        break;
                    case 'rooms':
                        //									card.find(currentClassElement).text(element);
                        animNum($(`${viewParentSelector} [data-${key}]`), element, 'int');
                        animNum(card.find(currentClassElement), element, 'int')

                        break;
                    default:
                        card.find(currentClassElement).html(element)
                }
            }
        }
    }




    if (screen.width > 768) {

        floorLink.mouseenter(function(e) {
            showInfo.call(this);
        });
        floorLink.mouseout(function(e) {
            for (const key in this.dataset) {
                let currentClassElement = `${viewParentSelector} span[data-${key}]`;
                let elToView = document.querySelector(`${viewParentSelector} [data-${key}]`);
                if (elToView !== null) elToView.innerHTML = 'XX';
            }
            this.innerHTML = 0;
            console.log(this);

        });
    } else if (screen.width < 576) {
        /*Перемещение елементов на мобилке */
        floorInfoBlock.append(seeFlatLink);
        chooseFloorWrapper.append(breadCrumbLink);
        /*Перемещение елементов на мобилке end */
        floorLink.on('click', function(e) {
            e.preventDefault();
            // replace link
            console.log($(this).closest('a'));
            $('.js-see-more-floor').attr('href', $(this).closest('a')[0].href.baseVal);
            showInfo.call(this);
            mobileFlatInfoOpen(floorInfoBlock);
        });
        floorInfoBlock.querySelector('.flat-info-block-js__close').addEventListener('click', function(evt) {
            evt.stopPropagation();
            floorInfoBlock.classList.remove('opened');
            document.querySelector('path.active').classList.remove('active');
        });
    } else {

    }



    function mobileFlatInfoOpen(popup) {
        popup.classList.add('opened');

    }
})(jQuery);






let popupStyle = `
position:fixed;
background:#fff;
max-width: 150px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
grid-template-rows: auto;
grid-gap: 10px;
padding: 10px;
text-align:center;
color: white;
box-shadow: 0px 0px 45px rgba(0, 57, 90, 0.4);`;
let popupAfterStyle = `border: 10px solid transparent;
border-top: 10px solid #00395a;
content: '';
position: absolute;
top: 100%;
left: 50%;
transform: translateX(-50%);`;
var floorSelectPopup = () => {
    let target = document.querySelector('.mob-floor-link-js');
    let curFloor = +target.dataset.floor || 1;
    let popup = document.createElement('div');
    target.addEventListener('click', function(evt) {
        if (window.mobFloorPopupCreated) {
            popup.style.opacity = `1`;
            popup.style.pointerEvents = 'initial';
            return;
        }
        popup.innerHTML += `<button style="border:none; color:var(--red); background:none; border-radius:50%; fill:var(--red); display: flex;
        justify-content: center;
        align-items: center; 
        border: 1px solid var(--red); height:24px; width:24px; grid-area:1/5/1/5">
        
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">
            <g>
                <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717    L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859    c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287    l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285    L284.286,256.002z"/>
            </g>
        </svg>
        
        </button>`;
        for (let i = 1; i <= 23; i++) {
            if (i !== curFloor) {
                popup.innerHTML += `<a style="color:var(--blue)" href="choose-floor/?dom=1&section=4&floor=${i}">${i}</button>`;
            } else {
                popup.innerHTML += `<a style="color:var(--red); pointer-events:none;"   href="choose-floor/?dom=1&section=4&floor=${i}">${i}</button>`;
            }
        };
        popup.classList.add('popup-floors-js');
        popup.style.cssText = `
        ${popupStyle}
        top :calc(${target.getBoundingClientRect().bottom}px - 3em);
        transform:translateY(-100%) ;
        left:${target.getBoundingClientRect().left - (+getComputedStyle(target).width.replace(/px/,'') / 2)}px;
        animation:fadeIn 1s 1 linear;
        `;
        changePseudoProperties(popup, popupAfterStyle, 'after');
        target.append(popup);
        popup.querySelector('button').addEventListener('click', (evt) => {
            evt.stopPropagation();
            popup.style.opacity = `0`;
            popup.style.pointerEvents = 'none';
        });
        window.mobFloorPopupCreated = true;
    });

};
if (window.screen.width < 576) {
    floorSelectPopup();
};

function changePseudoProperties(container, cssText, pseudoType) {
    let containerSelector = '';
    if (pseudoType === undefined) {
        console.warn(`Pseudo element is not defined, ${changePseudoProperties.name} is stopping`);
        return;
    }
    if (typeof container === 'string') {
        containerSelector = container;
        container = document.querySelector(container);
    } else {
        containerSelector = `.${container.classList[0]}`;
    }
    let style = document.createElement('style');
    style.innerHTML = `
    ${containerSelector}:${pseudoType}{
        ${cssText}
    } `;
    container.append(style);
}