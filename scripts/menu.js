const aboutStudio = document.getElementById("tab1");
const films = document.getElementById("tab2");
const articles = document.getElementById("tab3");
const forTabs = document.getElementsByClassName("forTabs");

aboutStudio.addEventListener("mouseover", function (){
    forTabs[0].classList.add('active');
    forTabs[1].classList.add('active');
    forTabs[2].classList.add('active');
    forTabs[3].classList.add('active');
});

aboutStudio.addEventListener("mouseout", function (){
    forTabs[0].classList.remove('active');
    forTabs[1].classList.remove('active');
    forTabs[2].classList.remove('active');
    forTabs[3].classList.remove('active');
});

films.addEventListener("mouseover", function (){
    forTabs[4].classList.add('active');
    forTabs[5].classList.add('active');
    forTabs[6].classList.add('active');
});

films.addEventListener("mouseout", function (){
    forTabs[4].classList.remove('active');
    forTabs[5].classList.remove('active');
    forTabs[6].classList.remove('active');
});

articles.addEventListener("mouseover", function (){
    forTabs[7].classList.add('active');
    forTabs[8].classList.add('active');
    forTabs[9].classList.add('active');
    forTabs[10].classList.add('active');
});

articles.addEventListener("mouseout", function (){
    forTabs[7].classList.remove('active');
    forTabs[8].classList.remove('active');
    forTabs[9].classList.remove('active');
    forTabs[10].classList.remove('active');
});
