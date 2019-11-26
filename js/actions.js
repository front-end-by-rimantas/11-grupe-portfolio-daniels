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
// <!-- hero end --> 

// <!-- about me start --> 
renderProgress('progress', about );
observer.observe(sectionInfo);
// <!-- about me end --> 

// <!-- services start --> 
renderBlocks('services', services );
// <!-- services end --> 

// <!-- portfolio start --> 
// <!-- portfolio end --> 

// <!-- testimonials start --> 
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
