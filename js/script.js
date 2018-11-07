/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var knp = document.querySelectorAll("article .download > img:first-of-type");
var melding = document.querySelector('.melding');

/* de functie geeft een event mee. Hiermee wordt een var aangemaakt die parentContrainer heet waar aan wordt gegeven dat  alle elementen uit de parentnode een class active moeten krijgen */
function naarZijkant(event){
    console.log(event)
    var parentContainer = event.toElement.parentNode;

    parentContainer.classList.add('active');
    melding.classList.remove('invisible');
}

// als het aantal knoppen op geklikt wordt wordt de functie naar zijkant aangeroepen. dus er zijn 3 knoppen dus werkt de functie 3x //
for(var i = 0; i < knp.length; i++){
    knp[i].addEventListener('click', naarZijkant)
}



var fltr = document.querySelector(".filteren label:first-of-type");

function resultaten(){
    document.querySelector('.filteren span:first-of-type').textContent="";
    document.querySelector('.makkelijk').textContent="(2)";
    document.querySelector('.moeilijk').textContent="(13)";
    document.querySelector('.gemiddeld').textContent="(10)";
    document.querySelector('.resultaten').textContent="(23)";
}


fltr.addEventListener('click',resultaten);


var knopfilter = document.querySelector(".filteren button");

function verhalen(){
    var section = document.querySelector('section');
    section.classList.add('nieuw');
    document.querySelector("main section > h2").textContent="23 resultaten";
}


knopfilter.addEventListener('click',verhalen);


var knopklap = document.querySelector('.filteren img:nth-of-type(2)');

function filterenOpen(){
    var filteren = document.querySelector('.filteren');
    filteren.classList.toggle('open');
}

knopklap.addEventListener('click',filterenOpen);



var zoekKnp = document.querySelector("nav:first-of-type > ul> li:nth-of-type(5) > img");

function zoekenUit(){
    var gedeelte = document.querySelector('nav + form');
    gedeelte.classList.toggle('naKlik');
}

zoekKnp.addEventListener('click', zoekenUit);
