
   

    var menuButton = document.querySelector('.menu-button');
    var openMenu = function () {
      swiper.slidePrev();
    };
    var swiper = new Swiper('.swiper', {
      slidesPerView: 'auto',
      initialSlide: 1,
      resistanceRatio: 0,
      slideToClickedSlide: true,
      on: {
        slideChangeTransitionStart: function () {
          var slider = this;
          if (slider.activeIndex === 0) {
            menuButton.classList.add('cross');
            // required because of slideToClickedSlide
            menuButton.removeEventListener('click', openMenu, true);
          } else {
            menuButton.classList.remove('cross');
          }
        },
        slideChangeTransitionEnd: function () {
          var slider = this;
          if (slider.activeIndex === 1) {
            menuButton.addEventListener('click', openMenu, true);
          }
        },
      },
    });

    var fundo = window.document.getElementById('conteudo');
    var fundo2 = window.document.getElementById('desc');

    function clicar(num) {
  
                  if (num == 'projeto1'){
                      fundo.style.backgroundImage = 'url(../../imagens/login.jpeg)';
                      fundo2.style.marginLeft = '0%'
                      fundo2.style.transition = '2s'
                      fundo.style.transition = '2s'
                  }
                  if (num == 'projeto2'){
                      fundo.style.backgroundImage = 'url(../../imagens/android.jpeg)';
                      fundo2.style.marginLeft = '-25%'
                      fundo2.style.transition = '2s'
                      fundo.style.transition = '2s'
                  }
                  if (num == 'projeto3'){
                      fundo.style.backgroundImage = 'url(../../imagens/cordel.jpeg)';
                      fundo2.style.marginLeft = '-50%'
                      fundo2.style.transition = '2s'
                      fundo.style.transition = '2s'
                  }
                  if (num == 'projeto4'){
                      fundo.style.backgroundImage = 'url(../../imagens/porti.jpeg)';
                      fundo2.style.marginLeft = '-75%'
                      fundo2.style.transition = '2s'
                      fundo.style.transition = '2s'
                  }
                  if (num == 'projeto5'){
                      fundo.style.backgroundImage = 'url(../../imagens/3.png)';
                      fundo2.style.marginLeft = '-25%'
                      fundo2.style.transition = '2s'
                  }
                }




    

   //var fundo = window.document.getElementById('desc');
    //fundo.style.color= "blue";



