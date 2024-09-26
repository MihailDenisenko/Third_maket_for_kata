var btn_more = document.querySelector('.more');
var wrapper = document.querySelector('.swiper-wrapper');
var el = document.querySelector('.hidden');
var down = document.querySelector('.more__img');
var open_ = document.querySelector('.more__open');
var close_ = document.querySelector('.more__close')

// Функция проверки ширины экнрана 
window.addEventListener('DOMContentLoaded', () => {
  var wid = document.querySelector('.body').clientWidth
  
//  Проверка (320-767 => swiper)
  if (wid > 319 && wid < 500) {
    console.log(`Новые размеры: ${wid}`);
    var swiper = new Swiper(".swiper", {

      slidesPerView: "auto",
      freeMode: true,
      
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        // dynamicBullets: true,
        clickable: true,
      },

    }); 
    
  }
});
// Обработчик события нажатия на кнопку
btn_more.addEventListener('click', () => {

  // Проверка где находится кнопка
  if (wrapper.classList.contains('wrapper-start') === false) {
    // если кнопка закрыта: 
    down.classList.add('more__img_around-start');
    down.classList.remove('more__img_around-end');
    open_.classList.add('more__open-end');
    open_.classList.remove('more__open-start');
    close_.classList.add('more__close-start');
    close_.classList.remove('more__close-end');
    close_.classList.remove('hidden');
    wrapper.classList.add('wrapper-start');
    wrapper.classList.remove('wrapper-end');
    el.classList.remove('hidden');
  } else {
    // Если кнопка открыта
    down.classList.add('more__img_around-end')
    down.classList.remove('more__img_around-start')
    open_.classList.remove('more__open-end');
    open_.classList.add('more__open-start');
    close_.classList.add('more__close-end');
    close_.classList.remove('more__close-start');
    down.classList.remove('more__img_around');
    wrapper.classList.add('wrapper-end');
    wrapper.classList.add('hidden');
    wrapper.classList.remove('wrapper-start');
  }
})

