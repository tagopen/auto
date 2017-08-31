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

  $(window).scroll(function (){ 
    $('.animate').each(function (){
     if ($(window).scrollTop() + $(window).height() >= $(this).offset().top){
      $(this).addClass($(this).data('animation')); 
    } 
  }); 
  }); 

  if( $( window ).width() >= 760 ) {

    $('.advantage__image').matchHeight({
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
    today = date.getDay() || 7;

    $items.removeClass(active)
          .slice(0, today)
          .addClass(active);
    $info.text(today);
 });
  
})(jQuery); // End of use strict