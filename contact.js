// Sticky header
window.onscroll = function() {myFunction()};
        
var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

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
// Récupérer les données contacts
let pseudoInput = document.querySelector("#pseudoForm");
let emailInput = document.querySelector("#emailForm");
let messageInput = document.querySelector("#messageForm");
let pseudoRep = document.querySelector("#pseudoPlace");
let emailRep = document.querySelector("#emailPlace");
let divRep = document.querySelector(".div-reponse")
let bouttonSubmit = document.querySelector("#submitBtn");
let divClose = document.querySelector("#close");

function contact (e){
    // Empeche le refresh de la page au click submit
    e.preventDefault();

    if(pseudoInput.value != "" && emailInput.value != "" && messageInput.value != ""){

      divRep.style.display ="flex";
      pseudoRep.innerHTML = pseudoInput.value;
      emailRep.innerHTML = emailInput.value;  
    }

    else{
        alert("veuillez remplir les champs");
    } 
}

bouttonSubmit.addEventListener("click", contact);
divClose.addEventListener("click", () =>{
  divRep.style.display = "none";
})