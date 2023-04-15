let toggle =document.getElementById('all');
let menu = document.getElementById('menu')

document.onclick = function(e){
  if(e.target.id !=='menu' && e.target.id !=='all' ){
     all.classList.remove('active');
     menu.classList.remove('active')
  }
}
    toggle.onclick = function(){
      all.classList.toggle('active');
     menu.classList.toggle('active')

    }


  $(document).ready(function(){
    $(".scroll_top").click(function(){
      $('.header') .show(3000)
    });

   
  });



  $(function(){
    $('#MixItUp1').mixItUp({
      selectors: {
        filter: '.filter-1',
        sort: '.sort-1'
      }
    });
    
    $('#MixItUp2').mixItUp({
      selectors: {
        filter: '.filter-2',
        sort: '.sort-2'
      }
    });
  });


$('.container_slider').slick({

  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




















