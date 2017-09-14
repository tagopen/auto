(function($) {
  "use strict"; // Start of use strict

  // Old browser notification
  $(function() {
    $.reject({
      reject: {
        msie: 9
      },
      imagePath: 'img/icons/jReject/',
      display: [ 'chrome','firefox','safari','opera' ],
      closeCookie: true,
      cookieSettings: {
        expires: 60*60*24*365
      },
      header: 'Ваш браузер устарел!',
      paragraph1: 'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
      paragraph2: 'Пожалуйста, установите современный браузер:',
      closeMessage: 'Закрывая это уведомление вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
      closeLink: 'Закрыть это уведомление',
    });
  });

$(document).ready(function() {
  $('.fancybox').fancybox();
});

// Masked phone
$(function($){
  $(".form__input--phone").mask("+38 (999) 9999999");
});

if( ($( window ).width() >= 760) && ($( window ).width() < 992) ) {

    $(document).ready(function(){
    $(".navbar-nav").on("click",".nav__link", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top -$('.navbar').outerHeight()+132}, 1500);
    });
  });

};

if( $( window ).width() > 992 ) {
$(document).ready(function(){
    $(".navbar-nav").on("click",".nav__link", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top -$('.navbar').outerHeight()+1}, 1500);
    });
  });

};

/*  $(function($) {
    var currentMousePos = { x: -1, y: -1 },
        prevMousePos    = {x: -1, y: -1},
        documentTop     = $(document).scrollTop();

    $(document).on('mousemove, mouseout', function(event) {
      currentMousePos.x = event.pageX;
      currentMousePos.y = event.pageY;
      documentTop = $(document).scrollTop();
        // ELSEWHERE, your code that needs to know the mouse position without an event
        if ((currentMousePos.y < prevMousePos.y) && (currentMousePos.y < documentTop + 21)) {
          $('#sibassa__modal').modal("show");
          $(document).unbind('mousemove, mouseout');
        }
        prevMousePos.x = currentMousePos.x;
        prevMousePos.y = currentMousePos.y;
      });
  });*/

  $(window).scroll(function (){ 
    $('.animate').each(function (){
     if ($(window).scrollTop() + $(window).height() >= $(this).offset().top){
      $(this).addClass($(this).data('animation')); 
    } 
  }); 
  }); 

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 30
    });

    // Closes responsive menu when a link is clicked
    $('.navbar-collapse>ul>li>a').click(function() {
      $('.navbar-collapse').collapse('hide');
    });

    $(window).scroll(function() {
      if ($("#mainNav").offset().top > 30) {
        $("#mainNav").addClass("navbar--shrink");
      } else {
        $("#mainNav").removeClass("navbar--shrink");
      }
    });

  if( $( window ).width() >= 760 ) {

    $('.advantage__image').matchHeight({
      byRow: true,
      property: 'height',
      target: null,
      remove: false
    });

    $('.tour__box').matchHeight({
      byRow: true,
      property: 'height',
      target: null,
      remove: false
    });

    $('.tour__elem--1').matchHeight({
      byRow: true,
      property: 'height',
      target: null,
      remove: false
    });

    $('.tour__elem--2').matchHeight({
      byRow: true,
      property: 'height',
      target: null,
      remove: false
    });

    $('.tour__elem--3').matchHeight({
      byRow: true,
      property: 'height',
      target: null,
      remove: false
    });


  }

  // number day in week
  $(function() {
    var $items = $('.detail__flag'),
    active = "detail__flag--active",
    $info  = $('.detail__info--number'),
    date = new Date(),
    today = date.getDay() || 6;

    $items.removeClass(active)
    .slice(0, today)
    .addClass(active);
    $info.text(today);
  });

  //popup  reviews
  $(function () {

    var $dateText = $('.heading__text--client'),
    today = new Date(),
    period = 24 * 60 * 60 * 1000, // 24 hours
    nextDate = new Date(today.getTime() + period),
    $popup = $('.notify'),
    $popupItem = $popup.find('.notify__item'),
    $close     = $popup.find('.notify__close');

    // statement date over
    if (!localStorage.getItem('review') || new Date(localStorage.getItem('review')) < today) {
      // time interval
      var start = Date.now(),
      interval = 20 * 1000, //every 20 sec
      popupItemPosition = 0;
      

      var theInterval = setInterval(function () {
        // stop timer when time is out
        if (Date.now() - start > interval * $popupItem.length) {
          clearInterval(theInterval);
          return;
        }

        // show popup
        if(!$popup.is(":visible")) {
          $popup.show();
        }

        // show item
        $popupItem.eq(popupItemPosition).fadeIn( "slow" ); 
        popupItemPosition ++;
      }, interval);

      localStorage.setItem('review', nextDate );
    }
    
    // stop timer on close
    $close.on('click', function() {
      clearInterval(theInterval);
      $popup.fadeOut('slow');
    });

  });

  $('#video__modal1').on('shown.bs.modal', function() {
    $("#video__modal1 iframe").attr('src', 'https://www.youtube.com/embed/7kvsai5OriE?ecver=1&autoplay=1&showinfo=0&mute=0&iv_load_policy=3&showsearch=0');
  })
  $('#video__modal1').on('hidden.bs.modal', function() {
    $("#video__modal1 iframe").attr('src', 'https://www.youtube.com/embed/7kvsai5OriE?ecver=1&autoplay=0&showinfo=0&mute=1&iv_load_policy=3&showsearch=0');
  })

  $('#video__modal2').on('shown.bs.modal', function() {
    $("#video__modal2 iframe").attr('src', 'https://www.youtube.com/embed/W6c1EbSycd0?ecver=1&autoplay=1&showinfo=0&mute=0&iv_load_policy=3&showsearch=0');
  })
  $('#video__modal2').on('hidden.bs.modal', function() {
    $("#video__modal2 iframe").attr('src', 'https://www.youtube.com/embed/W6c1EbSycd0?ecver=1&autoplay=0&showinfo=0&mute=1&iv_load_policy=3&showsearch=0');
  })

  $('#video__modal3').on('shown.bs.modal', function() {
    $("#video__modal3 iframe").attr('src', 'https://www.youtube.com/embed/StM-iL6p2Fw?ecver=1&autoplay=1&showinfo=0&mute=0&iv_load_policy=3&showsearch=0');
  })
  $('#video__modal3').on('hidden.bs.modal', function() {
    $("#video__modal3 iframe").attr('src', 'https://www.youtube.com/embed/StM-iL6p2Fw?ecver=1&autoplay=0&showinfo=0&mute=1&iv_load_policy=3&showsearch=0');
  })

  $('#video__modal4').on('shown.bs.modal', function() {
    $("#video__modal4 iframe").attr('src', 'https://www.youtube.com/embed/ztVlgNm5czI?ecver=1&autoplay=1&showinfo=0&mute=0&iv_load_policy=3&showsearch=0');
  })
  $('#video__modal4').on('hidden.bs.modal', function() {
    $("#video__modal4 iframe").attr('src', 'https://www.youtube.com/embed/ztVlgNm5czI?ecver=1&autoplay=0&showinfo=0&mute=1&iv_load_policy=3&showsearch=0');
  })

  $('#video__modal5').on('shown.bs.modal', function() {
    $("#video__modal5 iframe").attr('src', 'https://www.youtube.com/embed/X-4ODWjLP40?ecver=1&autoplay=1&showinfo=0&mute=0&iv_load_policy=3&showsearch=0');
  })
  $('#video__modal5').on('hidden.bs.modal', function() {
    $("#video__modal5 iframe").attr('src', 'https://www.youtube.com/embed/X-4ODWjLP40?ecver=1&autoplay=0&showinfo=0&mute=1&iv_load_policy=3&showsearch=0');
  })

  $('#video__modal6').on('shown.bs.modal', function() {
    $("#video__modal6 iframe").attr('src', 'https://www.youtube.com/embed/20Ny_gE5HsA?ecver=1&autoplay=1&showinfo=0&mute=0&iv_load_policy=3&showsearch=0');
  })
  $('#video__modal6').on('hidden.bs.modal', function() {
    $("#video__modal6 iframe").attr('src', 'https://www.youtube.com/embed/20Ny_gE5HsA?ecver=1&autoplay=0&showinfo=0&mute=1&iv_load_policy=3&showsearch=0');
  })

  $('#video__modal7').on('shown.bs.modal', function() {
    $("#video__modal7 iframe").attr('src', 'https://www.youtube.com/embed/qlP5nWgiFpM?ecver=1&autoplay=1&showinfo=0&mute=0&iv_load_policy=3&showsearch=0');
  })
  $('#video__modal7').on('hidden.bs.modal', function() {
    $("#video__modal7 iframe").attr('src', 'https://www.youtube.com/embed/qlP5nWgiFpM?ecver=1&autoplay=0&showinfo=0&mute=1&iv_load_policy=3&showsearch=0');
  })

  $('#video__modal8').on('shown.bs.modal', function() {
    $("#video__modal8 iframe").attr('src', 'https://www.youtube.com/embed/g_mWAnNXHXc?ecver=1&autoplay=1&showinfo=0&mute=0&iv_load_policy=3&showsearch=0');
  })
  $('#video__modal8').on('hidden.bs.modal', function() {
    $("#video__modal8 iframe").attr('src', 'https://www.youtube.com/embed/g_mWAnNXHXc?ecver=1&autoplay=0&showinfo=0&mute=1&iv_load_policy=3&showsearch=0');
  })
  
})(jQuery); // End of use strict