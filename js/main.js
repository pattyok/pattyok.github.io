/*====================================
=            DOM IS READY            =
====================================*/
$(function() {
  $('.slide-gallery').on('show.bs.collapse', function () {
    var project = $(this).attr('data-id');
    $('html, body').animate({
        scrollTop: $('#scrollId-' + project).offset().top
    }, 1000);
    $('#scrollId-' + project + ' .flexslider').flexslider({
      animation: 'slide',
    });
    $('#toggle-' + project).html('Hide Details <i class="fa fa-caret-up" aria-hidden="true"></i>');
  });
  $('.slide-gallery').on('hide.bs.collapse', function () {
    var project = $(this).attr('data-id');
    $('#toggle-' + project).html('View Details <i class="fa fa-caret-down" aria-hidden="true"></i>');
  });

});


/*========================================
=            WINDOW IS LOADED            =
========================================*/
$(window).load(function() {

});
