let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline // Animations dans le temps
.to('.pokemon', 10, {y: -100}, "-=10")
.to('.mew', 10, {x: -300}, "-=10")
.fromTo('.bg1', 10, {y: -60}, {y:0, duration:10}, "-=10") // Permet de dire tu pars de ... jusqu'à ...
.to('.content', 10, {top:'0%'}, '-=10')
.to('.content-twitter', 10, {top:'0%'})

let scene = new ScrollMagic.Scene({
    triggerElement : "section", // Element à sélectionner
    duration: "150%", // Vitesse du scroll
    triggerHook: 0,
})

// Déclaration des fonctions pour animer tout seul
    .setTween(timeline)
    .setPin("section")
    .addTo(controller)

// DIV Connexion
let nomPseudo = document.querySelector(".nomPseudo");
let pseudo = document.querySelector("#pseudo");

let connexionMenu = function(){
    let connexion = document.querySelector(".compte");
    let connexionSidebar = document.querySelector(".connexion");
    let Seconnecter = document.querySelector("#connexion")
    let rond = document.querySelector(".rond");
    

    connexion.addEventListener("click", function(){
        connexionSidebar.classList.toggle("connexion-active");
        Seconnecter.addEventListener("click", function(){
            rond.style.background = "green";
            connexionSidebar.classList.toggle("connexion-active");
            nomPseudo.innerHTML = pseudo.value;
        })  
    })
}
connexionMenu();

// Menu burger

var burgerMenu = function (){
    let sidebar = document.querySelector(".sidebar");
    let burger = document.querySelector(".burger");
    let links = document.querySelectorAll(".close-nav");
    let bonjour = document.querySelector("#pseudoSidebar");

    burger.addEventListener("click", function(){
        sidebar.classList.toggle("active");
        burger.classList.toggle("toggle");
        console.log(pseudo.value)
        bonjour.innerHTML = pseudo.value;
    })
    
}
burgerMenu();

