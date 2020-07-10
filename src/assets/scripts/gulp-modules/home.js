/**HorizontalScroll */

class Scroller {
    constructor(selector) {
        this.selectorName = selector;
        this.scrollElement = document.querySelector(selector);
        this.i = 1;
        this.delta = 10;
        this.lastScrollTop = 0;
        this.speed = 2;
    }
    styling() {
        this.moveValue = window.screen.height * this.delta / parseInt(getComputedStyle(this.scrollElement).width.replace('px', '')) * 1.2;
        this.elemHeight = parseInt(getComputedStyle(this.scrollElement).blockSize);
        this.scrollElement.style.transition = '.2s';
    }
    onScroll(e) {
        var top = window.pageYOffset;
        if (this.lastScrollTop > top) {
            console.log('top');
            this.lastScrollTop = top;
            return 'up';
        } else if (this.lastScrollTop < top) {
            this.lastScrollTop = top;
            return 'down';
            console.log('down');
        }
    }
    isDevice() {
        if (/Android|webOS|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini|iPhone|iPad|iPod/.test(window.navigator.userAgent)) this.delta = 3;

    };
    init() {
        // console.log(this.selectorName);
        this.isDevice();
        if (this.scrollElement == undefined) {
            console.error(`${this.selectorName} is ${undefined}`);
            return
        }
        this.styling();
        window.addEventListener('scroll', (evt) => {
            if ((this.scrollElement.getBoundingClientRect().top + +this.elemHeight) > 0 &&
                this.scrollElement.getBoundingClientRect().top < window.screen.height &&
                this.scrollElement.getBoundingClientRect().bottom - +this.elemHeight > 0 &&
                this.scrollElement.getBoundingClientRect().bottom < window.screen.height) {
                this.moving(this.onScroll());
            }

        });
    }
    scroll() {
        // this.init();
        this.styling();
        // console.log(parseInt(getComputedStyle(this.scrollElement)));
    }
    moving(direction) {
        if (direction == 'up') {
            this.i += this.moveValue;
        } else if (direction == 'down') {
            this.i -= this.moveValue;
        }
        // console.log(this.i);

        this.scrollElement.style.transform = `translateX(${this.i*this.speed}px)`;
    }
    show() {
        // console.log(this.scrollElement.offsetTop);
    }

};
let scroller1 = new Scroller('.scroll-element-js');
scroller1.init();
/**HorizontalScroll END*/

/**News block slider */
$('.news-block-slider-js').slick({
    slide: '.news-slide',
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: false,
    cssEase: 'ease-in-out',
    nextArrow: $('.news-block .next'),
    prevArrow: $('.news-block .previous'),
    responsive: [{
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
        }
    }, ],
});


/**News block slider END */