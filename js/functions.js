"use strict";

// <!-- basic start --> 
// <!-- basic end -->

// <!-- layout start --> 
// <!-- layout end --> 

// <!-- header start --> 

//for scroll direction
function headerScroll() {
    //curent height position
    const headerHeight = document.querySelector('#header-cont').offsetHeight;
    //position with header height
    const height = window.scrollY + headerHeight + 150;
    //positions of sections mentioned in nav element 
    const DOMlinks = document.querySelectorAll('#header-cont nav a');
    //put all positions id to array
    let links = [];
    //id extraction, gives back all menu id
    for ( let i=0; i<DOMlinks.length; i++ ) {
        const element = DOMlinks[i];
        const href = element.href;
        const split = href.split('#');
        if ( split.length > 1 ) {
            links.push('#'+split[1]);
        }
    }
    // Search of meniu positions height
    let sectionHeights = [];
    for ( let i=0; i<links.length; i++ ) {
        const link = links[i];
        if ( link === '#' ) {
            sectionHeights.push(0);
            continue;
        }
        //Menu sections top position
        const section = document.querySelector(link);       // '#section'
        sectionHeights.push(section.offsetTop);
    }
    // Closest section
    let currentSectionImIn = 0;
    for ( let i=0; i<sectionHeights.length; i++ ) {
        if ( sectionHeights[i] > height ) {
            break;
        }
        currentSectionImIn = i;
        // console.log(currentSectionImIn);  
    }
    // // Remove class active from element which has it
    document.querySelector(`#header-cont nav a.active`).classList.remove('active')
    // // Class active addition
    document.querySelector(`#header-cont nav a[href="${links[currentSectionImIn]}"]`).classList.add('active');
    
    // Header visibility
    if ( currentSectionImIn >= 1) {
        document.querySelector('#header-cont').classList.add('header-visible');
        let aColor = document.querySelectorAll('nav > .list > a');
        for (let i = 0; i < aColor.length; i++) {
            aColor[i].classList.add('header-color');
        }
        document.querySelector('header > .row a').classList.add('header-color');
        document.querySelector('header > .row > i').classList.add('header-color');
    } else {
        document.querySelector('#header-cont').classList.remove('header-visible');
        let aColor = document.querySelectorAll('nav > .list > a');
        for (let i = 0; i < aColor.length; i++) {
            aColor[i].classList.remove('header-color');
        }
        document.querySelector('header > .row a').classList.remove('header-color');
        document.querySelector('header > .row > i').classList.remove('header-color');
    }
    return;
}
//Header hidden on scroll
function headerHide() {
    if ( window.scrollY < 80 ) {
        document.querySelector('#header-cont').classList.remove('header-hide');
    } else {
        document.querySelector('#header-cont').classList.add('header-hide');
    }
    return;
}
// <!-- header end --> 

// <!-- hero start --> 
// <!-- hero end --> 

// <!-- about me start --> 
//Progress-bars rendering
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
                            <div class="" id="${'ok' + i}">
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
//Bar animation while on screen
const sectionInfo = document.querySelector('#progress');
const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return; 
        }
        for (let i = 0; i < about.length; i++) {
            document.querySelector('#ok' + [i]).classList.toggle('loading');
        }
        observer.unobserve(entry.target);
    });
}, options);
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
function renderNumbers(target, list) {
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
            || !item.value) {
                continue;
        }
        if (typeof(item.icon) !== 'string' 
            || typeof(item.title) !== 'string' 
            || !isFinite(item.value)) {
                return console.error('ERROR: Data faile nurodykita informacija nera tekstas arba value nera skaicius');
        }
        if (item.icon.length < 1 
            || item.title.length < 1 
            || item.value < 1) {
                return console.error('ERROR: Data faile nurodytos ne visos arba netinkamos kintamuju reiksmes');
        }      
        HTML += `<div class="block numbers">
                    <div class="row">
                        <i class=" fa fa-${item.icon}" ></i>
                        <div class="value" id="${'count' + i}">${item.value}</div>
                        <h4>${item.title}</h4>
                    </div>
                    </div>`;
        valid++;
        if (valid === 4) {
            break;
        }
    }
        if (valid === 0) {
            return console.error('ERROR: Neivedete nei vienos teisingos reiksmes data.js faile');
            }
        return document.getElementById(target).innerHTML = HTML;
}
//Numbers count UP animation and countup when on screen
const sectionNumbers = document.querySelector('#containerNumbers');
const observerNum = new IntersectionObserver(function(entriesN, observerNum) {
    entriesN.forEach(entry => {  
        if (!entry.isIntersecting) {
            return; 
        }
        goUp(numbers);
        observerNum.unobserve(entry.target);
    });
}, options);
//Find how many numbers we have
function goUp(numbers) {
    let repeat = 0;
    for (let j = 0; j < numbers.length; j++) {
        countUp(j)
        repeat++;
    }
}
//Numbers count UP functions add for each number which schould countUp 
function countUp(j) {
//Find smallest number
    let min = 100000;
    for (let l = 0; l < numbers.length; l++) {
        let skaicius = numbers[l].value;
        if (skaicius < min) {
            min = skaicius; 
        } 
        console.log(min);
    }
// Count UP function  
let elem = document.getElementById('count' + [j]);  
let stopValue = document.getElementById('count' + [j]).textContent;
let value = 0;
let stop = +stopValue;
let id = setInterval(frame, 7);
let speed = Math.round(stop/min);
    function frame() {
        if (value == stop) {
            clearInterval(id);
        } else {
            value = value + 1 * (speed + 1); 
            elem.innerHTML  = value; 
        }
    }
}
// <!-- numbers end --> 

// <!-- our blog start --> 
// <!-- our blog end --> 

// <!-- contact us start --> 
// <!-- contact us end --> 

// <!-- footer start --> 
// <!-- footer end --> 


// const sectionInfo = document.querySelector('.info-me');

// const options = {
//     root: null,
//     treshold: 0.25,
//     rootMargin: "-200px 0px -400px 0px"

// };

// const observer = new IntersectionObserver(function(entries, observer) {
//     entries.forEach(entry => {
//         // console.log(entry.target);
        
//     });
    
// }, options);
// observer.observe(sectionInfo);