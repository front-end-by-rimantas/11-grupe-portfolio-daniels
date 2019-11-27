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
function renderProgress(target, list) {
    let HTML = '';
    let valid = 0;

    if (target.length === 0 ||
        typeof(target) !== 'string' ) {
        return console.error('ERROR: Nurodykite kuriose vietose HTML faile taikyti funkcija');
   }
    if ( !Array.isArray(list) ) {
        return console.error('ERROR: Truksta saraso');
    }
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (!item.title ||
            !item.value) {
                continue;
        }
        if (typeof(item.title) !== 'string' ||
            typeof(item.value) !== 'number' ||
            !isFinite(item.value)) {
                return console.error('ERROR: Data faile nurodykita informacija nera teisinga. Ptikrinkite ar pirma reiksme tekstas ir natra skaicius');
        }
        if (item.title.length < 1 || 
            item.value < 30) {
                return console.error('ERROR: Data faile nurodytos ne visos kintamuju reiksmes arba permaza procentine reiksme, min 30');
        }
        HTML += `<div class="progress-bar">
                    <div class="texts">
                        <div class="title">${item.title}</div>
                    </div>
                    <div class="bar">
                        <div class="value" style="width: ${item.value}%">
                            <div class="loading">
                             <div class="value">${item.value}%</div>
                            </div>
                        </div>
                    </div>
                </div>`
            valid++;
        if (valid === 3) {
           break;
        }
    }
        if (valid === 0) {
            return console.error('ERROR: Neivedete nei vienos teisingos reiksmes data.js faile');
         }
    return document.querySelector('#progress').innerHTML = HTML;
}

// <!-- about me end --> 

// <!-- services start --> 
    function renderBlocks(target, list) {
        let HTML = '';
        let valid = 0;

        if ( target.length === 0 ||
            typeof(target) !== 'string' ) {
            return console.error('ERROR: Nurodykite kuriose vietose HTML faile taikyti funkcija');
       }
        if ( !Array.isArray(list) ) {
            return console.error('ERROR: Truksta saraso');
        }
        for (let i = 0; i < list.length; i++) {
            const item = list[i];
            if (!item.icon
                || !item.title
                || !item.description) {
                    continue;
            }
            if (typeof(item.icon) !== 'string' 
                || typeof(item.title) !== 'string' 
                || typeof(item.description) !== 'string') {
                    return console.error('ERROR: Data faile nurodykita informacija nera tekstas');
            }
            if (item.icon.length < 1 
                || item.title.length < 1 
                || item.description.length < 1) {
                    return console.error('ERROR: Data faile nurodytos ne visos kintamuju reiksmes');
            }
            HTML += `<div class="block">
                        <i class=" fa fa-${item.icon}" ></i>
                        <h4>${item.title}</h4>
                        <div class="description">${item.description}</div>
                     </div>`;
            valid++;
            if (valid === 6) {
               break;
            }
        }
            if (valid === 0) {
                return console.error('ERROR: Neivedete nei vienos teisingos reiksmes data.js faile');
             }
        return document.getElementById(target).innerHTML = HTML;
    }

// <!-- services end --> 

// <!-- portfolio start --> 
// <!-- portfolio end --> 

// <!-- testimonials start --> 


    
// function generateTestimonials (testimonials) {
  
//     let listHTML = ``;

//     testimonials.forEach ( testimonialContent  => {
//         listHTML += `<div class="item">
//                         <div class="imgFile">
//                             <img src="./img/clients/${testimonialContent.imgFile}">
//                         </div>
//                         <div class="content">${testimonialContent.content}</div>
//                         <div class="author">${testimonialContent.author}</div>
//                         <div class="occupation">${testimonialContent.occupation}</div>    
//                      </div>`;
//     });

//         return `<div class="testimonials">
//                         <div id="carousel" class="list">${listHTML}</div>
//                         <div id="slide" class="navigation">
//                             <div class="buttons"</div>
//                         </div>
//                     </div>`;
// } 


function renderTestimonials ( list ) {
    let HTML ='';
    
    
    if ( list.length === 0 ||
        typeof(list) !== 'string' ) {
        return console.error('ERROR: Nurodykite kuriose vietose HTML faile taikyti funkcija');
    }

    if ( !Array.isArray(list) ) {
        return console.error('ERROR: Truksta saraso');
    }

    for (let i = 0; i < list.length; i++) {
        const item = list[i];
            
        if (!item.imgFile ||
            !item.content ||
            !item.author ||
            !item.occupation) {
            continue;
        }

    if (typeof(item.imgFile) !== 'string' ||
        typeof(item.content) !== 'string' ||
        typeof(item.author) !== 'string'||
        typeof(item.occupation) !== 'string') {
            return console.error('ERROR: Data faile nurodykita informacija nera tekstas');
    }    

    if (item.imgFile.length < 1 ||
        item.content.length < 1 ||
        item.author.length < 1 ||
        item.occupation.length < 1) {
            return console.error('ERROR: Data faile nurodytos ne visos kintamuju reiksmes');
    }        

    HTML += renderTestimonialItem ( item );
    }
    return document.querySelector('#testimonialContent').innerHTML = HTML;
} 

