// const $pathes = document.querySelectorAll('.floor-plan-svg path, .floor-plan-svg polygon'),

/* beautify preserve:start */
@@include('../libs/animatenumber/jquery.animateNumber.js')
/* beautify preserve:end */

const viewParentSelector = '.flat-info-block-js';
const floorLink = $('.floor-plan-svg path, .floor-plan-svg polygon');
// const card = $('.js-floor-info');
const card = $(`${viewParentSelector}`);
// $pathes.forEach(path => {
//     path.addEventListener('mouseenter', function(evt) {
//         console.log(Array.from(path.dataset));

//         for (let index = 0; index <= path.dataset.length; index++) {
//             const element = path.dataset[index];
//             let elToView = document.querySelector(`${viewParentSelector} [data-${key}]`);
//             console.log(elToView);

//             // if (elToView !== null) continue;
//             // if (elToView == null) break;
//             // elToView.innerHTML = element;
//             console.log(key, element);

//         }

//     });
// })

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
    } else if (screen.width > 576 && screen.width <= 768) {
        floorLink.on('click', function(e) {
            e.preventDefault();
            // replace link
            console.log($(this).closest('a'));

            $('.js-see-more-floor').attr('href', $(this).closest('a')[0].href.baseVal);
            showInfo.call(this);
        });
    } else {

    }
    //     floorLink.on('click', function(e) {
    //         e.preventDefault();
    //         // replace link
    //         $('.js-mobile-popup-flat-info__link').attr('href', $(this).data().link)
    //         console.log($(this).data().link);

    //         showInfo.call(this);
    //         // $('.js-mobile-popup-flat-info').addClass(popupInfoClass);
    //         // $body.addClass('modal-active');
    //         //$('.floor-plan-content').css('filter', 'blur(10px)');
    //     });

    //     $('.js-mobile-popup-flat-info-close').on('click', function(e) {
    // gsap.to($('.js-mobile-popup-flat-info'), {
    //     autoAlpha: 0,
    //     yPercent: 25,
    //     clearProps: "all",
    //     ease: exI,
    //     onComplete: () => {
    //         $body.removeClass('modal-active');
    //         $('.js-mobile-popup-flat-info').removeClass(popupInfoClass);
    //         //$('.floor-plan-content').css('filter', 'none');
    //     }
    // })
    //     });

    // }

})(jQuery);