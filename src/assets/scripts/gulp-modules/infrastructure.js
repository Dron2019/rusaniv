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
        lat: 50.555632,
        lng: 30.272513


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

    var baseFolder = './assets/images/infrastructure/';
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
            position: { lat: 50.55743,  lng: 30.27686 },
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
    ]
/* beautify preserve:end */
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
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(mapMarker, 'click', function() {
            infowindow.setContent(marker.content);
            infowindow.open(map, mapMarker);
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