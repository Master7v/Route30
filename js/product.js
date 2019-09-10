$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      
                items: 6,
                loop: true,
                margin: 20,
                
  });
   
});


$(".decription").click(function(){
    
   $(".decription-content").slideToggle(1000); 
    
})
$(".generaltab").click(function(){
    
   $(".generaltab-content").slideToggle(1000); 
    
})
$(".review").click(function(){
    
   $(".review-content").slideToggle(1000); 
    
})



$(".owl-carousel img").click(function(){
    
     let imgSrc= $(this).attr("src");
    $("#prodPic").attr("src",imgSrc);
        
})


$(".proclrpic img").click(function(){
    
    
    let imgSrc1= $(this).attr("src");
    $("#prodPic").attr("src",imgSrc1);
     
})







