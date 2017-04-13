$('.site-navbar a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
      $('html, body').stop().animate({
          scrollTop: target.offset().top
      }, 1000);
  }
});
$('.snipcart-add-item').on('click', function(event) {
  $(this).closest('.modal-art').modal('hide')
});

$('#modal-commercial').on('shown.bs.modal', function (e) {
  $('.video-commercial')[0].play();
})
$('#modal-commercial').on('hide.bs.modal', function (e) {
  $('.video-commercial')[0].pause();
})