// Счетчик достижений
let setValue = function(elem, value, inc, shift, speed){
    var interval = false; 
    if (inc) {
        interval = setInterval(function(){
            if (elem.innerHTML*1+shift >= value) {
                elem.innerHTML = value;
                clearInterval(interval);
            } else {
                elem.innerHTML = elem.innerHTML*1+shift;
            }
        }, speed);
    } else {
        interval = setInterval(function(){
            if (elem.innerHTML*1-shift <= value) {
                elem.innerHTML = value;
                clearInterval(interval);
            } else {
                elem.innerHTML = elem.innerHTML*1-shift;
            }
        }, speed);
    }
};

window.addEventListener('click', function(event){
    if(event.target.closest('.btn-fileClaim')){
        let id = event.target.getAttribute('data-claim')
        let allModal = document.querySelectorAll('.modal-service')

        allModal[id-1].classList.add('active')
    }

    if(event.target.closest('.btn-order-service')) {
        let id = event.target.getAttribute('data-claim')
        let allModal = document.querySelectorAll('.modal-service')

        allModal[id-1].classList.remove('active')
    }
})

document.addEventListener("DOMContentLoaded", () => {
    setValue(oneCount, 48, true, 5 , 100)

    setValue(twoCount, 215, true, 15 , 100)

    setValue(threeCount, 7, true, 1 , 100)
});

// Контент секции about
class About {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
    }

    business() {
        let button = document.querySelector('#listState li[data-action="business"]')
        if(!button.classList.contains('active')){
            document.querySelectorAll('#listState li').forEach(elem => {
                elem.classList.remove('active')
            })
            button.classList.add('active')
            
            document.querySelectorAll('.about-content__right-element').forEach(elem => {
                elem.classList.remove('active')
            })
            lineBusiness.classList.add('active')

            document.querySelector('.about-content__images').classList.add('active')
        }
    }

    license() {
        let button = document.querySelector('#listState li[data-action="license"]')
        if(!button.classList.contains('active')){
            document.querySelectorAll('#listState li').forEach(elem => {
                elem.classList.remove('active')
            })
            button.classList.add('active')

            document.querySelectorAll('.about-content__right-element').forEach(elem => {
                elem.classList.remove('active')
            })
            license.classList.add('active')

            document.querySelector('.about-content__images').classList.remove('active')
        }
    }

    warden() {
        let button = document.querySelector('#listState li[data-action="warden"]')
        if(!button.classList.contains('active')){
            document.querySelectorAll('#listState li').forEach(elem => {
                elem.classList.remove('active')
            })
            button.classList.add('active')

            document.querySelectorAll('.about-content__right-element').forEach(elem => {
                elem.classList.remove('active')
            })
            warden.classList.add('active')

            document.querySelector('.about-content__images').classList.remove('active')
        }
    }

    vacancies() {
        let button = document.querySelector('#listState li[data-action="vacancies"]')
        if(!button.classList.contains('active')){
            document.querySelectorAll('#listState li').forEach(elem => {
                elem.classList.remove('active')
            })
            button.classList.add('active')

            document.querySelectorAll('.about-content__right-element').forEach(elem => {
                elem.classList.remove('active')
            })
            vacancies.classList.add('active')

            document.querySelector('.about-content__images').classList.remove('active')
        }
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
          this[action]();
        }
    }
}

new About(listState);


// Активация модального окна лицензий
document.querySelectorAll('.license-item__img button').forEach(el => {
    el.addEventListener('click', function(){
        document.querySelector('.modal-license').classList.add('active')
        document.querySelector('body').style.overflowY = 'hidden'
    })
})

// Закрытие модального окна
document.querySelector('.modal-license').addEventListener('click', function(e){
    if(e.target.closest('.close-modal')){
        document.querySelector('.modal-license').classList.remove('active')
        document.querySelector('body').style.overflowY = 'auto'
    }
    if(e.target.classList.contains('active')){
        document.querySelector('.modal-license').classList.remove('active')
        document.querySelector('body').style.overflowY = 'auto'
    }
})

// Горизонтальное движение текста
window.onscroll = () => {
    let pos = window.scrollY - 2219;
    document.querySelector('.services-content__img img').style.right = `${pos/9}px`

    if(window.scrollY >= 1){
        document.querySelector('.header').style.background = "#272727"
    } else {
        document.querySelector('.header').style.background = "none"
    }
}

// О компании выпадающий список
document.querySelector('.modal-menu__button').addEventListener('click', function(){
    if(document.querySelector('.modal-menu_list').classList.contains('active')){
        document.querySelector('.modal-menu_list').classList.remove('active')
        document.querySelector('.modal-menu__button img').style.transform = 'rotate(180deg)'
    } else {
        document.querySelector('.modal-menu_list').classList.add('active')
        document.querySelector('.modal-menu__button img').style.transform = 'rotate(360deg)'
    }
})

// бургер меню
document.querySelector('.burger-menu').addEventListener('click', function(){
    if(document.querySelector('.modal-menu').classList.contains('active')){
        document.querySelector('.modal-menu').classList.remove('active')
        document.querySelector('.burger-menu').classList.remove('active')
        document.querySelector('body').style.overflowY = 'auto'
    } else {
        document.querySelector('.modal-menu').classList.add('active')
        document.querySelector('.burger-menu').classList.add('active')
        document.querySelector('body').style.overflowY = 'hidden'
    }
})

// list
document.querySelectorAll('.pricing-listener__sub').forEach((el, elArrayID, elArray) => {
    el.addEventListener('click', function(e){
        if(el.classList.contains('active')){
            el.classList.remove('active')
        } else {
            elArray[elArrayID].classList.add('active')
        }
    })
})

// checkbox
document.querySelector('#inputLine input').addEventListener('click', function(){
    if(document.querySelector('#inputLine input').checked) {
        console.log(123123)
        document.querySelector('#inputLine .custom-ckecbox').style.background = 'url("./img/Checkbox-active.svg")'
    } else {
        document.querySelector('#inputLine .custom-ckecbox').style.background = 'url("./img/Checkbox.svg")'
    }
})



// swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});

// Инициализируем анимации
AOS.init();