
$('.item').hover(
    function(){
        var $this = $(this);
        expand($this);
    },
    function(){
        var $this = $(this);
        collapse($this);
    }
);
function expand($elem){
    var angle = 0;
    var t = setInterval(function () {
        if(angle == 1440){
            clearInterval(t);
            return;
        }
        angle += 40;
        $('.link',$elem).stop().animate({rotate: '+=-40deg'}, 0);
    },10);
    $elem.stop().animate({width:'268px'}, 1000)
    .find('.item_content').fadeIn(400,function(){
        $(this).find('p').stop(true,true).fadeIn(600);
    });
}
function collapse($elem){
    var angle = 1440;
    var t = setInterval(function () {
        if(angle == 0){
            clearInterval(t);
            return;
        }
        angle -= 40;
        $('.link',$elem).stop().animate({rotate: '+=40deg'}, 0);
    },10);
    $elem.stop().animate({width:'52px'}, 1000)
    .find('.item_content').stop(true,true).fadeOut().find('p').stop(true,true).fadeOut();
}

 
  
   
          
    function initMap(){
  //map options
  var options={
  zoom:8,
  center:{lat:29.924526, lng:31.205753}
  }
  //new map
  var map = new google.maps.Map(document.getElementById('map'),options);
  //add marker
  var marker=new google.maps.marker({
  position:{lat:30.60427 ,lng:32.27225},
  map:map,
  icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  });
  var infoWindow = new google.maps.InfoWindow({
  content:'<h1>Ismailia</h1>'
  })
  marker.addListener('click',function(){
  info
  
  Window.open(map,marker);
  });
  }

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
 