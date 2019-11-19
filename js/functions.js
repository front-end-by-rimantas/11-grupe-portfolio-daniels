"use strict";

// <!-- basic start --> 
// <!-- basic end -->

// <!-- layout start --> 
// <!-- layout end --> 

// <!-- header start --> 

//for croll direction
var lastScrollPosition = 0;

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
//scroll direction
if (window.scrollY < 700) {
    document.querySelector(`#header-cont nav a[href="${links[currentSectionImIn]}"]`)
        .classList.add('activated');
}else {

    var newScrollPosition = window.scrollY;
        if (newScrollPosition < lastScrollPosition) {
        
            console.log("up");
            console.log(newScrollPosition);
        }else{

            document.querySelector(`#header-cont nav a.activated`)
                .classList.remove('activated');
                document.querySelector(`#header-cont nav a[href="${links[currentSectionImIn]}"]`)
                .classList.add('deactivated');

            document.querySelector(`#header-cont nav a[href="${links[currentSectionImIn]}"]`)
                .classList.add('activated');
            // document.querySelector(`#header-cont nav a.deactivated`)
            //     .classList.remove('deactivated')


            
            console.log("DOWN");
            console.log(newScrollPosition);   
        }
    
        lastScrollPosition = newScrollPosition;
            
    }
    

    // // Remove class active from element which has it
    //     document.querySelector(`#header-cont nav a.activated`).classList.remove('activated')
    // // Class active addition
    // document.querySelector(`#header-cont nav a[href="${links[currentSectionImIn]}"]`).classList.add('activated');
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
// <!-- numbers end --> 

// <!-- our blog start --> 
// <!-- our blog end --> 

// <!-- contact us start --> 
// <!-- contact us end --> 

// <!-- footer start --> 
// <!-- footer end --> 