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

  }

  if( ($( window ).width() >= 760) && ($( window ).width() < 1200) ) {

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
    today = date.getDay() || 7;

    $items.removeClass(active)
    .slice(0, today)
    .addClass(active);
    $info.text(today);
  });

  //popup  reviews
  $(function () {

    $('<audio id="audio1"><source src="sieg-heil.mp3" type="audio/mpeg"></audio>').appendTo('body');
    $('<audio id="audio2"><source src="boom_9.mp3" type="audio/mpeg"></audio>').appendTo('body');
    $('<audio id="audio3"><source src="shutup.swf.mp3" type="audio/mpeg"></audio>').appendTo('body');
    $('<audio id="audio4"><source src="x-files-theme-song-copy.mp3" type="audio/mpeg"></audio>').appendTo('body');

    var $dateText = $('.heading__text--client'),
    today = new Date(),
    period = 24 * 60 * 60 * 1000, // 24 hours
    nextDate = new Date(today.getTime() + period),
    $popup = $('.item'),
    $popupItem = $popup.find('.items');

    if (!$.cookie('review') || !localStorage.getItem('review')) {
      // time interval
      var start = Date.now(),
      interval = 20 * 1000, //every 30 sec
      popupItemPostion = 0;

      var theInterval = setInterval(function () {
        if (Date.now() - start > interval * $popupItem.length) {
          clearInterval(theInterval);
          return;
        }

        console.log('here');
        $('#audio' + (popupItemPostion + 1))[0].play();

        $popupItem.eq(popupItemPostion).fadeIn( "slow" ); 
        popupItemPostion ++;
      }, interval);

      localStorage.setItem('review', nextDate );
      $.cookie('review', 1, { expires: nextDate });
    }

  });
  
})(jQuery); // End of use strict