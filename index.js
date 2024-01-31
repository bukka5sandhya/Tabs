//this is just code not executing

let aboutButtonEle  = document.getElementById('aboutButton');
let timeToVisitButtonEle = document.getElementById('timeToVisitButton');
let attractionsButtonEle = document.getElementById('attractionsButton');
let tabsContainerEle = document.getElementById('tabsContainer');
let aboutTabEle = document.getElementById('aboutTab');
let timeToVisitTabEle = document.getElementById('timeToVisitTab');
let attractionsTabEle = document.getElementById('attractionsTab');

timeToVisitTabEle.classList.add("d-none");
attractionsTabEle.classList.add("d-none");

function  clickAboutTab(){
    aboutTabEle.classList.remove("d-none");
    timeToVisitButtonEle.classList.add("d-none");
    attractionsTabEle.classList.add("d-none");

    aboutButtonEle.classList.add("selected-button");
    timeToVisitButtonEle.classList.remove("selected-button");
    attractionsButtonEle.classList.remove("selected-button");
}
function clickTimeToVisitTab(){
    aboutTabEle.classList.add("d-none");
    timeToVisitButtonEle.classLsit.remove("d-none");
    attractionsTabEle.classList.add("d-none");

    aboutButtonEle.classList.remove("selected-button");
    timeToVisitButtonEle.classList.add("selected-button");
    attractionsButtonEle.classList.remove("selected-button");
}
function  clickAttractionsTab(){
    aboutTabEle.classList.add("d-none");
    timeToVisitButtonEle.classLsit.add("d-none");
    attractionsTabEle.classList.remove("d-none");

    aboutButtonEle.classList.remove("selected-button");
    timeToVisitButtonEle.classList.remove("selected-button");
    attractionsButtonEle.classList.add("selected-button");
}


