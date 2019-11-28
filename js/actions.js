"use strict";

// <!-- basic start --> 
// <!-- basic end -->

// <!-- layout start --> 
// <!-- layout end --> 

// <!-- header start --> 
const menu = document.querySelector('#header-cont .fa-bars');
const header = document.querySelector('#header-cont');
// arrow function
menu.addEventListener('click', ()=>{
    header.classList.toggle('mobile-show');
});
// on scroll event
window.addEventListener('scroll', headerScroll);
headerScroll();
window.addEventListener('scroll', headerHide);
// <!-- header end --> 

// <!-- hero start -->
renderHeroSocials('hero-socials', hero); 
// <!-- hero end --> 

// <!-- about me start --> 
renderProgress('progress', about );
observer.observe(sectionInfo);
// <!-- about me end --> 

// <!-- services start --> 
renderBlocks('services', services );
// <!-- services end --> 

// <!-- portfolio start -->
renderPortfolio('album', portfolio ); 
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
renderNumbers('numbers', numbers );
observerNum.observe(sectionNumbers);
// <!-- numbers end --> 

// <!-- our blog start --> 
// <!-- our blog end --> 

// <!-- contact us start --> 
// <!-- contact us end --> 

// <!-- footer start --> 
// <!-- footer end --> 
