// Google map start
function func() {
    var script = document.createElement('script');
    //    const key = 'AIzaSyBeZ7W_mpcc25BT0seg7opc8JCzonurxEc';
    const key = '';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`;
    document.getElementsByTagName('head')[0].appendChild(script);

}
setTimeout(func, 1000);


function initMap() {
    var gmarkers1 = [];
    filterMarkers = function(category) {
        for (i = 0; i < gmarkers1.length; i++) {
            marker = gmarkers1[i];

            var markerMain = gmarkers1.find(item => item.category === 'main');

            if (marker.category == category || category == 'all') {
                marker.setMap(map);
                markerMain.setMap(map);
            } else {
                marker.setMap(null);
                markerMain.setMap(map);
            }
        }
    };


    var center = {
        lat: 50.445007,
        lng: 30.610436


    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: center,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        language: 'en',
        styles: [{
            "featureType": "all",
            "stylers": [{
                "saturation": 0
            }, {
                "hue": "#e7ecf0"
            }]
        }, {
            "featureType": "road",
            "stylers": [{
                "saturation": -70
            }]
        }, {
            "featureType": "transit",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "saturation": -60
            }]
        }],

    });



    var polygonCoords = [
        new google.maps.LatLng(50.55601, 30.27695),
        new google.maps.LatLng(50.55743, 30.27686),
        new google.maps.LatLng(50.55764, 30.27883),
        new google.maps.LatLng(50.5567, 30.27858),
        new google.maps.LatLng(50.55633, 30.27846),
        new google.maps.LatLng(50.55527, 30.27739),
        new google.maps.LatLng(50.55601, 30.27695),

    ];

    // Настройки для полигона
    var polygon = new google.maps.Polygon({
        path: polygonCoords, // Координаты
        strokeColor: '#F8B400',
        strokeOpacity: 1,
        strokeWeight: 1.5,
        fillColor: '#F8B400',
        fillOpacity: 1
    });
    //Добавляем на карту
    // polygon.setMap(map);

    var markers_spritesheet;

    if (document.location.pathname === '/') {
        markers_spritesheet = 'img/main_page_map_markers_spritesheet.png';
    } else {
        markers_spritesheet = '../img/main_page_map_markers_spritesheet.png';
    }

    var baseFolder = '/wp-content/themes/rusaniv/assets/images/infrastructure/';
    var defaultMarkerSize = new google.maps.Size(44, 62),
        buildLogoSize = new google.maps.Size(100, 100);
    var markersAdresses = {
        main: `${baseFolder}marker-main.svg`,
        kinder: `${baseFolder}marker-bear.svg`,
        meal: `${baseFolder}marker-meal.svg`,
        park: `${baseFolder}marker-park.svg`,
        shop: `${baseFolder}marker-shop.svg`,
        work: `${baseFolder}marker-work.svg`,
        sport: `${baseFolder}marker-sport.svg`,
        school: `${baseFolder}marker-school.svg`,



    }

    var markersData = [];
    /** Маркеры для карты 28,01,2020 */
    /* beautify preserve:start */
    var markersData = [
        {
            content: `<img style="background:white" src="${markersAdresses.main}">`,
            position: { lat: 50.442644, lng:30.608800},
            type: 'main',
            icon: { url: markersAdresses.main,scaledSize: buildLogoSize,}
        },
        // {
        //     content: `Відділ продажу">`,
        //     position: { lat: 50.554649,  lng: 30.265892 },
        //     type: 'sales',
        //     icon: { url: markersAdresses.sales,scaledSize: buildLogoSize,}
        // },
        {
            content: `Тестовий парк`,
            position: { lat: 50.555773,  lng: 30.269847 },
            type: 'park',
            icon: { url: markersAdresses.park,scaledSize: defaultMarkerSize,}
        },
        // {
        //     content: `Тестовий pharmacy`,
        //     position: { lat: 50.558773,  lng: 30.269847 },
        //     type: 'pharmacy',
        //     icon: { url: markersAdresses.pharmacy,scaledSize: defaultMarkerSize,}
        // },
        {
            content: `Тестовий shop`,
            position: { lat: 50.554773,  lng: 30.269847 },
            type: 'shop',
            icon: { url: markersAdresses.shop,scaledSize: defaultMarkerSize,}
        },
        {
            content: `Тестовий kinder`,
            position: { lat: 50.553773,  lng: 30.269847 },
            type: 'kinder',
            icon: { url: markersAdresses.kinder,scaledSize: defaultMarkerSize,}
        },
        {
            content: `Тестовий meal`,
            position: { lat: 50.552773,  lng: 30.269847 },
            type: 'meal',
            icon: { url: markersAdresses.meal,scaledSize: defaultMarkerSize,}
        },
        {
            content: `Тестовий sport`,
            position: { lat: 50.551773,  lng: 30.269847 },
            type: 'sport',
            icon: { url: markersAdresses.sport,scaledSize: defaultMarkerSize,}
        },
        {
            content: `Тестовий school`,
            position: { lat: 50.550773,  lng: 30.269847 },
            type: 'school',
            icon: { url: markersAdresses.school,scaledSize: defaultMarkerSize,}
        },
        {content:"Заклад дошкільної освіти №361 'Софія'",         position:{lat:50.445007, lng:30.610436}, type:'kinder',icon: { url: markersAdresses.kinder,scaledSize: defaultMarkerSize,}},
{content:"РОЗУМКА приватний заклад дошкільної освіти"  ,  position:{lat:50.446146, lng:30.599492}, type:'kinder',icon: { url: markersAdresses.kinder,scaledSize: defaultMarkerSize,}},
{content:"Заклад дошкільної освіти №297",                 position:{lat:50.440678, lng:30.616003}, type:'kinder',icon: { url: markersAdresses.kinder,scaledSize: defaultMarkerSize,}},
{content:"Заклад дошкільної освіти №452",                 position:{lat:50.442183, lng:30.594504}, type:'kinder',icon: { url: markersAdresses.kinder,scaledSize: defaultMarkerSize,}},
{content:"Заклад дошкільної освіти №485",                 position:{lat:50.438890, lng:30.603914}, type:'kinder',icon: { url: markersAdresses.kinder,scaledSize: defaultMarkerSize,}},
{content:"Заклад дошкільної освіти №501",                 position:{lat:50.438879, lng:30.601006}, type:'kinder',icon: { url: markersAdresses.kinder,scaledSize: defaultMarkerSize,}},
{content:"Заклад дошкільної освіти №404",                 position:{lat:50.440438, lng:30.599714}, type:'kinder',icon: { url: markersAdresses.kinder,scaledSize: defaultMarkerSize,}},
{content:"FreeStyle ", type:"sport",                                   icon: { url: markersAdresses.sport,scaledSize: defaultMarkerSize,},position:{lat:50.438090, lng:30.614837}},
{content:"EnerGym ", type:"sport",                                     icon: { url: markersAdresses.sport,scaledSize: defaultMarkerSize,},position:{lat:50.428093, lng:30.592976}},
{content:"Sport Life Русановка,  ", type:"sport",                      icon: { url: markersAdresses.sport,scaledSize: defaultMarkerSize,},position:{lat:50.438136, lng:30.596022}},
{content:"Consulting Dance Studio ", type:"sport",                     icon: { url: markersAdresses.sport,scaledSize: defaultMarkerSize,},position:{lat:50.444018, lng:30.606232}},
{content:"Тренажерный Зал KONG GYM ", type:"sport",                    icon: { url: markersAdresses.sport,scaledSize: defaultMarkerSize,},position:{lat:50.443424, lng:30.607338}},
{content:"Тенісний клуб \"Старт\" ", type:"sport",                       icon: { url: markersAdresses.sport,scaledSize: defaultMarkerSize,},position:{lat:50.440112, lng:30.598744}},
{content: "Ліцей №208 ",                                                                                position:{lat:50.446497, lng:30.600610},type:'school',icon: { url: markersAdresses.school,scaledSize: defaultMarkerSize,}},
{content: "Спеціалізована школа І-ІІІ ступенів №125 з поглибленим вивченням англійської мови ",         position:{lat:50.447571, lng:30.600632},type:'school',icon: { url: markersAdresses.school,scaledSize: defaultMarkerSize,}},
{content: "Середня загальноосвітня школа І-ІІІ ступенів №128 ",                                         position:{lat:50.449066, lng:30.592409},type:'school',icon: { url: markersAdresses.school,scaledSize: defaultMarkerSize,}},
{content: "Середня загальноосвітня школа І-ІІІ ступенів №182 ",                                         position:{lat:50.441478, lng:30.596604},type:'school',icon: { url: markersAdresses.school,scaledSize: defaultMarkerSize,}},
{content: "Русанівський ліцей ",                                                                        position:{lat:50.442070, lng:30.595262},type:'school',icon: { url: markersAdresses.school,scaledSize: defaultMarkerSize,}},
{content: "Гімназія №136",                                                                              position:{lat:50.440076, lng:30.601643},type:'school',icon: { url: markersAdresses.school,scaledSize: defaultMarkerSize,}},
{content: "Спеціалізована школа І-ІІІ ступенів №137 з поглибленим вивченням англійської мови ",         position:{lat:50.438198, lng:30.599606},type:'school',icon: { url: markersAdresses.school,scaledSize: defaultMarkerSize,}},
{content: "Дитяча музична школа №16 ",                                                                  position:{lat:50.434737, lng:30.595880},type:'school',icon: { url: markersAdresses.school,scaledSize: defaultMarkerSize,}},
{content:"Мультиплекс в комоде",                      position:{lat: 50.453443, lng:30.598954}, type:'meal', icon:{ url: markersAdresses.meal,scaledSize: defaultMarkerSize,}},
{content:"Паприка",                   position:{lat: 50.449007, lng:30.600807}, type:'meal', icon:{ url: markersAdresses.meal,scaledSize: defaultMarkerSize,}},
{content:"To Dublin",                     position:{lat: 50.449940, lng:30.594900}, type:'meal', icon:{ url: markersAdresses.meal,scaledSize: defaultMarkerSize,}},
{content:"Woki Toki position",position:{lat: 50.449605, lng:30.594197}, type:'meal', icon:{ url: markersAdresses.meal,scaledSize: defaultMarkerSize,}},
{content:"Riviera Riverside Yacht Club",                      position:{lat: 50.447388, lng:30.588293}, type:'meal', icon:{ url: markersAdresses.meal,scaledSize: defaultMarkerSize,}},
{content:"Смородина",                     position:{lat: 50.443079, lng:30.590912}, type:'meal', icon:{ url: markersAdresses.meal,scaledSize: defaultMarkerSize,}},
{content:"Spezzo",                    position:{lat: 50.436922, lng:30.592789}, type:'meal', icon:{ url: markersAdresses.meal,scaledSize: defaultMarkerSize,}},
{content:"Tbiliso",                   position:{lat: 50.434951, lng:30.593001}, type:'meal', icon:{ url: markersAdresses.meal,scaledSize: defaultMarkerSize,}},
{content:"Кафе-сыроварня «Мацони»",                   position:{lat: 50.434933, lng:30.598729}, type:'meal', icon:{ url: markersAdresses.meal,scaledSize: defaultMarkerSize,}},
{content:"TARANTINO italian&grill",                   position:{lat: 50.440188, lng:30.592185}, type:'meal', icon:{ url: markersAdresses.meal,scaledSize: defaultMarkerSize,}},
{content:"SOLOD levantine grill",                     position:{lat: 50.428868, lng:30.595348}, type:'meal', icon:{ url: markersAdresses.meal,scaledSize: defaultMarkerSize,}},
{content:"прокат SUP",                    position:{lat: 50.438834, lng:30.610154}, type:'meal', icon:{ url: markersAdresses.meal,scaledSize: defaultMarkerSize,}},
{content:"	Novus  ",position:{lat: 50.448561,lng: 30.599491},type:'shop', icon: { url: markersAdresses.shop,scaledSize: defaultMarkerSize,}},
{content:"	Сильпо ",position:{lat: 50.439746,lng: 30.592307},type:'shop', icon: { url: markersAdresses.shop,scaledSize: defaultMarkerSize,}},
{content:"	В ТРЦ Комод ",position:{lat: 50.453278,lng: 30.598447},type:'shop', icon: { url: markersAdresses.shop,scaledSize: defaultMarkerSize,}},
{content:"	Супермаркет на территории жк",position:{lat: 50.442746,lng: 30.608701},type:'shop', icon: { url: markersAdresses.shop,scaledSize: defaultMarkerSize,}},
{content:"	Фора ",position:{lat: 50.442994,lng: 30.613766},type:'shop', icon: { url: markersAdresses.shop,scaledSize: defaultMarkerSize,}},
{content:"	Продуктовый магазин  Le Petit ",position:{lat: 50.443436,lng: 30.607308},type:'shop', icon: { url: markersAdresses.shop,scaledSize: defaultMarkerSize,}},
{
    content: `ТРЦ Комод`,
    position: { lat: 50.453278,  lng: 30.598447 },
    type: 'shop',
    icon: { url: markersAdresses.shop,scaledSize: defaultMarkerSize,}
},
{
    content: `ТРЦ Silver Breeze`,
    position: { lat: 50.428686,  lng: 30.593379},
    type: 'shop',
    icon: { url: markersAdresses.shop,scaledSize: defaultMarkerSize,}
},

    ]
