const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar-links')[0]


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})



//on déclare nos variables globales
let compteur = 0;
let timer, elements, slides, slideWidth;

window.onload = () => {
    const diapo = document.querySelector(".diapo");
    elements = document.querySelector(".elements");
    slides = Array.from(elements.children);

    //on calcule la largeur du diaporama
    slideWidth = diapo.getBoundingClientRect().width;

    let next = document.querySelector("#nav-droite");
    let prev = document.querySelector("#nav-gauche");

    //on ajoute un écouteur d'évenement
    next.addEventListener("click", slideNext);
    prev.addEventListener("click", slidePrev);


    //on gere le défilement automatique
    timer = setInterval(slideNext, 4000);

    //on gere le survol de la souris
    diapo.addEventListener("mouseover", stopTimer);
    diapo.addEventListener("mouseout", startTimer);

    //gestion responsivité
    window.addEventListener("resize", () => {
        slideWidth = diapo.getBoundingClientRect().width;
        slideNext();
    })
}

//fonction pour gerer le défilement à droite
function slideNext() {
    compteur++;//on prend notre compteur et on l'incrémente

    //on verifie si la longeur est égale à celle de notre tableau slide
    if (compteur == slides.length) {
        compteur = 0;
    }
    let decal = -slideWidth * compteur;
    elements.style.transform = `translateX(${decal}px)`;
}


//fonction pour gerer le défilement à gauche
function slidePrev() {
    compteur--;//on prend notre compteur et on décrémente

    //on verifie si le compteur est inférieure à 0
    if (compteur < 0) {
        compteur = slides.length - 1;
    }
    let decal = -slideWidth * compteur;
    elements.style.transform = `translateX(${decal}px)`;
}


//fonction qui arrete le timer au survol
function stopTimer() {
    clearInterval(timer)
}

//fonction qui continue le défilement 
function startTimer() {
    timer = setInterval(slideNext, 4000)
}

