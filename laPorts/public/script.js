(function($) {
    var selector = ".section";
  
    var $slides = $(selector);
  
    var currentSlide = 0;
    var isAnimating = false;
  
    var stopAnimation = function() {
      setTimeout(function() {
        isAnimating = false;
      }, 200);
    };
  
    var bottomIsReached = function($elem) {
      var rect = $elem[0].getBoundingClientRect();
      return rect.bottom <= $(window).height();
    };
  
    var topIsReached = function($elem) {
      var rect = $elem[0].getBoundingClientRect();
      return rect.top >= 0;
    };
  
    document.addEventListener(
      "wheel",
      function(event) {
        var $currentSlide = $($slides[currentSlide]);
  
        if (isAnimating) {
          event.preventDefault();
          return;
        }
  
        var direction = -event.deltaY;
  
        if (direction < 0) {
          // next
          if (currentSlide + 1 >= $slides.length) return;
          if (!bottomIsReached($currentSlide)) return;
          event.preventDefault();
          currentSlide++;
          var $slide = $($slides[currentSlide]);
          var offsetTop = $slide.offset().top;
          isAnimating = true;
          $("html, body").animate(
            {
              scrollTop: offsetTop
            },
            "slow","linear",
            stopAnimation
          );
        } else {
          // back
          if (currentSlide - 1 < 0) return;
          if (!topIsReached($currentSlide)) return;
          event.preventDefault();
          currentSlide--;
          var $slide = $($slides[currentSlide]);
          var offsetTop = $slide.offset().top;
          isAnimating = true;
          $("html, body").animate(
            {
              scrollTop: offsetTop
            },
            "slow","linear",
            stopAnimation
          );
        }
      },
      { passive: false }
    );
  })(jQuery);
  
  document.getElementById("menuBtn").addEventListener("click",menu);

  var menuOpen = false;

  function menu(){
    if(menuOpen){
      menuOpen=false;
      //esconde opciones
      $("#dropDown").slideUp('slow');

      $("#cross").fadeOut("fast",function(){
        $("#hamburger").fadeIn()
      })
      
    }
    else{
      menuOpen=true;
      //muestra opciones

      $("#dropDown").slideDown('slow');
      $("#hamburger").fadeOut("fast", function(){
        $("#cross").fadeIn()
      })
      


    }
  }

  $(document).ready(function() {
    
    $("a").click(function() {
      $("a").removeClass("activeA")
      $(this).addClass("activeA");
  })});
  