const swiper_h = new Swiper('.swiper-h', {
  // Optional parameters
  // direction: 'vertical',
  direction: 'horizontal',
  autoplay: true,
  loop: true,
  speed: 600,

  // freeMode: true, 
  
  slidesPerView: 'auto',

  // effect: 'cube',
  // cubeEffect: {
  //   slideShadows: false,
  // },
  //   effect: 'flip',
  // flipEffect: {
  //   slideShadows: false,
  // },
  // effect: 'cards',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
    clickable: true,
  },

  // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});


const swiper_v = new Swiper('.swiper-v', {
  direction: 'vertical',

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
    clickable: true,
  },
})

