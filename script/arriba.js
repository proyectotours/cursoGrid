$('.icon').click(function() {
  $('body, html').animate({
    scrollTop: '0px'
  }, 1000);
});
$(window).scroll(function() {
  if ($(this).scrollTop() > 0) {
    $('.icon').slideDown(1000);
  } else {
    $('.icon').slideUp(1000);
  }
});


// const arriba = document.querySelector('.icon');

//   arriba.addEventListener('click', (e) => {

//   });