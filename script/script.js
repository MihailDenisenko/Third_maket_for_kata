


window.addEventListener('resize', () => {
  var wid = document.querySelector('.mySwiper').clientWidth
  
 
  if (wid > 320 && wid < 768) {
    console.log(`Новые размеры: ${wid}`);
    // swiper = ''
  
    var swiper = new Swiper(".mySwiper", {

      slidesPerView: 'auto',
      spaceBetween: 20,
      
      
      
      
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        dynamicBullets: true,
        clickable: true,
      },

      // Navigation arrows
      //   navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },

      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    });
  }
})
