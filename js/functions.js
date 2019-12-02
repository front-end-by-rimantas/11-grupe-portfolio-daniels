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
function heroAnimation( list, wordIndex, letterIndex, actionType ) {
    // Element with animation
    const target = document.getElementById('hero-anime');
    const timeStep = 50;
    const delayAfter = 500;
    const deleteTimeStep = 50;
    const delayBefore = 1000;

    if ( actionType === 'add' ) {
        target.classList.add('anime');
        setTimeout(() => {
            //Convert word to separate letters
            target.textContent += list[wordIndex][letterIndex];
            if ( list[wordIndex].length > letterIndex + 1 ) {
                heroAnimation( list, wordIndex, letterIndex+1, actionType )
            } else {
                heroAnimation( list, wordIndex, letterIndex, 'delayAfter' )
            }
        }, timeStep);
    }
    if ( actionType === 'delayAfter' ) {
        setTimeout(() => {
            heroAnimation( list, wordIndex, letterIndex, 'remove' )
        }, delayAfter);
    }
    if ( actionType === 'remove' ) {
        setTimeout(() => {
            const word = list[wordIndex];
            //Takes one letter out
            target.textContent = word.slice(0, letterIndex);
            if ( 0 <= letterIndex - 1 ) {
                heroAnimation( list, wordIndex, letterIndex-1, actionType )
            } else {
                heroAnimation( list, wordIndex, letterIndex, 'delayBefore' )
            }
        }, deleteTimeStep);
    }
    if ( actionType === 'delayBefore' ) {
        setTimeout(() => {
            // Check which word to animate
            if ( wordIndex+1 === list.length ) {
                heroAnimation( list, 0, 0, 'add' )
            } else {
                heroAnimation( list, wordIndex+1, 0, 'add' )
            }
        }, delayBefore);
    }
}


function renderHeroSocials(target, list) {
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
        if (!item.icon) {
            continue;
        }
        if (typeof(item.icon) !== 'string') {
            return console.error('ERROR: Data faile nurodykita informacija nera tekstas arba value nera skaicius');
        }
        if (item.icon.length < 1) {
                return console.error('ERROR: Data faile nurodytos ne visos arba netinkamos kintamuju reiksmes');
        }      
        HTML += `<i class=" fa fa-${item.icon}" ></i>`;
        valid++;
        if (valid === 5) {
            break;
        }
    }
        if (valid === 0) {
            return console.error('ERROR: Neivedete nei vienos teisingos reiksmes data.js faile');
            }
        return document.getElementById(target).innerHTML = HTML;
}

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
function renderPortfolio(target, list) {
    let HTML = '';
    let valid = 0;
    if ( target.length === 0 ||
        typeof(target) !== 'string' ) {
        return console.error('ERROR: Nurodykite kuriose vietose HTML faile taikyti funkcija');
    }    
    if (!Array.isArray(list)) {
        return console.error('ERROR: Truksta saraso');
    }
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (!item.imgFile ||
            !item.class) {
            continue;
        }
        if (typeof(item.imgFile) !== 'string' ||
            typeof(item.class) !== 'string') {
            return console.error('ERROR: Data faile nurodykita informacija nera tekstas');
        }
        if (item.imgFile.length < 4) {
                return console.error('ERROR: Data faile nurodytos ne visos arba neiteisingos kintamuju reiksmes');
        }
        HTML += `<div class="block port-block show ${item.class}">
                    <div class="portfolio-img">
                        <div class="hover-efect">
                            <div class="text">WEB DESIGN</div>
                            <div class="center-fafa">
                                <i class="fa fa-chain-broken"></i>
                                <i class="fa fa-search-plus"></i>
                            </div>
                        </div>
                        <img class="port-image" src="./img/portfolio/${item.imgFile}">
                    </div>
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
//Gallery filtering
filterSelection("all");
function filterSelection(filterWord) {
   let selector = document.getElementsByClassName("port-block"); 
   if (filterWord == "all") filterWord = "";
   for (let i = 0; i < selector.length; i++) {
        RemoveClass(selector[i], "show");
        if (selector[i].className.indexOf(filterWord) > -1) AddClass(selector[i], "show");

   }
}

function AddClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }
  
function RemoveClass(element, name) {
let i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
    arr1.splice(arr1.indexOf(arr2[i]), 1);             
    }
}
element.className = arr1.join(" ");
}

  // Add active class to the current button (highlight it)
let navList = document.getElementById("works-nav").getElementsByClassName("nav-list");
for (let i = 0; i < navList.length; i++) {
    navList[i].addEventListener("click", function(){
    let current = document.getElementById("works-nav").getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



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
let id = setInterval(frame, 50);
let speed = Math.round(stop/20);
    function frame() {
        if (value >= stop) {
            clearInterval(id);
            elem.innerHTML  = stopValue;
        } else {
            value = value + 1 * speed; 
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
