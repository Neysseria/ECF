let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline // Animations dans le temps
.to('.pokemon', 10, {y: -100}, "-=10")
.to('.mew', 10, {x: -400}, "-=10")
.fromTo('.bg1', 10, {y: -60}, {y:0, duration:10}, "-=10") // Permet de dire tu pars de ... jusqu'à ...
.to('.content', 10, {top:'0%'}, '-=10')
.fromTo('.content-images', {opacity: 0}, {opacity:1, duration:10}, '-=10')
.fromTo('.text', {opacity:0}, {opacity:1, duration:10}, '-=10')

let scene = new ScrollMagic.Scene({
    triggerElement : "section", // Element à sélectionner
    duration: "100%", // Vitesse du scroll
    triggerHook: 0,
})
// Déclaration des fonctions pour animer tout seul
    .setTween(timeline)
    .setPin("section")
    .addTo(controller)
