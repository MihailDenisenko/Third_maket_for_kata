var btn_more = document.querySelector('.more');
var wrapper = document.querySelector('.swiper-wrapper');



window.addEventListener('DOMContentLoaded', () => {
  var wid = document.querySelector('.body').clientWidth
  
 
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

btn_more.addEventListener('click', () => {

  // el[0].style = 'overflow-y: visible';

  if (wrapper.classList.contains('wrapper-start') === false) {
    wrapper.classList.add('wrapper-start')
    wrapper.classList.remove('wrapper-end')
  } else {
    wrapper.classList.add('wrapper-end')
    wrapper.classList.remove('wrapper-start')
  }
})

