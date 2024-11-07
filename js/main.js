// video elemnts

let vid = document.getElementById("myVideo"); 

function playVid() { 
  vid.play(); 
} 

function pauseVid() { 
  vid.pause(); 
} 


// slider news

$('.new-section').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true

        }
      }
    ]
  });



//   slider testimonials
$('.testimonals').slick({
    infinite: true,
    dots:true,
    arrows:false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  // Moboile menu

  $(document).ready(function() {
    $('#nav-icon3').click(function() {
        $(this).toggleClass('open');
        $('.mobile-navbar').toggleClass('open');
    });
});


// mid leading 
$(window).on('load resize orientationchange', function() {
  $('.slider').each(function(){
      var $slider = $(this);
      if ($(window).width() > 576) {  
          if ($slider.hasClass('slick-initialized')) {
              $slider.slick('unslick');
          }
      }
      else if ($(window).width() >= 320) {  
          if (!$slider.hasClass('slick-initialized')) {
              $slider.slick({
                  slidesToShow: 1,
                  slidesToScroll:1 ,
                  dots:true,
              });
          }
      }
  });
});
