console.log("🔫");
// plateau de jeu index (joueur 1)
const div1 = document.querySelector(".div1")
const div2 = document.querySelector(".div2")
const div3 = document.querySelector(".div3")
const div4 = document.querySelector(".div4")
const div5 = document.querySelector(".div5")
const div6 = document.querySelector(".div6")
const div7 = document.querySelector(".div7")
const div8 = document.querySelector(".div8")
const div9 = document.querySelector(".div9")
const div10 = document.querySelector(".div10")
const div11 = document.querySelector(".div11")
const div12 = document.querySelector(".div12")
const div13 = document.querySelector(".div13")
const div14 = document.querySelector(".div14")
const div15 = document.querySelector(".div15")
const div16 = document.querySelector(".div16")
// bouton
const btnJoueur = document.querySelector(".jouer")
const btnChoisirJoueur = document.querySelector(".choisirjoueur")
const btnResume = document.querySelector(".resume")


btnJoueur.addEventListener('click', function(){
    console.log('clique joueur');
});
btnChoisirJoueur.addEventListener('click', function(){
    console.log('clique choix joueur');
});
btnResume.addEventListener('click', function(){
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
    console.log('id case du bateau:', e.currentTarget.id)
    e.currentTarget.appendChild(document.getElementById(ob));
    console.log(e.dataTransfer);
}
//gin drag and drop




















