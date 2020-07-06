let cards = document.querySelectorAll('.card'),
    loadMoreIteration = 3,
    cardsToAddCount = getAdaptiveCardsCount(),
    $loadMoreButton = document.querySelector('.load-more-js'),
    $cardWrapper = document.querySelector('.cards-wrapper');

function getAdaptiveCardsCount() {
    if (document.documentElement.clientWidth >= 1150) return 9;
    if (document.documentElement.clientWidth >= 769) return 8;
    if (document.documentElement.clientWidth >= 481) return 8;
    return 4;

}
$loadMoreButton.addEventListener('click', function(evt) {
    openMoreCards(cardsToAddCount);
});
cards.forEach(el => { el.style.display = 'none' });
openMoreCards(cardsToAddCount);

function openMoreCards(toNumber) {
    // console.log(cards[toNumber - 1]);
    for (let index = 0; index < toNumber; index++) {
        const element = cards[index];
        if (element === undefined) {
            $loadMoreButton.remove();
            return;
        }
        element.style.animation = `flipInX        1s 1 ease-in`;
        element.style.display = `flex`;
    };
    cards[toNumber - 1].scrollIntoView({ behavior: 'smooth' });
    console.log(cards[toNumber - 1]);
    cardsToAddCount += getAdaptiveCardsCount();
}

/**********************************/
/*
 * mobile moving elements start
 */
const SCREEN_WIDTH = window.screen.width;

if (SCREEN_WIDTH < 576) {
    let comFlatLinks = document.querySelectorAll('.link-row .link-standart');
    comFlatLinks.forEach(link => {
        link.closest('.card').append(link);
    })
}
/*
 * mobile moving elements end
 */
/**********************************/