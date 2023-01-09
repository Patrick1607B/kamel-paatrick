//js pour joueur2
//plateau de jeu principal
const div21 = document.querySelector(".div21")
const div22 = document.querySelector(".div22")
const div23 = document.querySelector(".div23")
const div24 = document.querySelector(".div24")
const div25 = document.querySelector(".div25")
const div26 = document.querySelector(".div26")
const div27 = document.querySelector(".div27")
const div28 = document.querySelector(".div28")
const div29 = document.querySelector(".div29")
const div210 = document.querySelector(".div210")
const div211 = document.querySelector(".div211")
const div212 = document.querySelector(".div212")
const div213 = document.querySelector(".div213")
const div214 = document.querySelector(".div214")
const div215 = document.querySelector(".div215")
const div216 = document.querySelector(".div216")
//plateau de tir
const div2A1 = document.querySelector(".div2A1")
const div2A2 = document.querySelector(".div2A2")
const div2A3 = document.querySelector(".div2A3")
const div2A4 = document.querySelector(".div2A4")
const div2A5 = document.querySelector(".div2A5")
const div2A6 = document.querySelector(".div2A6")
const div2A7 = document.querySelector(".div2A7")
const div2A8 = document.querySelector(".div2A8")
const div2A9 = document.querySelector(".div2A9")
const div2A10 = document.querySelector(".div2A10")
const div2A11 = document.querySelector(".div2A11")
const div2A12 = document.querySelector(".div2A12")
const div2A13 = document.querySelector(".div2A13")
const div2A14 = document.querySelector(".div2A14")
const div2A15 = document.querySelector(".div2A15")
const div2A16 = document.querySelector(".div2A16")
// bouton
const btnJoueur2 = document.querySelector(".jouer2")
const btnChoisirJoueur2 = document.querySelector(".choisirjoueur2")
const btnResume2 = document.querySelector(".resume2")


btnJoueur2.addEventListener('click', function(){
    console.log('clique joueur');
});
btnChoisirJoueur2.addEventListener('click', function(){
    console.log('clique choix joueur');
});
btnResume2.addEventListener('click', function(){
    console.log('clique resume');
});
//drag and drop
function start(e) {
    e.dataTransfer.effectAllowed="move";
    e.dataTransfer.setData("text",e.target.getAttribute("id"));
}
function over(e) {
    return false;
}
function drop(e) {
    ob=e.dataTransfer.getData("text");
    e.currentTarget.appendChild(document.getElementById(ob));
}
//fin drag and drop
div2A1.addEventListener('click', touche)

function touche() {
    console.log('clique 2A1');
}
    