/* beautify preserve:end */
    var infowindow = new google.maps.InfoWindow({
        content: '',
        maxWidth: 200
    });
    var activeInfoBubble;



    /**Вывод карты со всеми маркерами на странице Инфраструктуры и С одним маркером на остальных страницах */
    markersData.forEach(function(marker) {
        var markerSettings = {};
        var category = marker.type;
        // console.log(marker.icon);

        var mapMarker = new google.maps.Marker({
            map: map,
            category: category,
            icon: marker.icon,
            position: new google.maps.LatLng(marker.position.lat, marker.position.lng),
        });
        google.maps.event.addListener(mapMarker, 'click', function() {
            infowindow.setContent(marker.content);
            infowindow.open(map, mapMarker);
            console.log(mapMarker);
            map.panTo(this.getPosition());
        });
        mapMarker.name = marker.type;
        // console.log(gmarkers1);
        gmarkers1.push(mapMarker);
        // console.log(category);
        // console.log(gmarkers1);
    });
    /**********************************/
    /*
     * mobile pageHande start
     */
    const WIDTH = window.screen.width;

    if (WIDTH < 576) {
        const legend = document.querySelector('.infra-legend-js'),
            icons = legend.querySelectorAll('.mobile-infra-legend__icon-row'),
            title = legend.querySelector('.mobile-infra-legend__title'),
            close = legend.querySelector('.mobile-infra-legend__close');

        function displayFilterIcons(type, opened) {
            gmarkers1.forEach(marker => {
                if (marker.category === type && opened) {
                    marker.setVisible(true);
                } else if (marker.category === type && !opened) {
                    marker.setVisible(false);
                }
            })
        }
        let $breadcrumbLink = document.querySelector('.breadcrumbs-wrapper .link-standart'),
            $pageContent = document.querySelector('.page__content');
        $pageContent.append($breadcrumbLink);
        title.addEventListener('click', function(evt) {
            legend.classList.add('opened')
        });
        close.addEventListener('click', function(evt) {
            evt.stopPropagation();
            legend.classList.remove('opened');
        });
        icons.forEach(icon => {
            icon.addEventListener('click', function(evt) {
                icon.classList.toggle('active');
                if (icon.classList.contains('active')) {
                    displayFilterIcons(icon.dataset.type, true);
                } else {
                    displayFilterIcons(icon.dataset.type, false);

                }
            });
        })
    }
    /*
     * mobile pageHande end
     */
    /**********************************/

};
// Google map end