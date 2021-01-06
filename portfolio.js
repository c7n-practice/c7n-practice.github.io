function updateButton() {
  if ($(this).scrollTop() >= 50) {
    $('#bottom-to-top').fadeIn();
  } else {
    $('#bottom-to-top').fadeOut();
  }
}

$(document).ready(function() {
  updateButton();

  $(window).scroll(updateButton);

  $('#bottom-to-top').click(function() {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      600
    );
    return false;
  });
});


// $(document).ready(function() {
//   $('.top').on('mouseover', function() {
//   $(this).addClass('animated rubberBand');
// },
// function() {
//   $(this).removeClass('animated rubberBand');
// });
// });


$(document).ready(function(){
  $('.context_jobexperience').hover(function(){
    $('h3').css({
      color: '#f66070',
    });
  }, function(){
    $('h3').css({
      color: '',
    });
  });
});

$(document).ready(function(){
  $('.context_education').hover(function(){
    $(this).css({
      color: '#f66070',
    });
    }, function(){
      $(this).css({
        color: '',
    });
  });
});

$(document).ready(function(){
  $('.context_skills').hover(function(){
    $(this).css({
      color: '#f66070',
    });
    }, function(){
      $(this).css({
        color: '',
    });
  });
});

