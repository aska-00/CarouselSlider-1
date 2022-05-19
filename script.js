$(function () {
  let width = 100;
  let length = $('.carousel-list').length;
  let slideArea = width * length + '%';
  $('.carousel-area').css('width', slideArea);
  let slideCurrent = 0;
  let lastCurrent = $('.carousel-list').length - 1;
  function changeslide() {
    $('.carousel-area')
      .stop()
      .animate({
        left: slideCurrent * -width + '%',
      });
    let pagiNation = slideCurrent + 1;
    $('.pagination-circle').removeClass('target');
    $('.pagination-circle:nth-of-type(' + pagiNation + ')').addClass('target');
  }

  $('.arrow-right').click(function () {
    if (slideCurrent === lastCurrent) {
      slideCurrent = 0;
      changeslide();
    } else {
      slideCurrent++;
      changeslide();
    }
  });

  $('.arrow-left').click(function () {
    if (slideCurrent === 0) {
      slideCurrent = lastCurrent;
      changeslide();
    } else {
      slideCurrent--;
      changeslide();
    }
  });
});
