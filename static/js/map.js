function $(item){
    document.querySelector(item)
}

// Работа с яндекс картой
function init(){
    // Поле для ввода первой точки маршрута и второй
    let inputFrom = document.querySelector('.point-start')
    let inputTo = document.querySelector('.point-end')
    let suggestView = new ymaps.SuggestView(inputFrom),
        suggestViewTo = new ymaps.SuggestView(inputTo),
        map,
        addrFrom;
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        center: [55.842966, 37.572573],
        zoom: 17,
        controls: []
    }),
    routePanelControl = new ymaps.control.RoutePanel({
        options: {
            showHeader: false,
        }
    });
    suggestView.events.add("select", function(e){
        geocode(e.get('item').value)  
        if(document.querySelector('.map-controls__content').classList.contains('active')){
            document.querySelector('.map-controls__content').classList.remove('active')
        }
    })
    // searchMap.addEventListener('click', function(){
    //     geocode('.point-start')
    // })

    function geocode(ctrl_id) {
        // Забираем запрос из поля ввода.
        var request = ctrl_id
        // Геокодируем введённые данные.
        ymaps.geocode(request).then(function(res) {
            var obj = res.geoObjects.get(0)
            addrFrom = obj
            showRoute(addrFrom.getAddressLine())
        })
    }

    function showRoute(from) {
        // https://tech.yandex.ru/maps/jsbox/2.1/deliveryCalculator 
        routePanelControl.routePanel.state.set({
            from: from,
            toEnabled: false,
            to: 'Гостиничный проезд, 4Б'
        });
    }

    routePanelControl.routePanel.options.set({
        types: {
            auto: false,
            masstransit: true,
        }
    })

    const typesRouterSetting = document.querySelectorAll('.setTransport div').forEach(el => {
        el.addEventListener('click', function(){
            if(el.getAttribute('data-router') == 'auto'){
                routePanelControl.routePanel.options.set({
                    types: {
                        auto: true,
                        masstransit: false,
                    }
                })
            } else {
                routePanelControl.routePanel.options.set({
                    types: {
                        auto: false,
                        masstransit: true,
                    }
                });
            }
        })
    })

    myMap.controls.add(routePanelControl)

    myMap.geoObjects
        .add(new ymaps.Placemark([55.843594, 37.577181], {
            iconCaption: 'Гостиничный проезд, 4Б'
        }))
}

ymaps.ready(init);

// Сайдбар
document.querySelector('.button-aside').addEventListener('click', function(){
    if(!document.querySelector('.button-aside').classList.contains('active')){
        document.querySelector('.button-aside').classList.add('active')
        document.querySelector('.map-controls__content').classList.add('active')
    } else {
        document.querySelector('.button-aside').classList.remove('active')
        document.querySelector('.map-controls__content').classList.remove('active')
    }
})

// сменить маршрут
document.querySelector('.public-transport').addEventListener('click', function(){
    if(document.querySelector('.public-transport').classList.contains('active')){
        document.querySelector('.auto').classList.remove('active')
    } else {
        document.querySelector('.auto').classList.remove('active')
        document.querySelector('.public-transport').classList.add('active')
    }
})

document.querySelector('.auto').addEventListener('click', function(){
    if(document.querySelector('.auto').classList.contains('active')){
        document.querySelector('.public-transport').classList.remove('active')
    } else {
        document.querySelector('.public-transport').classList.remove('active')
        document.querySelector('.auto').classList.add('active')
    }
})

// бургер меню
document.querySelector('.burger-menu').addEventListener('click', function(){
    if(document.querySelector('.modal-menu').classList.contains('active')){
        document.querySelector('.modal-menu').classList.remove('active')
        document.querySelector('.burger-menu').classList.remove('active')
    } else {
        document.querySelector('.modal-menu').classList.add('active')
        document.querySelector('.burger-menu').classList.add('active')
    }
})

// Mobile sidebar
document.querySelector('.map-controls__content h2').addEventListener('click', function(){
    if(document.querySelector('.map-controls__content').classList.contains('active')){
        document.querySelector('.map-controls__content').classList.remove('active')
    } else {
        document.querySelector('.map-controls__content').classList.add('active')
    }
})