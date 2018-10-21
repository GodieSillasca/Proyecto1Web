document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

$('.carousel.carousel-slider').carousel({
    fullWidth: true
  });

  $(document).ready(function() {
    M.updateTextFields();
  });