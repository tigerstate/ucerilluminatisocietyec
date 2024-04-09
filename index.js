var splide = new Splide( '.splide', {
    perPage: 4,
    gap    : '2rem',
    perMove:1,
    type : 'loop',
    drag: 'free',
    snap: true,
    autoplay: true,
    arrows:true,
    pagination:false,
   

    breakpoints: {
      640: {
        perPage: 2,
        gap    : '.7rem',
       
       
      },
      480: {
        perPage: 1,
        gap    : '.7rem',
       
      },
    },
  } );
  
  splide.mount();