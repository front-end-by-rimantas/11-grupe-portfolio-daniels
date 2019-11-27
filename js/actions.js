"use strict";

// <!-- basic start --> 
// <!-- basic end -->

// <!-- layout start --> 
// <!-- layout end --> 

// <!-- header start --> 
// <!-- header end --> 

// <!-- hero start --> 
// <!-- hero end --> 

// <!-- about me start --> 
renderProgress('progress', about );
// <!-- about me end --> 

// <!-- services start --> 

renderBlocks('services', services );

// <!-- services end --> 

// <!-- portfolio start --> 
// <!-- portfolio end --> 

// <!-- testimonials start --> 

renderTestimonials (testimonials);
// document.querySelector ( '#testimonials .testimonials' ).innerHTML = generateTestimonials ( testimonials );
// document.querySelector ('#slide .buttons').innerHTML = generateBubbles('#slide', testimonials)
// document.querySelectorAll( '.navigation .bubble' ).forEach ( item => {
//     item.addEventListener ( 'click', openTestimonial )
// });
renderPagination ('#testimonialContent', renderTestimonials, testimonials, 1 );

// <!-- testimonials end --> 

// <!-- numbers start --> 
// <!-- numbers end --> 

// <!-- our blog start --> 
// <!-- our blog end --> 

// <!-- contact us start --> 
// <!-- contact us end --> 

// <!-- footer start --> 
// <!-- footer end --> 
