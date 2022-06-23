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