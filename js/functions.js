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
// <!-- about me end --> 

// <!-- services start --> 
    function renderBlocks(target, list) {
        let HTML = '';

        for (let i = 0; i < list.length; i++) {
            const item = list[i];
            HTML += `<div class="block">
                        <i class=" fa fa-${item.icon}" ></i>
                        <h4>${item.title}</h4>
                        <div class="description">${item.description}</div>
                     </div>`;
            
        }
        return document.getElementById(target).innerHTML = HTML;
        
    }
// <!-- services end --> 

// <!-- portfolio start --> 
// <!-- portfolio end --> 

// <!-- testimonials start --> 
// <!-- testimonials end --> 

// <!-- numbers start --> 
// <!-- numbers end --> 

// <!-- our blog start --> 
// <!-- our blog end --> 

// <!-- contact us start --> 
// <!-- contact us end --> 

// <!-- footer start --> 
// <!-- footer end --> 