function renderTestimonialItem ( item ) {
    return `<div class="item">
    <div class="imgFile">
        <img src="./img/clients/${item.imgFile}">
    </div>
    <div class="content">${item.content}</div>
    <div class="author">${item.author}</div>
    <div class="occupation">${item.occupation}</div>    
          </div>`;
}

// function  generateBubbles () {

//     let bubHTML = ``;
        
//     for (let i=0; i<=testimonials.length-1; i++) {
//         bubHTML += `<div class="bubble"></div>`;
    
//      } return `<div id="slide" class="navigation">${bubHTML}</div>`;    
// }  


function renderPagination ( target, renderingFunction, data, countPerPage ) {
    if ( typeof(target ) !== 'string' || 
        target === '' ) {
        return console.error( 'Pirmasis parametras: Reikia nurodyti vieta, kurioje norima sugeneruoti turini.');
    } 
    
    

    const DOM = document.querySelector(target);
    if (DOM === null ) {
        return console.error ('Vieta, kurioje norima sugeneruoti turini - nerasta.')
    }  
    
    if (typeof(renderingFunction) !== 'function' ) {
        return console.error('Antrasis parametras: Reikia nurodyti funkcijos, kuri turi sugeneruoti pavienio elemento HTMLa, pavadinima' );
    } 
    
    if ( !Array.isArray(data)) {
        return console.error ('Treciasis parametras: Reikia pateikti sarasa objektu, kurie apraso generuojamus objektus.');
    } 
    

    if ( data.length === 0 ) {
        return console.error ('Treciasis parametras: Reikia pateikti sarasa objektu, kuris nebutu tuscias.');
    } 

    let objectsOnly = true;
    for ( let i=0; i<data.length; i++ ) {
        if (typeof(data[i]) !== 'object' ) {
            objectsOnly = false; 
            break;
        }
        // if ( !objectsOnly );
        // return console.error( ' Treciasis parametras: Sarasa turi sudaryti tiktai objektai.');
    } 
    

    // if ( !isFinite( countPerPage) ||
    //     typeof( countPerPage !== 'number')) {
    //     return console.error( 'Ketvirtasis parametras: Reikai nurodyti po kelis elementus atvaizduoti per puslapiavima (validus skaicius).');
    // }

    if ( countPerPage < 1 ||
        countPerPage % 1 !== 0 ) {
        return console.error( 'Ketvirtasis parametras: Reikai nurodyti po kelis elementus atvaizduoti per puslapiavima, tik sveikas, teigiamas skaicius');
    }

    let HTML = '';
    const pageCount = Math.ceil(data.length / countPerPage);
    let listHTML = '';
    let pageHTML ='';

    for ( let p=0; p<countPerPage; p++) {
        pageHTML = renderingFunction( data[p]);
    }

    let bubblesHTML = '';

    for ( let i=0; i<pageCount; i++) {
        listHTML += `<div class="page">
                        ${pageHTML}
                    </div>`;
        bubblesHTML += `div class="bubble"></div>`;
    }

    HTML +=    `<div class="pagination">
                    <div class="list">
                        ${listHTML}
                    </div>
                    <div class="controls">
                        ${bubblesHTML}
                    <div>
                </div>`;
           

    DOM.innerHTML = HTML;

    return;
}


// active bubble
// document.addEventListener('click' .bubble).classList.add('active');
// console.log('aa');


// document.querySelectorAll ('.navigation .bubble').forEach ( item => {
//     item.addEventListener ('click').classList.add('active');
// });




// function openTestimonial ( event ) {
//     let target = event.target;

//     if ( target.contains('01')) {
//         document.getElementById("carousel").style.marginLeft = "0"; 
//     }
//     if ( classList.contains('two')) {
//         document.getElementById("carousel").style.marginLeft = "-100%";
//     } 
//     if ( classList.contains('three')) {
//         document.getElementById("carousel").style.marginLeft = "-200%";
//     }
//     return;
// }




// <!-- testimonials end --> 

// <!-- numbers start --> 
// <!-- numbers end --> 

// <!-- our blog start --> 
// <!-- our blog end --> 

// <!-- contact us start --> 
// <!-- contact us end --> 

// <!-- footer start --> 
// <!-- footer end --> 