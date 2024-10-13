const swiper = new Swiper('.caixa_slide', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 10,
   
    loop: true,
    grabCursor: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 10,
        },

        900: {
            slidesPerView: 3,
            spaceBetween: 10,

        },
       
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
    }
  });
