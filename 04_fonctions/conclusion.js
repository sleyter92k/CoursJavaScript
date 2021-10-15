// coucou();

//page conclusion fonctions

// let monAlerte = function () {
//     alert('Alerte exécutée dans une faction anonyme');
// }

// monAlerte();

// auto-invocation d'une fonction anonyme

// function () {
//     alert('Alerte dans une seconde fonction');
// }

// fonction auto-invoquée:*
// (function () {
//     alert('Alerte dans une seconde fonction');
// })();




let para1 = document.getElementById('p1');
console.log(typeof para1, para1);

para1.addEventListener('click', function (){
    alert('Eh ! tu as bien cliqué sur le paragraphe 1 !');
});

let para2 = document.getElementById('p2');// sur cette variable j'ajoute un écouteur d'évènement avec au clique une fonction anonyme qui s'éxécute à la demande
alert('Eh ! Tu a bien ')

para2.addEventListener('dblclick', function(){
    alert('Et là un double clique sur le paragraphe.')
});

// Fonction récursive
function decompte(t) {
    if (t > 10) {
        document.getElementById('p3').innerHTML += t + ' - ';
        return decompte (t - 10);
    } else {
        return t ;
    }
}// fin fonction

decompte(1000);