"use strict";

// <!-- basic start --> 
// <!-- basic end -->

// <!-- layout start --> 
// <!-- layout end --> 

// <!-- header start --> 

//for croll direction

function headerScroll() {
    //curent height position
    const headerHeight = document.querySelector('#header-cont').offsetHeight;
    //position with header height
    const height = window.scrollY + headerHeight;
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
        console.log(currentSectionImIn);  
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



function countUp(numbers, list) {
// for (let j = 0; j < list.length; j++) {
//     var elem = document.getElementById("count");   
//     var value = 0;
//     let stopValue = document.getElementById("count").textContent;
//     let stop = +stopValue;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (value == stop) {
//         clearInterval(id);
//       } else {
//         value++; 
//         elem.innerHTML  = value; 
//       }
//     }
    
// }
    var elem = document.getElementById("count0");   
    var value = 0;
    let stopValue = document.getElementById("count0").textContent;
    let stop = +stopValue;
    var id = setInterval(frame, 10);
    function frame() {
      if (value == stop) {
        clearInterval(id);
      } else {
        value++; 
        elem.innerHTML  = value; 
      }
    }
  }

// function numbersAnimation() {
    
// let countDown = document.getElementById('#count');

// let countItDown = function () {
// count.textContent = parseFloat(count.textContent) - 1
    
// };
// window.setInterval(countItDown, );


// //curent height position
// const headerHeight = document.querySelector('#header-cont').offsetHeight;
// //Needed section height 
// const numbersHeight = document.querySelector('#numbers').offsetHeight;
// //Current position with header height
// const currentHeight = window.scrollY + headerHeight;

// $(".numbers .row .value").counterUP({delay:10, time:1000});


// }

// <!-- numbers end --> 

// <!-- our blog start --> 
// <!-- our blog end --> 

// <!-- contact us start --> 
// <!-- contact us end --> 

// <!-- footer start --> 
// <!-- footer end --> 