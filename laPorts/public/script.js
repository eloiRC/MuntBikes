
  
  //document.getElementById("menuBtn").addEventListener("click",menu,{passive: true});

  $(".link").click(function() {
    $(".link").removeClass("activeA")
    $(this).addClass("activeA");
  })

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
    video();
  $('#iframeMaillot').attr('src','./maillot.html');
 
  
  
  });
  

  function video(){
    var width=$( window ).width()
    var min=2
    var max=4
    random=Math.floor(Math.random() * (max - min + 1) ) + min;
    var vidH
    var vidW
    switch (random) {
      case 2:
        vidW='<source src="https://storage.googleapis.com/images-laports/laports_2.webm" type="video/webm"><source src="https://storage.googleapis.com/images-laports/laports_2.mp4" type="video/mp4">'
        vidH='<source src="https://storage.googleapis.com/images-laports/laports_2H.webm" type="video/webm"><source src="https://storage.googleapis.com/images-laports/laports_2H.mp4" type="video/mp4">'
        imgH="./images/laports_2H_H.webp";
        imgW="./images/laports_2_W.webp";
        break;
      case 3:
        vidW='<source src="https://storage.googleapis.com/images-laports/laports_3.webm" type="video/webm"><source src="https://storage.googleapis.com/images-laports/laports_3.mp4" type="video/mp4">'
        vidH='<source src="https://storage.googleapis.com/images-laports/laports_3H.webm" type="video/webm"><source src="https://storage.googleapis.com/images-laports/laports_3H.mp4" type="video/mp4">'
        imgH="./images/laports_3H_H.webp";
        imgW="./images/laports_3_W.webp";
        break;
      case 4:
        vidW='<source src="https://storage.googleapis.com/images-laports/laports_4.webm" type="video/webm"><source src="https://storage.googleapis.com/images-laports/laports_4.mp4" type="video/mp4">'
        vidH='<source src="https://storage.googleapis.com/images-laports/laports_4H.webm" type="video/webm"><source src="https://storage.googleapis.com/images-laports/laports_4H.mp4" type="video/mp4">'
        imgH="./images/laports_4H_H.webp";
        imgW="./images/laports_4_W.webp";
        break;
      default:
        break;
    }

    if(width<900){
      $("#bgvid").empty();
      $("#bgvid").append(vidH);
      $("#bgvid").attr('poster',imgH);
    };
    if(width>900){
     
      $("#bgvid").empty();
      $("#bgvid").append(vidW);
      $("#bgvid").attr('poster',imgW);
    }
  }


  