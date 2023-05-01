
$(document).ready(function(){
  $(".cards").owlCarousel( {
      items: 4,
      loop: true,
      autoplay: true,
      margin: 20,
      nav: false,
      
      responsive: {    
    0: {
      items: 1,
    },
          
    768: {
      items: 2,
    },
    1200: {
      items: 4
    }
    }
  });
    
  $(".cards2").owlCarousel( {
      items: 8,
      loop: true,
      autoplay: true,
      margin: 20,
      nav: false,
      navContainer: "owl-custom-controls2", 
      dots: false,
      
      responsive: {
    0: {
      items: 2
    },
       
    768: {
      items: 3
    },
    1200: {
      items: 8
    }
    }
  });
});


$(document).ready(function() {
  $(".owl-custom-prev").click(function() {
    $(".owl-carousel").trigger("prev.owl.carousel");
  });

  $(".owl-custom-next").click(function() {
    $(".owl-carousel").trigger("next.owl.carousel");
  });
    
  $(".owl-custom-prev2").click(function() {
    $(".owl-carousel2").trigger("prev.owl.carousel");
  });

  $(".owl-custom-next2").click(function() {
    $(".owl-carousel2").trigger("next.owl.carousel");
  });
});
