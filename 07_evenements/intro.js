// coucou()

//page des évènements

// 1 2vènement avec une fonction
// je sélectionne la div rouge
// let event1 = document.querySelector('#rouge');
// console.log(event1);
// console.log(event1.innerHTML);
// //on va utiliser
// event1.addEventListener('click',fonctionDivRouge);
// // création de la foncction
// function fonctionDivRouge() {
//     alert('Vous avez cliqué sur la div #rouge et maintenant elle est deveny verte !');
//     this.style.background = 'green';
// }

// second exemple avec une fonction anonyme
let event2 = document.querySelector('#p1');
console.log(event2);

event2.addEventListener('click', function() {
    alert('Vous avez cliqué sur le paragraphe id p1');
    this.style.background = "green";
    this.style.color = "color";
});

// 2- nouveau mot clef "mouseover"

document.getElementById('orange').addEventListener('mouseover, fonctionDivOrange');

function fonctionDivOrange(e) {
    this.innerHTML="coucou";
    this.style.fontSize = "1.5em"
}

// 3- nouveau mot-clef "mouseout"
document.querySelector('#bleu').addEventListener('mouseout', fonctionDivBleu);

function fonctionDivBleu(e) {
    this.innerHTML
}