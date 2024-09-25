


window.addEventListener('DOMContentLoaded', () => {
  var wid = document.querySelector('.body').clientWidth
  
 
  if (wid > 319 && wid < 768) {
    console.log(`Новые размеры: ${wid}`);
    const mySwiper = new Swiper(".swiper", {

      slidesPerView: "auto",
      spaceBetween: 0,
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
