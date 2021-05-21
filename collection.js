let boutonAll = document.querySelector("#all");
let boutonV = document.querySelector("#V");
let boutonGold = document.querySelector("#Gold");
let boutonAEC = document.querySelector("#AEC");
let cartesV = document.querySelectorAll(".Vmax");
let cartesFA = document.querySelectorAll(".FullArt");
let cartesGold = document.querySelectorAll(".Gold");

// Bouton FullArt
boutonAEC.addEventListener("click", () => {
    
    for (let i = 0; i < cartesV.length; i++) {
        cartesV[i].style.display = "none";
    }
    
    for (let i = 0; i < cartesGold.length; i++) {
        cartesGold[i].style.display = "none";
    }

    for (let i = 0; i < cartesFA.length; i++) {
        cartesFA[i].style.display = "flex";
    }
    
})
//  Bouton Gold

boutonGold.addEventListener("click", () => {
    for (let i = 0; i < cartesV.length; i++) {
        cartesV[i].style.display = "none";
    }
    for (let i = 0; i < cartesFA.length; i++) {
        cartesFA[i].style.display = "none"; 
    }
    for (let i = 0; i < cartesGold.length; i++) {
        cartesGold[i].style.display = "flex";    
    }
})

// Bouton V/Vmax

boutonV.addEventListener("click", ()=>{
    for (let i = 0; i < cartesV.length; i++) {
        cartesV[i].style.display = "flex";
    }
    for (let i = 0; i < cartesFA.length; i++) {
        cartesFA[i].style.display = "none"; 
    }
    for (let i = 0; i < cartesGold.length; i++) {
        cartesGold[i].style.display = "none";    
    }
})
// Bouton All

boutonAll.addEventListener("click", ()=>{
    for (let i = 0; i < cartesV.length; i++) {
        cartesV[i].style.display = "flex";
    }
    for (let i = 0; i < cartesFA.length; i++) {
        cartesFA[i].style.display = "flex"; 
    }
    for (let i = 0; i < cartesGold.length; i++) {
        cartesGold[i].style.display = "flex";    
    }
})

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
            nomPseudo.style.fontSize = "17px";
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